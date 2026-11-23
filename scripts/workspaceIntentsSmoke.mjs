// Real workspace discovery and metadata parsing; only VS Code host services are doubled.
// Run in its own Bun process so mock.module('vscode') cannot contaminate another suite.
import assert from 'node:assert/strict';
import { lstat, mkdir, mkdtemp, readFile, rm, stat, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { basename, dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { mock } from 'bun:test';

const root = await mkdtemp(join(tmpdir(), 'sherpa-workspace-intents-'));
const projectA = join(root, 'alpha');
const projectB = join(root, 'beta');
const nestedProject = join(projectA, 'nested');
const emptyProject = join(root, 'empty');
const addedProject = join(root, 'added');
const externalProject = join(root, 'external');
const slash = (path) => path.split(sep).join('/');
const owns = (base, path) => {
  const child = relative(base, path);
  return child === '' || (!isAbsolute(child) && child !== '..' && !child.startsWith(`..${sep}`));
};
const disposable = (dispose = () => {}) => ({ dispose });

class EventEmitter {
  listeners = new Set();
  disposed = false;
  event = (listener, thisArg, disposables) => {
    if (this.disposed) return disposable();
    const entry = { listener, thisArg };
    this.listeners.add(entry);
    const subscription = disposable(() => this.listeners.delete(entry));
    disposables?.push(subscription);
    return subscription;
  };
  fire(value) {
    if (!this.disposed) {
      for (const { listener, thisArg } of [...this.listeners]) listener.call(thisArg, value);
    }
  }
  dispose() { this.disposed = true; this.listeners.clear(); }
}

class Uri {
  constructor(scheme, path) { this.scheme = scheme; this.fsPath = path; this.path = slash(path); }
  static file(path) { return new Uri('file', resolve(path)); }
  static parse(value) {
    const url = new URL(value);
    return new Uri(url.protocol.slice(0, -1), url.protocol === 'file:' ? fileURLToPath(url) : url.pathname);
  }
  static joinPath(base, ...parts) { return new Uri(base.scheme, join(base.fsPath, ...parts)); }
  with(changes) { return new Uri(changes.scheme ?? this.scheme, changes.path ?? this.fsPath); }
  toString() { return this.scheme === 'file' ? pathToFileURL(this.fsPath).href : `${this.scheme}:${this.path}`; }
}

class RelativePattern {
  constructor(base, pattern) {
    this.baseUri = typeof base === 'string' ? Uri.file(base) : (base.uri ?? base);
    this.base = this.baseUri.fsPath;
    this.pattern = pattern;
  }
}

class CancellationTokenSource {
  emitter = new EventEmitter();
  token = { isCancellationRequested: false, onCancellationRequested: this.emitter.event };
  cancel() {
    if (!this.token.isCancellationRequested) {
      this.token.isCancellationRequested = true;
      this.emitter.fire(undefined);
    }
  }
  dispose(cancel = false) { if (cancel) this.cancel(); this.emitter.dispose(); }
}

class TreeItem {
  constructor(label, collapsibleState = 0) {
    if (label instanceof Uri) this.resourceUri = label; else this.label = label;
    this.collapsibleState = collapsibleState;
  }
}
class ThemeIcon {
  constructor(id, color) {
    assert.equal(typeof id, 'string', 'VS Code ThemeIcon IDs must be strings');
    this.id = id;
    this.color = color;
  }
}
class MarkdownString {
  constructor(value = '') { this.value = value; }
  appendText(value) { this.value += value; return this; }
  appendMarkdown(value) { this.value += value; return this; }
}
const FileType = { Unknown: 0, File: 1, Directory: 2, SymbolicLink: 64 };
const commands = new Map();
const watchers = [];
const folderChanges = new EventEmitter();
const deniedReads = new Set();
const metadataReads = [];
const inputAnswers = [];
const statusAnswers = [];
const statusMenus = [];
const opened = [];
const subscriptions = [];
const folder = (path, index) => ({ uri: Uri.file(path), name: basename(path), index });
let provider;
let treeView;
let treeChanges = 0;
let findFilesCalls = 0;
let scanBarrier;

function patternMatches(pattern, uri, defaultBase) {
  const base = typeof pattern === 'string' ? defaultBase : pattern.baseUri?.fsPath ?? pattern.base;
  const glob = typeof pattern === 'string' ? pattern : pattern.pattern;
  if (!base || !owns(base, uri.fsPath)) return false;
  return new Bun.Glob(glob).match(slash(relative(base, uri.fsPath)));
}

const workspace = {
  isTrusted: true,
  workspaceFolders: [projectA, projectB, nestedProject, emptyProject].map(folder),
  onDidChangeWorkspaceFolders: folderChanges.event,
  getWorkspaceFolder(uri) {
    return this.workspaceFolders.filter((item) => owns(item.uri.fsPath, uri.fsPath))
      .sort((a, b) => b.uri.fsPath.length - a.uri.fsPath.length)[0];
  },
  asRelativePath(value, includeWorkspaceFolder = false) {
    const uri = typeof value === 'string' ? Uri.file(value) : value;
    const owner = this.getWorkspaceFolder(uri);
    if (!owner) return uri.fsPath;
    const path = slash(relative(owner.uri.fsPath, uri.fsPath));
    return includeWorkspaceFolder ? `${owner.name}/${path}` : path;
  },
  async findFiles(include, exclude, maxResults, token) {
    findFilesCalls++;
    const bases = typeof include === 'string'
      ? this.workspaceFolders.map((item) => item.uri.fsPath)
      : [include.baseUri?.fsPath ?? include.base];
    const pattern = typeof include === 'string' ? include : include.pattern;
    const result = new Map();
    for (const base of bases) {
      for await (const path of new Bun.Glob(pattern).scan({ cwd: base, dot: true, onlyFiles: true, followSymlinks: true })) {
        if (token?.isCancellationRequested) return [];
        const uri = Uri.file(join(base, path));
        // Like VS Code, explicit patterns still inherit files.exclude unless exclude is null.
        if (exclude !== null && slash(relative(base, uri.fsPath)).split('/').includes('.vault')) continue;
        if (exclude && patternMatches(exclude, uri, base)) continue;
        result.set(uri.toString(), uri);
      }
    }
    const found = [...result.values()].sort((a, b) => a.fsPath.localeCompare(b.fsPath));
    const barrier = scanBarrier;
    if (barrier && bases.includes(barrier.base)) {
      scanBarrier = undefined;
      barrier.started();
      await barrier.released;
    }
    if (token?.isCancellationRequested) return [];
    return maxResults === undefined ? found : found.slice(0, maxResults);
  },
  fs: {
    async readFile(uri) {
      metadataReads.push(uri.fsPath);
      if (deniedReads.has(uri.fsPath)) {
        const error = new Error('Access denied by the filesystem provider');
        error.code = 'NoPermissions';
        throw error;
      }
      return new Uint8Array(await readFile(uri.fsPath));
    },
    async stat(uri) {
      const link = await lstat(uri.fsPath);
      const info = link.isSymbolicLink() ? await stat(uri.fsPath) : link;
      const type = (info.isDirectory() ? FileType.Directory : info.isFile() ? FileType.File : FileType.Unknown)
        | (link.isSymbolicLink() ? FileType.SymbolicLink : 0);
      return { type, ctime: info.ctimeMs, mtime: info.mtimeMs, size: info.size };
    },
    async readDirectory(uri) {
      const entries = [];
      for await (const path of new Bun.Glob('*').scan({ cwd: uri.fsPath, dot: true, onlyFiles: false })) {
        const child = Uri.joinPath(uri, path);
        entries.push([path, (await workspace.fs.stat(child)).type]);
      }
      return entries;
    },
  },
  createFileSystemWatcher(pattern, ignoreCreate = false, ignoreChange = false, ignoreDelete = false) {
    const create = new EventEmitter(), change = new EventEmitter(), remove = new EventEmitter();
    const watcher = { pattern, disposed: false, ignoreCreate, ignoreChange, ignoreDelete,
      onDidCreate: create.event, onDidChange: change.event, onDidDelete: remove.event,
      emit: { create, change, delete: remove },
      dispose() { this.disposed = true; create.dispose(); change.dispose(); remove.dispose(); } };
    watchers.push(watcher);
    return watcher;
  },
};

mock.module('vscode', () => ({
  EventEmitter, Uri, RelativePattern, CancellationTokenSource, TreeItem, ThemeIcon, MarkdownString, FileType,
  TreeItemCollapsibleState: { None: 0, Collapsed: 1, Expanded: 2 },
  workspace,
  commands: {
    registerCommand(id, handler) {
      assert.equal(commands.has(id), false, `Command registered twice: ${id}`);
      commands.set(id, handler);
      return disposable(() => commands.delete(id));
    },
    async executeCommand(id, ...args) {
      if (id === 'sherpaIntent.open') { opened.push(args); return; }
      assert.ok(commands.has(id), `Unknown command: ${id}`);
      return commands.get(id)(...args);
    },
  },
  window: {
    createTreeView(id, options) {
      assert.equal(id, 'sherpaIntents.list');
      provider = options.treeDataProvider;
      treeView = { disposed: false, visible: true, selection: [],
        onDidChangeVisibility: new EventEmitter().event,
        onDidChangeSelection: new EventEmitter().event,
        dispose() { this.disposed = true; } };
      return treeView;
    },
    async showInputBox() {
      assert.ok(inputAnswers.length, 'Unexpected search prompt');
      return inputAnswers.shift();
    },
    async showQuickPick(items) {
      const options = await items;
      statusMenus.push(options);
      assert.ok(statusAnswers.length, 'Unexpected status prompt');
      const answer = statusAnswers.shift();
      return answer === undefined ? undefined : answer(options);
    },
    createOutputChannel: () => ({ appendLine() {}, show() {}, dispose() {} }),
    showErrorMessage(message) { throw new Error(message); },
  },
}));

function emitWatch(kind, path) {
  const uri = Uri.file(path);
  for (const watcher of watchers) {
    if (watcher.disposed || watcher[`ignore${kind[0].toUpperCase()}${kind.slice(1)}`]) continue;
    const matches = typeof watcher.pattern === 'string'
      ? workspace.workspaceFolders.some((item) => patternMatches(watcher.pattern, uri, item.uri.fsPath))
      : patternMatches(watcher.pattern, uri);
    if (matches) watcher.emit[kind].fire(uri);
  }
}

const text = (value) => typeof value === 'string' ? value : value?.label;
async function snapshot() {
  const groups = [], rows = [];
  for (const element of await provider.getChildren()) {
    const item = await provider.getTreeItem(element);
    if (item.contextValue !== 'workspaceIntentProject') continue;
    const groupRows = [];
    for (const child of await provider.getChildren(element)) {
      const childItem = await provider.getTreeItem(child);
      if (childItem.contextValue !== 'workspaceIntent') continue;
      assert.equal(childItem.command?.command, 'sherpaIntent.open', 'Intent clicks must use the existing editor');
      assert.equal(childItem.command.arguments.length, 1);
      const uri = childItem.command.arguments[0];
      assert.ok(uri instanceof Uri, 'The existing editor expects a VS Code Uri');
      const row = { element: child, item: childItem, path: uri.fsPath, label: text(childItem.label), group: text(item.label) };
      groupRows.push(row);
      rows.push(row);
    }
    groups.push({ element, item, label: text(item.label), rows: groupRows });
  }
  return { groups, rows };
}
const paths = (state) => state.rows.map((row) => row.path).sort();
const run = async (id) => {
  assert.ok(commands.has(id), `Missing command: ${id}`);
  return commands.get(id)();
};
const refresh = () => run('sherpaIntents.refresh');
async function search(answer) { inputAnswers.push(answer); await run('sherpaIntents.search'); }
async function chooseStatus(status) {
  statusAnswers.push((items) => {
    const selected = items.find((item) => item.status === status);
    assert.ok(selected, `Missing status option: ${JSON.stringify(status)}`);
    return selected;
  });
  await run('sherpaIntents.filterStatus');
}
async function eventually(predicate, message) {
  const deadline = Date.now() + 4_000;
  do {
    const state = await snapshot();
    if (predicate(state)) return state;
    await new Promise((done) => setTimeout(done, 15));
  } while (Date.now() < deadline);
  assert.fail(message);
}
async function watched(kind, path, mutate, predicate) {
  const before = treeChanges;
  await mutate();
  emitWatch(kind, path);
  return eventually((state) => treeChanges > before && predicate(state), `No automatic ${kind} refresh for ${path}`);
}
function blockNextScan(base) {
  let started, release;
  const entered = new Promise((done) => { started = done; });
  const released = new Promise((done) => { release = done; });
  scanBarrier = { base, started, released };
  return { entered, release };
}
async function within(promise, message) {
  let timer;
  try {
    return await Promise.race([promise, new Promise((_, reject) => {
      timer = setTimeout(() => reject(new Error(message)), 4_000);
    })]);
  } finally { clearTimeout(timer); }
}
async function put(path, content) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, content);
}
function markdown({ id, title, status, priority } = {}) {
  const fields = { entry_type: 'intent', id, title, status, priority };
  return `---\n${Object.entries(fields).filter(([, value]) => value !== undefined)
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`).join('\n')}\n---\n\nIntent body.\n`;
}

const files = {
  alpha: join(projectA, '.vault', 'current', 'intent.md'),
  byId: join(projectA, 'specs', 'identifier.intent.md'),
  custom: join(projectA, 'specs', 'custom.intent.md'),
  inheritedStatus: join(projectA, 'specs', 'constructor.intent.md'),
  unset: join(projectA, 'specs', 'unset.intent.md'),
  blank: join(projectA, 'specs', 'blank.intent.md'),
  broken: join(projectA, 'broken', 'malformed.intent.md'),
  denied: join(projectA, 'broken', 'unreadable.intent.md'),
  nonIntent: join(projectA, 'broken', 'different-type.intent.md'),
  plain: join(projectA, 'broken', 'plain.intent.md'),
  nested: join(nestedProject, '.vault', 'deep.intent.md'),
  beta: join(projectB, 'intent.md'),
};
const initialPaths = Object.values(files).sort();
const fallbackPaths = [files.broken, files.denied, files.nonIntent, files.plain];
let treeSubscription;
let disposed = false;
function disposeExtension() {
  if (disposed) return;
  disposed = true;
  for (const subscription of [...subscriptions].reverse()) subscription.dispose();
}

try {
  await Promise.all([projectA, projectB, nestedProject, emptyProject, addedProject, externalProject]
    .map((path) => mkdir(path, { recursive: true })));
  await put(files.alpha, markdown({ id: 'SAME-ID', title: 'Alpha [API].*', status: 'In Progress', priority: 'high' }));
  await put(files.byId, markdown({ id: 'ID.Dot+[7]', title: 'Identifier lookup', status: 'Blocked' }));
  await put(files.custom, markdown({ id: 'custom', title: 'Custom workflow', status: 'Awaiting dragons' }));
  await put(files.inheritedStatus, markdown({ id: 'inherited-status', title: 'Custom object-key status', status: 'constructor' }));
  await put(files.unset, markdown({ id: 'unset', title: 'No workflow status' }));
  await put(files.blank, markdown({ id: 'blank', title: 'Blank workflow status', status: '' }));
  await put(files.broken, '---\nentry_type: intent\ntitle: [unterminated\n---\nBroken YAML.\n');
  await put(files.denied, markdown({ id: 'denied', title: 'Unreadable metadata', status: 'Hidden status' }));
  deniedReads.add(files.denied);
  await put(files.nonIntent, '---\nentry_type: task\ntitle: Not an intent\nstatus: Hidden status\n---\n');
  await put(files.plain, '# No metadata\n');
  await put(files.nested, markdown({ id: 'SAME-ID', title: 'Nested owned', status: 'Done' }));
  await put(files.beta, markdown({ id: 'SAME-ID', title: 'Beta project intent', status: 'done' }));
  await put(join(projectA, '.gitignore'), '.vault/\nnode_modules/\n');
  await put(join(projectA, 'README.md'), markdown({ id: 'not-a-candidate', title: 'Ordinary Markdown' }));
  for (const dir of ['.git', '.atomic', 'node_modules/dependency', 'deeper/.git', 'deeper/.atomic', 'deeper/node_modules/dependency']) {
    await put(join(projectA, dir, 'excluded.intent.md'), markdown({ id: dir, title: 'Excluded dependency or VCS entry' }));
  }
  const externalFile = join(externalProject, 'external.intent.md');
  await put(externalFile, markdown({ id: 'external', title: 'Outside workspace' }));
  await symlink(externalProject, join(projectA, 'external-link'), process.platform === 'win32' ? 'junction' : 'dir');
  // Windows junctions exercise the boundary without requiring file-symlink privileges.
  if (process.platform !== 'win32') await symlink(externalFile, join(projectA, 'external.intent.md'), 'file');

  const { registerIntentExplorer } = await import('../src/intents/explorer.ts');
  registerIntentExplorer({ subscriptions, extensionPath: root, extensionUri: Uri.file(root) });
  assert.ok(provider, 'Explorer must expose its provider through createTreeView');
  treeSubscription = provider.onDidChangeTreeData(() => { treeChanges++; });
  await refresh();
  let state = await snapshot();
  assert.deepEqual(paths(state), initialPaths, 'Discover all candidates, but no dependencies, VCS files, symlinks outside, or duplicates');
  assert.deepEqual(state.groups.map((group) => group.label).sort(), ['alpha', 'beta', 'empty', 'nested']);
  assert.equal(state.groups.find((group) => group.label === 'empty').rows.length, 0, 'Unfiltered empty projects remain visible');
  assert.equal(state.rows.find((row) => row.path === files.nested).group, 'nested', 'The deepest workspace folder owns overlapping files');
  assert.equal(state.rows.find((row) => row.path === files.alpha).label, 'Alpha [API].*');
  assert.ok(String(state.rows.find((row) => row.path === files.alpha).item.tooltip).includes('high'),
    'Valid declared priority is available in intent details');
  for (const path of fallbackPaths) {
    const row = state.rows.find((entry) => entry.path === path);
    assert.ok(row?.label?.includes(basename(path)), `Unreadable or unrecognized metadata needs a fallback path title: ${path}`);
    assert.equal(row.item.iconPath?.id, 'warning', 'Unrecognized or unreadable metadata must stay visibly marked');
  }
  assert.equal(metadataReads.some((path) => path === externalFile || path.includes(`${sep}external-link${sep}`)
    || path === join(projectA, 'external.intent.md')), false, 'Never read metadata through an external symlink');
  assert.equal(state.rows.filter((row) => [files.alpha, files.beta, files.nested].includes(row.path)).length, 3,
    'Identical IDs do not collapse distinct files or projects');

  const click = state.rows.find((row) => row.path === files.alpha).item.command;
  const host = await import('vscode');
  await host.commands.executeCommand(click.command, ...click.arguments);
  assert.deepEqual(opened.map((args) => args.map((uri) => uri.fsPath)), [[files.alpha]]);

  await search('[api].*');
  state = await snapshot();
  assert.deepEqual(paths(state), [files.alpha], 'Title search is case-insensitive and literal, not a regular expression');
  assert.equal(state.groups.length, 1, 'Filters hide projects without matches');
  await search(undefined);
  assert.deepEqual(paths(await snapshot()), [files.alpha], 'Cancelling search preserves the current query');
  await search('id.DOT+[7]');
  assert.deepEqual(paths(await snapshot()), [files.byId], 'ID search is also case-insensitive and literal');
  await search('same-id');
  assert.deepEqual(paths(await snapshot()), [files.alpha, files.beta, files.nested].sort());
  await search('Intent body.');
  state = await snapshot();
  assert.equal(state.groups.length, 0);
  assert.equal(state.rows.length, 0, 'Search does not match body content instead of title or ID');
  await search('');
  assert.deepEqual(paths(await snapshot()), initialPaths, 'An empty query clears search');

  await chooseStatus('Done');
  assert.deepEqual(paths(await snapshot()), [files.nested], 'Status matching is exact, including case');
  const statuses = statusMenus.at(-1).filter((item) => item.status !== undefined).map((item) => item.status);
  assert.deepEqual(statuses.sort(), ['', 'Awaiting dragons', 'Blocked', 'Done', 'In Progress', 'constructor', 'done'].sort(),
    'Offer actual declared statuses, including custom values and Unspecified, without inventing a workflow');
  statusAnswers.push(undefined);
  await run('sherpaIntents.filterStatus');
  assert.deepEqual(paths(await snapshot()), [files.nested], 'Cancelling status selection preserves the filter');
  await chooseStatus('Awaiting dragons');
  assert.deepEqual(paths(await snapshot()), [files.custom], 'Unknown workflow statuses remain selectable');
  await chooseStatus('constructor');
  assert.deepEqual(paths(await snapshot()), [files.inheritedStatus], 'Object-prototype names remain browseable, filterable declared statuses');
  await chooseStatus('');
  assert.deepEqual(paths(await snapshot()), [files.unset, files.blank, ...fallbackPaths].sort(),
    'Unspecified covers absent/empty status and candidates whose metadata cannot be recognized');
  await chooseStatus(undefined);
  assert.deepEqual(paths(await snapshot()), initialPaths, 'All statuses removes only the status filter');
  await chooseStatus('In Progress');
  await search('same-id');
  assert.deepEqual(paths(await snapshot()), [files.alpha], 'Search and status filters combine');
  await run('sherpaIntents.clearFilters');
  state = await snapshot();
  assert.deepEqual(paths(state), initialPaths, 'Clear Filters clears both filters');
  assert.equal(state.groups.length, 4);

  const created = join(projectB, '.vault', 'created.intent.md');
  await watched('create', created, () => put(created, markdown({ id: 'created', title: 'Created by filesystem event', status: 'New status' })),
    (current) => current.rows.some((row) => row.path === created && row.label === 'Created by filesystem event'));
  await watched('change', created, () => put(created, markdown({ id: 'changed-id', title: 'Changed by filesystem event', status: 'Updated status' })),
    (current) => current.rows.some((row) => row.path === created && row.label === 'Changed by filesystem event'));
  await search('CHANGED-ID');
  assert.deepEqual(paths(await snapshot()), [created], 'Automatic refresh updates searchable metadata, not just the displayed label');
  await search('');
  await chooseStatus('Updated status');
  assert.deepEqual(paths(await snapshot()), [created], 'Automatic refresh updates available status filters');
  await run('sherpaIntents.clearFilters');
  await watched('delete', created, () => rm(created), (current) => !current.rows.some((row) => row.path === created));
  await watched('change', files.denied, async () => {
    deniedReads.delete(files.denied);
    await put(files.denied, markdown({ id: 'recovered', title: 'Recovered metadata', status: 'Recovered' }));
  }, (current) => current.rows.some((row) => row.path === files.denied && row.label === 'Recovered metadata'));

  const addedFile = join(addedProject, 'intent.md');
  await put(addedFile, markdown({ id: 'added', title: 'New workspace folder' }));
  let before = treeChanges;
  const addedFolder = folder(addedProject, workspace.workspaceFolders.length);
  workspace.workspaceFolders = [...workspace.workspaceFolders, addedFolder];
  folderChanges.fire({ added: [addedFolder], removed: [] });
  await eventually((current) => treeChanges > before && current.rows.some((row) => row.path === addedFile),
    'Adding a workspace folder must automatically discover its intents');
  const removedFolder = workspace.workspaceFolders.find((item) => item.uri.fsPath === projectB);
  before = treeChanges;
  workspace.workspaceFolders = workspace.workspaceFolders.filter((item) => item !== removedFolder);
  folderChanges.fire({ added: [], removed: [removedFolder] });
  await eventually((current) => treeChanges > before && !current.groups.some((group) => group.label === 'beta')
    && !current.rows.some((row) => row.path === files.beta), 'Removing a workspace folder must remove its group and rows');

  const barrier = blockNextScan(projectA);
  const outdated = refresh();
  try {
    await within(barrier.entered, 'Refresh never reached the real filesystem scanner');
    const fresh = join(projectA, 'fresh.intent.md');
    await put(fresh, markdown({ id: 'fresh', title: 'Latest scan wins' }));
    await within(refresh(), 'A newer refresh must not wait indefinitely for an obsolete scan');
    assert.ok(paths(await snapshot()).includes(fresh));
    barrier.release();
    await within(outdated, 'Obsolete refresh did not settle');
    assert.ok(paths(await snapshot()).includes(fresh), 'A late obsolete scan must not replace newer results');
  } finally { barrier.release(); }

  const oldFolders = workspace.workspaceFolders;
  before = treeChanges;
  workspace.workspaceFolders = [];
  folderChanges.fire({ added: [], removed: oldFolders });
  state = await eventually((current) => treeChanges > before && current.groups.length === 0 && current.rows.length === 0,
    'An empty window must not retain stale projects');
  await refresh();
  assert.equal((await snapshot()).rows.length, 0);

  workspace.workspaceFolders = [folder(projectA, 0)];
  folderChanges.fire({ added: workspace.workspaceFolders, removed: [] });
  await refresh();
  const beforeDisposal = paths(await snapshot());
  await put(join(projectA, 'disposed.intent.md'), markdown({ id: 'disposed', title: 'Never publish this scan' }));
  const disposalBarrier = blockNextScan(projectA);
  const pending = refresh();
  try {
    await within(disposalBarrier.entered, 'Disposal fixture never reached discovery');
    disposeExtension();
    const changesAtDispose = treeChanges;
    disposalBarrier.release();
    await within(pending, 'Disposed refresh did not settle');
    assert.equal(treeChanges, changesAtDispose, 'An in-flight refresh cannot publish after disposal');
    assert.deepEqual(paths(await snapshot()), beforeDisposal, 'An in-flight refresh cannot replace results after disposal');
    assert.equal(treeView.disposed, true);
    assert.ok(watchers.every((watcher) => watcher.disposed), 'Dispose every filesystem watcher, including replaced ones');
    const callsAtDispose = findFilesCalls;
    emitWatch('change', files.alpha);
    folderChanges.fire({ added: [], removed: [] });
    await new Promise((done) => setTimeout(done, 300));
    assert.equal(findFilesCalls, callsAtDispose, 'Disposed listeners must not schedule more scans');
    assert.equal(treeChanges, changesAtDispose);
  } finally { disposalBarrier.release(); }

  console.log('Workspace Intents passed: filesystem ownership, malformed metadata, literal filters, live refresh, editor command, empty workspaces, stale scans and disposal.');
} finally {
  treeSubscription?.dispose();
  disposeExtension();
  await rm(root, { recursive: true, force: true });
}
