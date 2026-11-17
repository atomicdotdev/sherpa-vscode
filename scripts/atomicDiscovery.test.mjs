import { expect, test } from 'bun:test';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

test('fresh-workspace installation guidance respects trust, native laziness, and refresh', () => {
  const result = spawnSync(process.execPath, [fileURLToPath(new URL('./atomicDiscoverySmoke.mjs', import.meta.url))], {
    encoding: 'utf8', timeout: 15_000,
  });
  expect(result.error).toBeUndefined();
  expect(result.status, result.stderr || result.stdout).toBe(0);
}, 20_000);
