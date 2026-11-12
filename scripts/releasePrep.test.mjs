import { expect, test } from 'bun:test';
import { execFileSync, spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { devNull, tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const helper = fileURLToPath(new URL('./release-prep.mjs', import.meta.url));
const releaseFiles = ['package.json', 'package-lock.json', 'CHANGELOG.md'];

function withRepository(run, branch = 'release') {
  const root = mkdtempSync(join(tmpdir(), 'sherpa-release-prep-'));
  const env = Object.fromEntries(Object.entries(process.env).filter(([key]) => !key.startsWith('GIT_')));
  Object.assign(env, {
    GIT_CONFIG_GLOBAL: devNull,
    GIT_CONFIG_NOSYSTEM: '1',
    GIT_AUTHOR_NAME: 'Release test',
    GIT_AUTHOR_EMAIL: 'release-test@example.invalid',
    GIT_COMMITTER_NAME: 'Release test',
    GIT_COMMITTER_EMAIL: 'release-test@example.invalid',
  });
  const git = (...args) => execFileSync('git', args, { cwd: root, env, encoding: 'utf8', stdio: 'pipe' }).trim();
  const read = (file) => readFileSync(join(root, file), 'utf8');
  const write = (file, text) => writeFileSync(join(root, file), text);
  const json = (file) => JSON.parse(read(file));
  const writeJson = (file, value) => write(file, `${JSON.stringify(value, null, 2)}\n`);
  const invoke = (...args) => spawnSync(process.execPath, [helper, ...args], {
    cwd: root, env, encoding: 'utf8', timeout: 15_000,
  });
  try {
    git('init', '-b', branch);
    git('config', 'core.autocrlf', 'false');
    writeJson('package.json', { name: 'release-fixture', version: '1.0.0' });
    writeJson('package-lock.json', {
      name: 'release-fixture', version: '1.0.0', lockfileVersion: 3,
      packages: {
        '': { name: 'release-fixture', version: '1.0.0' },
        'node_modules/example': { version: '2.3.4', optional: true },
      },
    });
    write('CHANGELOG.md', '# Release fixture\n\n## 1.0.0 - 2026-11-05\n- Existing release\n');
    git('add', ...releaseFiles);
    git('commit', '-m', 'fix: preserve release metadata');
    return run({ git, read, write, json, writeJson, invoke });
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}

for (const dated of [false, true]) {
  test(`prepare and finalize preserve synchronized committed metadata with ${dated ? 'dated' : 'undated'} headings`, () => {
    withRepository((repo) => {
      const before = releaseFiles.map(repo.read);
      const dependencies = repo.json('package-lock.json').packages['node_modules/example'];
      expect(repo.invoke('patch', '--dry-run').status).toBe(0);
      expect(releaseFiles.map(repo.read)).toEqual(before);
      expect(repo.git('tag', '--list')).toBe('');

      expect(repo.invoke('patch').status).toBe(0);
      expect(repo.json('package.json').version).toBe('1.0.1');
      const lock = repo.json('package-lock.json');
      expect(lock.version).toBe('1.0.1');
      expect(lock.packages[''].version).toBe('1.0.1');
      expect(lock.packages['node_modules/example']).toEqual(dependencies);
      const changelog = repo.read('CHANGELOG.md');
      expect(changelog.indexOf('## 1.0.1\n')).toBeLessThan(changelog.indexOf('## 1.0.0 - 2026-11-05'));
      if (dated) repo.write('CHANGELOG.md', changelog.replace('## 1.0.1\n', '## 1.0.1 - 2026-11-12\n'));
      const reviewedChangelog = repo.read('CHANGELOG.md');

      expect(repo.invoke('finalize').status).toBe(0);
      expect(repo.git('rev-parse', '1.0.1^{commit}')).toBe(repo.git('rev-parse', 'HEAD'));
      expect(JSON.parse(repo.git('show', '1.0.1:package.json')).version).toBe('1.0.1');
      const committedLock = JSON.parse(repo.git('show', '1.0.1:package-lock.json'));
      expect(committedLock.version).toBe('1.0.1');
      expect(committedLock.packages[''].version).toBe('1.0.1');
      expect(repo.git('show', '1.0.1:CHANGELOG.md')).toBe(reviewedChangelog.trim());
      expect(repo.git('status', '--porcelain')).toBe('');
    });
  });
}

for (const mode of ['main', 'detached']) {
  test(`release preparation rejects ${mode} without modifying release files`, () => {
    withRepository((repo) => {
      if (mode === 'detached') repo.git('checkout', '--detach');
      const before = releaseFiles.map(repo.read);
      const head = repo.git('rev-parse', 'HEAD');
      expect(repo.invoke('patch').status).not.toBe(0);
      expect(releaseFiles.map(repo.read)).toEqual(before);
      expect(repo.git('rev-parse', 'HEAD')).toBe(head);
      expect(repo.git('tag', '--list')).toBe('');
    }, mode === 'main' ? 'main' : 'release');
  });
}

for (const field of ['top-level', 'root-package']) {
  test(`finalization rejects a mismatched ${field} lockfile version before committing or tagging`, () => {
    withRepository((repo) => {
      expect(repo.invoke('patch').status).toBe(0);
      const lock = repo.json('package-lock.json');
      if (field === 'top-level') lock.version = '1.0.0';
      else lock.packages[''].version = '1.0.0';
      repo.writeJson('package-lock.json', lock);
      const head = repo.git('rev-parse', 'HEAD');
      expect(repo.invoke('finalize').status).not.toBe(0);
      expect(repo.git('rev-parse', 'HEAD')).toBe(head);
      expect(repo.git('tag', '--list')).toBe('');
    });
  });
}

test('finalization rejects a different changelog version and unrelated work without creating a release', () => {
  withRepository((repo) => {
    expect(repo.invoke('patch').status).toBe(0);
    const head = repo.git('rev-parse', 'HEAD');
    const changelog = repo.read('CHANGELOG.md');
    repo.write('CHANGELOG.md', changelog.replace('## 1.0.1\n', '## 1.0.10\n'));
    expect(repo.invoke('finalize').status).not.toBe(0);
    expect(repo.git('rev-parse', 'HEAD')).toBe(head);
    expect(repo.git('tag', '--list')).toBe('');

    repo.write('CHANGELOG.md', changelog);
    repo.write('unrelated.txt', 'Do not include in the release commit.\n');
    expect(repo.invoke('finalize').status).not.toBe(0);
    expect(repo.git('rev-parse', 'HEAD')).toBe(head);
    expect(repo.git('tag', '--list')).toBe('');
    expect(repo.read('unrelated.txt')).toBe('Do not include in the release commit.\n');
  });
});
