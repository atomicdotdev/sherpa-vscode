import * as path from 'node:path';
import { realpath } from 'node:fs/promises';
import * as vscode from 'vscode';
import { readIntentMetadata } from '../shared/intentMetadata';

const INTENT_FILES = '**/{intent.md,*.intent.md}';
const EXCLUDED_DIRECTORY = /(?:^|[/\\])(?:\.git|\.atomic|node_modules)(?:[/\\]|$)/;
const decoder = new TextDecoder();
const STATUS_ICONS: Record<string, string> = {
  backlog: 'circle-outline', planned: 'calendar', in_progress: 'play-circle',
  'needs-review': 'eye', done: 'check',
};

type Intent = {
  uri: vscode.Uri;
  relativePath: string;
  title: string;
  id: string;
  status: string;
  priority: string;
  declaredProject: string;
  issue?: string;
};
type Project = { folder: vscode.WorkspaceFolder; intents: Intent[]; issue?: string };
type Node = vscode.TreeItem & { project?: Project };
type StatusOption = vscode.QuickPickItem & { status?: string };

/** A read-only working-copy index, not an intent validator or native Atomic client. */
class IntentExplorer implements vscode.TreeDataProvider<Node>, vscode.Disposable {
  private readonly changed = new vscode.EventEmitter<Node | undefined>();
  readonly onDidChangeTreeData = this.changed.event;
  private readonly view: vscode.TreeView<Node>;
  private readonly subscriptions: vscode.Disposable[] = [this.changed];
  private watcherSubscriptions: vscode.Disposable[] = [];
  private projects: Project[] = [];
  private scan?: vscode.CancellationTokenSource;
  private timer?: ReturnType<typeof setTimeout>;
  private dirty = true;
  private disposed = false;
  private query = '';
  private foldedQuery = '';
  private status?: string;

  constructor() {
    this.view = vscode.window.createTreeView('sherpaIntents.list', { treeDataProvider: this, showCollapseAll: true });
    this.subscriptions.push(this.view,
      this.view.onDidChangeVisibility(({ visible }) => { if (visible && this.dirty) void this.refresh(); }),
      vscode.workspace.onDidChangeWorkspaceFolders(() => { this.watchProjects(); this.scheduleRefresh(); }),
      vscode.commands.registerCommand('sherpaIntents.refresh', () => this.refresh()),
      vscode.commands.registerCommand('sherpaIntents.search', async () => {
        const query = await vscode.window.showInputBox({ title: 'Search Workspace Intents',
          prompt: 'Match an intent title or ID. Leave empty to clear the search.', value: this.query });
        if (query === undefined || this.disposed) return;
        this.query = query.trim();
        this.foldedQuery = this.query.toLowerCase();
        this.publish();
      }),
      vscode.commands.registerCommand('sherpaIntents.filterStatus', async () => {
        const statuses = new Set<string>();
        for (const project of this.projects) for (const intent of project.intents) statuses.add(intent.status);
        const options: StatusOption[] = [{ label: 'All statuses' },
          ...[...statuses].sort().map((status) => ({ label: status || 'Unspecified', status }))];
        const option = await vscode.window.showQuickPick(options, { title: 'Filter Workspace Intents by Declared Status',
          placeHolder: this.status === undefined ? 'All statuses' : this.status || 'Unspecified' });
        if (!option || this.disposed) return;
        this.status = option.status;
        this.publish();
      }),
      vscode.commands.registerCommand('sherpaIntents.clearFilters', () => {
        this.query = '';
        this.foldedQuery = '';
        this.status = undefined;
        this.publish();
      })
    );
    this.watchProjects();
    this.publish();
    if (this.view.visible) void this.refresh();
  }

  private watchProjects(): void {
    this.watcherSubscriptions.forEach((subscription) => subscription.dispose());
    this.watcherSubscriptions = [];
    for (const folder of vscode.workspace.workspaceFolders ?? []) {
      const watcher = vscode.workspace.createFileSystemWatcher(new vscode.RelativePattern(folder, INTENT_FILES));
      const changed = (uri: vscode.Uri) => {
        const relative = uri.path.slice(folder.uri.path.length);
        if (!EXCLUDED_DIRECTORY.test(relative)) this.scheduleRefresh();
      };
      this.watcherSubscriptions.push(watcher, watcher.onDidCreate(changed), watcher.onDidChange(changed), watcher.onDidDelete(changed));
    }
  }

