import { expect, test } from 'bun:test';
import { AtomicCliError, runAtomicCli } from '../src/atomic/syncCli.ts';

test('runs the installed Atomic CLI without a shell', async () => {
  const result = await runAtomicCli(['--version'], { cwd: process.cwd(), timeoutMs: 10_000 });
  expect(result.stdout).toContain('atomic');
});

test('surfaces CLI failures with captured output', async () => {
  let failure;
  try {
    await runAtomicCli(['definitely-not-a-command'], { cwd: process.cwd(), timeoutMs: 10_000 });
  } catch (error) {
    failure = error;
  }
  expect(failure).toBeInstanceOf(AtomicCliError);
  expect(failure.code).not.toBe(0);
  expect(`${failure.stderr}${failure.message}`).toContain('unknown-subcommand');
});
