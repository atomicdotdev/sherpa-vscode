import { expect, test } from 'bun:test';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { smokeRuntime } from './atomicRuntimeSmoke.mjs';

test('missing-runtime smoke ignores the installed Atomic registration record', async () => {
  const state = mkdtempSync(join(tmpdir(), 'atomic-registration-'));
  mkdirSync(join(state, 'atomic'), { recursive: true });
  writeFileSync(join(state, 'atomic', 'install.json'), JSON.stringify({
    schema_version: 1,
    runtime_dir: '/definitely/missing/atomic-runtime',
    runtime_target: 'test-target',
    version: '0.0.0'
  }));

  try {
    await smokeRuntime(pathToFileURL(fileURLToPath(import.meta.resolve('nodeatomic'))), {
      native: false,
      env: { ...process.env, HOME: state, XDG_STATE_HOME: state }
    });
  } finally {
    rmSync(state, { recursive: true, force: true });
  }
}, 30_000);
