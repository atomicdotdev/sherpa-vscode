// Real installation discovery and filesystem fixtures; only the VS Code host API is doubled.
// Run separately so its vscode module double cannot affect other suites.
import assert from 'node:assert/strict';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mock } from 'bun:test';

const root = await mkdtemp(join(tmpdir(), 'sherpa-discovery-'));
const workspacePath = join(root, 'workspace');
const extensionPath = join(root, 'extension');
const commands = new Map();
const disposable = () => ({ dispose() {} });
const workspace = { isTrusted: false, workspaceFolders: [{ uri: { scheme: 'file', fsPath: workspacePath } }],
  onDidChangeWorkspaceFolders: disposable, onDidGrantWorkspaceTrust: disposable };
let provider;
mock.module('vscode', () => ({
  EventEmitter: class { event = () => disposable(); fire() {} dispose() {} },
  ThemeIcon: class { constructor(id) { this.id = id; } },
  workspace,
  commands: { registerCommand: (id, handler) => { commands.set(id, handler); return disposable(); } },
  window: { registerTreeDataProvider: (_id, value) => { provider = value; return disposable(); },
    createOutputChannel: () => ({ appendLine() {}, show() {}, dispose() {} }),
    showErrorMessage: (message) => { throw new Error(message); } },
}));
const keys = ['PATH', 'Path', 'HOME', 'USERPROFILE', 'APPDATA', 'LOCALAPPDATA', 'XDG_STATE_HOME',
  'ATOMIC_RUNTIME_DIR', 'LIBATOMIC_ADDON', 'ATOMIC_BIN'];
const previousEnv = Object.fromEntries(keys.map((key) => [key, process.env[key]]));
const refresh = () => commands.get('sherpaAtomic.refresh')();
const action = () => provider.getChildren()[0].command?.command;
try {
  for (const key of keys) delete process.env[key];
  Object.assign(process.env, { PATH: '', HOME: root, USERPROFILE: root, APPDATA: root,
    LOCALAPPDATA: root, XDG_STATE_HOME: root });
  await mkdir(join(workspacePath, '.git'), { recursive: true });
  await mkdir(join(extensionPath, 'dist', 'nodeatomic'), { recursive: true });
  const consumer = new URL('../vendor/nodeatomic/dist/index.js', import.meta.url).href;
  await writeFile(join(extensionPath, 'dist', 'nodeatomic', 'index.mjs'), `export * from ${JSON.stringify(consumer)};\n`);
  const { registerAtomicSourceControl } = await import('../src/atomic/sourceControl.ts');
  registerAtomicSourceControl({ subscriptions: [], extensionPath });
  assert.equal(action(), undefined, 'Untrusted workspaces must not probe the runtime');

  workspace.isTrusted = true;
  await refresh();
  assert.equal(action(), 'sherpaAtomic.installGuide', 'A Git-only workspace without Atomic must offer installation help');

  const installation = join(root, 'installation');
  const [library, target] = { darwin: ['libatomic.dylib', 'aarch64-apple-darwin'],
    linux: ['libatomic.so', 'x86_64-unknown-linux-gnu'], win32: ['libatomic.dll', 'x86_64-pc-windows-msvc'] }[process.platform];
  await mkdir(installation);
  await writeFile(join(installation, library), 'Not a native library: discovery must not load this');
  await writeFile(join(installation, 'libatomic-runtime.json'), JSON.stringify({ schemaVersion: 1,
    version: '0.22.0', revision: 'a'.repeat(40), platform: process.platform, arch: process.arch,
    target, nodeApiVersion: 8, library, librarySha256: '0'.repeat(64), descriptorSha256: '0'.repeat(64) }));
  process.env.ATOMIC_RUNTIME_DIR = installation;
  await refresh();
  assert.equal(action(), undefined, 'A discovered installation needs no native loading in a Git-only workspace');

  await mkdir(join(workspacePath, '.atomic'));
  await refresh();
  assert.equal(action(), 'sherpaAtomic.installGuide', 'Existing Atomic repositories must still fully validate the native runtime');
  await rm(join(workspacePath, '.atomic'), { recursive: true });
  await refresh();
  assert.equal(action(), undefined, 'Removing the Atomic repository must restore metadata-only discovery');

  delete process.env.ATOMIC_RUNTIME_DIR;
  await refresh();
  assert.equal(action(), 'sherpaAtomic.installGuide', 'Refresh must retry discovery rather than cache successful availability');

  workspace.isTrusted = false;
  await refresh();
  assert.equal(action(), undefined, 'A previous installation warning must not survive an untrusted workspace');
  workspace.isTrusted = true;
  workspace.workspaceFolders = [{ uri: { scheme: 'vscode-vfs', fsPath: workspacePath } }];
  await refresh();
  assert.equal(action(), undefined, 'Virtual-only workspaces must not probe the local runtime');
  workspace.workspaceFolders = [];
  await refresh();
  assert.equal(action(), undefined, 'Empty windows must retain the open-workspace guidance');
  console.log('Discovery passed: Git-only missing/install/retry, native validation for Atomic repositories, trust, virtual and empty workspaces.');
} finally {
  provider?.dispose();
  for (const [key, value] of Object.entries(previousEnv)) {
    if (value === undefined) delete process.env[key]; else process.env[key] = value;
  }
  await rm(root, { recursive: true, force: true });
}
