import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { createWriteStream } from 'node:fs';
import { mkdir, mkdtemp, readFile, realpath, rm, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';

const tooling = createRequire(import.meta.resolve('@vscode/vsce'));
const { open } = tooling('yauzl');

async function extractSpellRuntime(archive, directory) {
  await new Promise((resolveArchive, reject) => {
    open(archive, { lazyEntries: true, strictFileNames: true }, (error, zip) => {
      if (error) return reject(error);
      const fail = (error) => { zip.close(); reject(error); };
      zip.on('error', fail);
      zip.on('end', resolveArchive);
      zip.on('entry', (entry) => {
        const prefix = 'extension/dist/spell/';
        if (!entry.fileName.startsWith(prefix) || entry.fileName.endsWith('/')) return zip.readEntry();
        const destination = join(directory, entry.fileName.slice(prefix.length));
        zip.openReadStream(entry, async (error, stream) => {
          if (error) return fail(error);
          try {
            await mkdir(dirname(destination), { recursive: true });
            await pipeline(stream, createWriteStream(destination));
            zip.readEntry();
          } catch (error) { fail(error); }
        });
      });
      zip.readEntry();
    });
  });
}

// Run the real archived engine in a separate Node process. Filesystem permissions
// make the checkout unreadable even when it still exists on the build machine.
const worker = `
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
const [directory, sourceManifest] = process.argv.slice(2);
await assert.rejects(readFile(sourceManifest), { code: 'ERR_ACCESS_DENIED' });
const { checkDocument } = await import(pathToFileURL(join(directory, 'spell/runtime.mjs')).href);
const document = (project, text) => ({ uri: pathToFileURL(join(directory, project, 'source.md')).href, text, languageId: 'markdown' });
const plain = await checkDocument(document('plain', 'This is a misspelled wrod.'), true);
assert.equal(plain.checked, true);
assert.equal(plain.errors?.length ?? 0, 0);
assert.deepEqual(plain.issues.map(({ text, offset, length, suggestions }) => ({ text, offset, length, suggestion: suggestions?.[0] })),
  [{ text: 'wrod', offset: 21, length: 4, suggestion: 'word' }]);
const correct = await checkDocument(document('plain', 'This is a correctly spelled word.'), false);
assert.equal(correct.checked, true);
assert.deepEqual(correct.issues, []);
const unconfigured = await checkDocument(document('plain', 'The quzzlekorp wrod.'), false);
assert.deepEqual(unconfigured.issues.map(issue => issue.text), ['quzzlekorp', 'wrod']);
const configured = await checkDocument(document('project', 'The quzzlekorp wrod.'), true);
assert.equal(configured.checked, true);
assert.equal(configured.errors?.length ?? 0, 0);
assert.deepEqual(configured.issues.map(issue => ({ text: issue.text, suggestion: issue.suggestions?.[0] })), [{ text: 'wrod', suggestion: 'word' }]);
console.log('Packaged spelling passed: diagnostics, corrections, imported project dictionary; checkout reads denied.');
`;

export async function smokePackagedSpelling(archive) {
  const directory = await realpath(await mkdtemp(join(tmpdir(), 'sherpa-packaged-spell-')));
  try {
    await writeFile(join(directory, 'package.json'), JSON.stringify({ private: true, type: 'module' }));
    // Stop configuration discovery at the fixture, not at unrelated parent directories.
    await writeFile(join(directory, 'cspell.json'), JSON.stringify({ version: '0.2' }));
    await extractSpellRuntime(archive, join(directory, 'spell'));
    await mkdir(join(directory, 'plain'), { recursive: true });
    await mkdir(join(directory, 'project/config'), { recursive: true });
    await writeFile(join(directory, 'project/cspell.json'), JSON.stringify({ version: '0.2', import: ['./config/spelling.json'] }));
    await writeFile(join(directory, 'project/config/spelling.json'), JSON.stringify({
      version: '0.2', dictionaryDefinitions: [{ name: 'project-words', path: './words.txt' }], dictionaries: ['project-words']
    }));
    await writeFile(join(directory, 'project/config/words.txt'), 'quzzlekorp\n');
    const entry = join(directory, 'smoke.mjs');
    await writeFile(entry, worker);
    const env = { ...process.env, HOME: directory, USERPROFILE: directory, APPDATA: directory, LOCALAPPDATA: directory,
      XDG_CONFIG_HOME: directory, XDG_DATA_HOME: directory, NODE_OPTIONS: '', NODE_PATH: '' };
    const permissionFlag = process.allowedNodeEnvironmentFlags.has('--permission') ? '--permission' : '--experimental-permission';
    const result = spawnSync(process.execPath, [
      permissionFlag, `--allow-fs-read=${directory}`, entry, directory,
      fileURLToPath(new URL('../package.json', import.meta.url))
    ], { cwd: directory, env, encoding: 'utf8', timeout: 60_000 });
    assert.equal(result.status, 0, `Packaged spelling failed: ${result.error?.message ?? result.signal ?? ''}\n${result.stdout}\n${result.stderr}`);
    console.log(result.stdout.trim());
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const pkg = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));
  await smokePackagedSpelling(process.argv[2] ?? `releases/${pkg.name}-${pkg.version}.vsix`);
}
