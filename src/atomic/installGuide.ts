import { randomBytes } from 'node:crypto';
import * as vscode from 'vscode';
import { escapeEvidenceHtml } from './evidenceHtml';

/** Guidance only: never downloads or runs an installer. */
export class AtomicInstallGuide implements vscode.Disposable {
  private panel?: vscode.WebviewPanel;

  show(): void {
    if (this.panel) {
      this.panel.reveal();
      return;
    }
    const panel = vscode.window.createWebviewPanel('sherpaAtomic.installGuide', 'Install Atomic',
      vscode.ViewColumn.Active, {
        enableScripts: false,
        enableCommandUris: ['sherpaAtomic.refresh', 'sherpaAtomic.showOutput'],
        localResourceRoots: []
      });
    this.panel = panel;
    panel.onDidDispose(() => { if (this.panel === panel) this.panel = undefined; });
    const nonce = randomBytes(24).toString('hex');
    const platform = process.platform === 'darwin' ? 'macOS' : process.platform === 'win32' ? 'Windows' : process.platform;
    const host = `${platform} ${process.arch}${vscode.env.remoteName ? ` · remote: ${vscode.env.remoteName}` : ' · local extension host'}`;
    panel.webview.html = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'nonce-${nonce}'; base-uri 'none'; form-action 'none'">
<title>Install Atomic</title>
<style nonce="${nonce}">
  body { margin: 0; padding: 28px; color: var(--vscode-foreground); font-family: var(--vscode-font-family); font-size: var(--vscode-font-size); line-height: 1.6; }
  main { max-width: 760px; margin: 0 auto; }
  h1 { font-size: 28px; line-height: 1.2; }
  h2 { font-size: 18px; margin-bottom: 8px; }
  a { color: var(--vscode-textLink-foreground); }
  a:focus-visible { outline: 2px solid var(--vscode-focusBorder); outline-offset: 3px; }
  code { font-family: var(--vscode-editor-font-family); }
  .host { border-left: 3px solid var(--vscode-focusBorder); padding: 10px 16px; background: var(--vscode-textBlockQuote-background); }
  .actions { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; margin: 16px 0; }
  .button { display: inline-block; padding: 7px 14px; border-radius: 3px; text-decoration: none; background: var(--vscode-button-background); color: var(--vscode-button-foreground); }
  .button:hover { background: var(--vscode-button-hoverBackground); }
  .secondary { background: var(--vscode-button-secondaryBackground); color: var(--vscode-button-secondaryForeground); }
  .secondary:hover { background: var(--vscode-button-secondaryHoverBackground); }
  .note { color: var(--vscode-descriptionForeground); }
</style>
</head>
<body><main>
<h1>Install Atomic for Sherpa</h1>
<p>Atomic is a separate product that you install and manage yourself. Sherpa uses Atomic for version control; it does not download, install, update, or repair Atomic.</p>
<p class="host"><strong>Install on this extension host:</strong><br>${escapeEvidenceHtml(host)}</p>
<section aria-labelledby="official-instructions">
<h2 id="official-instructions">1. Follow Atomic’s official installation instructions</h2>
<p>Use the instructions for your platform. Installation happens outside Sherpa, under your control.</p>
<p class="actions"><a class="button" href="https://docs.atomic.dev/getting-started/installation">Open official installation guide</a></p>
<p class="note">Opens docs.atomic.dev in your browser.</p>
<p>This Sherpa build targets the complete <a href="https://github.com/atomicdotdev/atomic/releases/tag/v0.22.0">Atomic v0.22.0 release</a>. Keep its CLI, platform library, and <code>libatomic-runtime.json</code> together. A CLI-only installation or a different native contract is not compatible.</p>
</section>
<section aria-labelledby="extension-host">
<h2 id="extension-host">2. Install where this extension runs</h2>
<p>For a local workspace, install Atomic on this computer. For Remote SSH, WSL, or a Dev Container, install Atomic inside that remote environment—not just on your desktop.</p>
<p>The official installer registers the complete installation for discovery. If you use a release archive instead, follow Atomic’s instructions and configure an absolute <code>ATOMIC_RUNTIME_DIR</code> before launching the editor.</p>
</section>
<section aria-labelledby="restart-refresh">
<h2 id="restart-refresh">3. Restart the editor, then refresh</h2>
<p>Fully quit and reopen the editor after installing Atomic or updating a loaded installation. Open your Atomic repository folder, then refresh version control. Refresh only retries discovery; it never installs Atomic.</p>
<p class="actions"><a class="button" href="command:sherpaAtomic.refresh">Refresh Atomic</a><a class="button secondary" href="command:sherpaAtomic.showOutput">View diagnostics</a></p>
<p class="note">Markdown editing and saving remain available without Atomic. Diagnostics retain the exact missing-installation, checksum, compatibility, or platform error.</p>
</section>
</main></body>
</html>`;
  }

  dispose(): void { this.panel?.dispose(); }
}
