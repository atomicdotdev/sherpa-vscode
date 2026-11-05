import { expect, test } from 'bun:test';
import path from 'node:path';
import { partitionRepositoryFiles } from '../src/atomic/model.ts';

test('one malformed backend path does not discard valid SCM files', () => {
  const files = [
    { path: 'src/a.ts', status: 1 },
    { path: '', status: 1 },
    { path: '/etc/passwd', status: 1 },
    { path: '../escape.ts', status: 1 },
    { path: 'src/../ok.ts', status: 1 }
  ];
  const repo = path.resolve('/repo');
  const { valid, invalid } = partitionRepositoryFiles(repo, files);
  expect(valid.map(({ file, absolutePath }) => [file.path, absolutePath])).toEqual([
    ['src/a.ts', path.join(repo, 'src/a.ts')],
    ['src/../ok.ts', path.join(repo, 'ok.ts')]
  ]);
  expect(invalid).toHaveLength(3);
  expect(invalid.map(({ path }) => path)).toEqual(['', '/etc/passwd', '../escape.ts']);
});
