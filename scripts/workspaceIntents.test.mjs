import { expect, test } from 'bun:test';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

test('workspace Intents browse real files, filter, refresh, and respect workspace boundaries', () => {
  const result = spawnSync(process.execPath, [fileURLToPath(new URL('./workspaceIntentsSmoke.mjs', import.meta.url))], {
    encoding: 'utf8', timeout: 25_000,
  });
  expect(result.error).toBeUndefined();
  expect(result.status, result.stderr || result.stdout).toBe(0);
}, 30_000);
