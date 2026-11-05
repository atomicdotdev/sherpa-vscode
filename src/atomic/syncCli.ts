import { spawn } from 'node:child_process';

const MAX_OUTPUT_BYTES = 2 * 1024 * 1024;
const DEFAULT_TIMEOUT_MS = 300_000;

export class AtomicCliError extends Error {
  constructor(message: string, readonly code: number | null, readonly stdout: string, readonly stderr: string) {
    super(message);
    this.name = 'AtomicCliError';
  }
}

export type AtomicCliOptions = { cwd: string; timeoutMs?: number; executable?: string; argsPrefix?: string[] };

/** Run the installed Atomic CLI for sync/remote workflows that need its identity and transport handling. */
export function runAtomicCli(args: string[], options: AtomicCliOptions): Promise<{ stdout: string; stderr: string }> {
  return new Promise((resolve, reject) => {
    const child = spawn(options.executable ?? 'atomic', [...(options.argsPrefix ?? []), ...args], {
      cwd: options.cwd,
      stdio: ['ignore', 'pipe', 'pipe']
    });
    const stdout: Buffer[] = [];
    const stderr: Buffer[] = [];
    let outputBytes = 0;
    let settled = false;
    let timedOut = false;

    const finish = (error?: AtomicCliError) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      if (error) reject(error);
      else resolve({ stdout: Buffer.concat(stdout).toString('utf8'), stderr: Buffer.concat(stderr).toString('utf8') });
    };

    const append = (target: Buffer[], chunk: Buffer | string) => {
      const buffer = typeof chunk === 'string' ? Buffer.from(chunk) : chunk;
      outputBytes += buffer.length;
      if (outputBytes <= MAX_OUTPUT_BYTES) target.push(buffer);
    };

    const timer = setTimeout(() => {
      timedOut = true;
      child.kill();
    }, options.timeoutMs ?? DEFAULT_TIMEOUT_MS);

    child.on('error', (error) => {
      const missing = (error as NodeJS.ErrnoException).code === 'ENOENT';
      finish(new AtomicCliError(
        missing
          ? 'The Atomic CLI was not found on PATH. Install the complete Atomic release on the extension host.'
          : `Failed to start the Atomic CLI: ${error.message}`,
        null,
        Buffer.concat(stdout).toString('utf8'),
        Buffer.concat(stderr).toString('utf8')
      ));
    });
    child.on('close', (code) => {
      const out = Buffer.concat(stdout).toString('utf8');
      const err = Buffer.concat(stderr).toString('utf8');
      if (timedOut) {
        finish(new AtomicCliError('The Atomic CLI request timed out.', code, out, err));
        return;
      }
      if (code !== 0) {
        finish(new AtomicCliError(err.trim() || `atomic ${args.join(' ')} failed`, code, out, err));
        return;
      }
      finish();
    });
    child.stdout.on('data', (chunk) => append(stdout, chunk));
    child.stderr.on('data', (chunk) => append(stderr, chunk));
  });
}