  private scheduleRefresh(): void {
    if (this.disposed) return;
    this.dirty = true;
    this.scan?.cancel();
    clearTimeout(this.timer);
    if (this.view.visible) this.timer = setTimeout(() => { this.timer = undefined; void this.refresh(); }, 200);
  }

  private async refresh(): Promise<void> {
    if (this.disposed) return;
    clearTimeout(this.timer);
    this.timer = undefined;
    this.scan?.cancel();
    this.scan?.dispose();
    const scan = new vscode.CancellationTokenSource();
    this.scan = scan;
    this.view.message = 'Reading workspace intents…';
    const projects: Project[] = [];
    for (const folder of vscode.workspace.workspaceFolders ?? []) {
      if (scan.token.isCancellationRequested) return;
      projects.push(await this.readProject(folder, scan.token));
    }
    if (this.disposed || scan.token.isCancellationRequested) return;
    this.projects = projects;
    this.dirty = false;
    this.publish();
  }

  private async readProject(folder: vscode.WorkspaceFolder, token: vscode.CancellationToken): Promise<Project> {
    const project: Project = { folder, intents: [] };
    try {
      const canonicalRoot = folder.uri.scheme === 'file' ? await realpath(folder.uri.fsPath) : undefined;
      const rootKey = folder.uri.toString();
      // Only null disables files.exclude; filter dependencies/VCS paths before reading metadata.
      const files = await vscode.workspace.findFiles(new vscode.RelativePattern(folder, INTENT_FILES), null, undefined, token);
      let next = 0;
      const read = async () => {
        while (next < files.length && !token.isCancellationRequested) {
          const uri = files[next++];
          if (vscode.workspace.getWorkspaceFolder(uri)?.uri.toString() !== rootKey) continue;
          const relativePath = uri.path.slice(folder.uri.path.length).replace(/^\/+/, '');
          if (EXCLUDED_DIRECTORY.test(relativePath)) continue;
          const intent = await this.readIntent(uri, relativePath, canonicalRoot, token);
          if (intent && !token.isCancellationRequested) project.intents.push(intent);
        }
      };
      // Bound file-provider traffic without allocating one promise per intent.
      const readers: Promise<void>[] = [];
      for (let index = 0; index < Math.min(8, files.length); index++) readers.push(read());
      await Promise.all(readers);
      project.intents.sort((a, b) => a.title.localeCompare(b.title) || a.relativePath.localeCompare(b.relativePath));
    } catch (error) {
      if (!token.isCancellationRequested) project.issue = error instanceof Error ? error.message : String(error);
    }
    return project;
  }

