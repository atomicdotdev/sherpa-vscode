import { expect, test } from 'bun:test';
import { GitCliFailure } from '../src/git/types.ts';
import { runGit } from '../src/git/cli.ts';

const earlyExitInput = 'x'.repeat(8 * 1024 * 1024);

test('runGit survives a child that exits before consuming stdin', async () => {
  const uncaught = [];
  const onUncaught = (error) => uncaught.push(error);
  process.on('uncaughtException', onUncaught);
  try {
    const result = await runGit(['--version'], { cwd: process.cwd(), stdin: earlyExitInput });
    await new Promise((resolve) => setTimeout(resolve, 150));
    expect(result.stdout.toString('utf8')).toContain('git version');
    expect(uncaught).toEqual([]);
  } finally {
    process.off('uncaughtException', onUncaught);
  }
});

test('runGit reports a Git failure with a large stdin payload', async () => {
  let failure;
  try {
    await runGit(['--definitely-not-a-git-option'], { cwd: process.cwd(), stdin: earlyExitInput });
  } catch (error) {
    failure = error;
  }
  expect(failure).toBeInstanceOf(GitCliFailure);
  expect(failure.code).not.toBe(0);
});
