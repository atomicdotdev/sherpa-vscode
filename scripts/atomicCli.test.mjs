import { expect, test } from 'bun:test';
import { fileURLToPath } from 'node:url';
import { AtomicCliError, runAtomicCli } from '../src/atomic/syncCli.ts';

const fixture = fileURLToPath(new URL('./fixtures/fakeAtomic.mjs', import.meta.url));
const options = {
  cwd: process.cwd(),
  timeoutMs: 10_000,
  executable: process.execPath,
  argsPrefix: [fixture]
};


test('runs the configured Atomic CLI without a shell', async () => {
  const result = await runAtomicCli(['--version'], options);
  expect(result.stdout).toContain('atomic');
});

test('surfaces CLI failures with captured output', async () => {
  let failure;
  try {
    await runAtomicCli(['definitely-not-a-command'], options);
  } catch (error) {
    failure = error;
  }
  expect(failure).toBeInstanceOf(AtomicCliError);
  expect(failure.code).not.toBe(0);
  expect(`${failure.stderr}${failure.message}`).toContain('unknown-subcommand');
});