  private async readIntent(uri: vscode.Uri, relativePath: string, canonicalRoot: string | undefined,
    token: vscode.CancellationToken): Promise<Intent | undefined> {
    const intent: Intent = { uri, relativePath, title: relativePath, id: '', status: '', priority: '', declaredProject: '' };
    try {
      if (canonicalRoot !== undefined) {
        const resolved = await realpath(uri.fsPath);
        const relative = path.relative(canonicalRoot, resolved);
        if (relative === '..' || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative) || EXCLUDED_DIRECTORY.test(relative)) return;
      }
      const stat = await vscode.workspace.fs.stat(uri);
      if (stat.type & vscode.FileType.Directory) return;
      if (canonicalRoot === undefined && stat.type & vscode.FileType.SymbolicLink) return;
      if (token.isCancellationRequested) return;
      const source = decoder.decode(await vscode.workspace.fs.readFile(uri));
      if (token.isCancellationRequested) return;
      const metadata = readIntentMetadata(source);
      if (!metadata) {
        intent.issue = 'Missing or invalid intent metadata. Open the file to inspect its source.';
      } else {
        intent.title = metadata.title || relativePath;
        intent.id = metadata.id;
        intent.status = metadata.status;
        intent.priority = metadata.priority;
        intent.declaredProject = metadata.project;
      }
    } catch (error) {
      intent.issue = `Unable to read intent: ${error instanceof Error ? error.message : String(error)}`;
    }
    return intent;
  }

  private matches(intent: Intent): boolean {
    return (this.status === undefined || intent.status === this.status) && (!this.foldedQuery ||
      intent.title.toLowerCase().includes(this.foldedQuery) || intent.id.toLowerCase().includes(this.foldedQuery));
  }

  private publish(): void {
    if (this.disposed) return;
    let total = 0, visible = 0;
    for (const project of this.projects) for (const intent of project.intents) {
      total++;
      if (this.matches(intent)) visible++;
    }
    const filtered = this.query !== '' || this.status !== undefined;
    this.view.description = filtered ? `${visible} of ${total}` : String(total);
    const filters: string[] = [];
    if (this.query) filters.push(`Title/ID: ${this.query}`);
    if (this.status !== undefined) filters.push(`Declared status: ${this.status || 'Unspecified'}`);
    this.view.message = !(vscode.workspace.workspaceFolders?.length) ? 'Open a workspace folder to browse its intents.' :
      filtered ? `${filters.join(' · ')}${visible ? '' : '\nNo matching intents. Use Clear Filters to show all intents.'}` :
      this.projects.some((project) => project.issue) ? 'Some workspace folders could not be read. Expand them for details.' :
      total ? undefined : 'No intent files found. Intents use intent.md or *.intent.md filenames, including inside .vault.';
    this.changed.fire(undefined);
  }

  getTreeItem(node: Node): vscode.TreeItem { return node; }

  getChildren(node?: Node): Node[] {
    if (node && !node.project) return [];
    if (node?.project) {
      const nodes: Node[] = [];
      if (node.project.issue) nodes.push({ label: 'Unable to list intents', tooltip: node.project.issue, iconPath: new vscode.ThemeIcon('warning') });
      for (const intent of node.project.intents) if (this.matches(intent)) {
        const details = [intent.title, intent.id && `ID: ${intent.id}`, `Declared status: ${intent.status || 'Unspecified'}`,
          intent.priority && `Priority: ${intent.priority}`, intent.declaredProject && `Declared project: ${intent.declaredProject}`,
          intent.relativePath, intent.issue].filter(Boolean).join('\n');
        nodes.push({ id: `intent:${intent.uri.toString()}`, label: intent.title,
          description: [intent.id, intent.issue ? 'Metadata unavailable' : intent.status || 'Unspecified'].filter(Boolean).join(' · '),
          tooltip: details, resourceUri: intent.uri, contextValue: 'workspaceIntent',
          iconPath: new vscode.ThemeIcon(intent.issue ? 'warning' : Object.hasOwn(STATUS_ICONS, intent.status) ? STATUS_ICONS[intent.status] : 'note'),
          command: { command: 'sherpaIntent.open', title: 'Open Intent as Ticket', arguments: [intent.uri] },
          accessibilityInformation: { label: `${intent.id} ${intent.title}, declared status ${intent.status || 'unspecified'}` } });
      }
      return nodes;
    }
    const nodes: Node[] = [];
    const filtered = this.query !== '' || this.status !== undefined;
    for (const project of this.projects) {
      let count = 0;
      for (const intent of project.intents) if (this.matches(intent)) count++;
      if (filtered && !count && !project.issue) continue;
      nodes.push({ id: `project:${project.folder.uri.toString()}`, label: project.folder.name,
        description: `${count} ${count === 1 ? 'intent' : 'intents'}`, tooltip: project.folder.uri.toString(),
        resourceUri: project.folder.uri, iconPath: new vscode.ThemeIcon(project.issue ? 'warning' : 'folder'),
        collapsibleState: vscode.TreeItemCollapsibleState.Expanded, contextValue: 'workspaceIntentProject', project });
    }
    return nodes;
  }

  dispose(): void {
    this.disposed = true;
    clearTimeout(this.timer);
    this.scan?.cancel();
    this.scan?.dispose();
    this.watcherSubscriptions.forEach((subscription) => subscription.dispose());
    this.subscriptions.forEach((subscription) => subscription.dispose());
  }
}

export function registerIntentExplorer(context: vscode.ExtensionContext): void {
  context.subscriptions.push(new IntentExplorer());
}
