import { expect, test } from 'bun:test';
import { createApplyWatchdog } from '../webview/src/helpers/applyWatchdog.ts';

function manualTimers() {
  const callbacks = new Map();
  let nextHandle = 1;
  return {
    timers: {
      setTimeout: (callback) => {
        const handle = nextHandle++;
        callbacks.set(handle, callback);
        return handle;
      },
      clearTimeout: (handle) => callbacks.delete(handle)
    },
    fireAll() {
      const pending = [...callbacks.values()];
      callbacks.clear();
      for (const callback of pending) callback();
    },
    pending() {
      return callbacks.size;
    }
  };
}

test('retries once, then asks to reload', () => {
  const clock = manualTimers();
  let retries = 0;
  let reloads = 0;
  const watchdog = createApplyWatchdog({
    timeoutMs: 10,
    maxRetries: 1,
    timers: clock.timers,
    onRetry: () => retries += 1,
    onReload: () => reloads += 1
  });

  watchdog.start();
  clock.fireAll();
  expect(retries).toBe(1);
  expect(reloads).toBe(0);

  watchdog.start();
  clock.fireAll();
  expect(retries).toBe(1);
  expect(reloads).toBe(1);
});

test('settling cancels a pending timeout and resets retries', () => {
  const clock = manualTimers();
  let retries = 0;
  const watchdog = createApplyWatchdog({
    timeoutMs: 10,
    maxRetries: 1,
    timers: clock.timers,
    onRetry: () => retries += 1,
    onReload: () => undefined
  });

  watchdog.start();
  expect(clock.pending()).toBe(1);
  watchdog.settle();
  expect(clock.pending()).toBe(0);
  clock.fireAll();
  expect(retries).toBe(0);

  watchdog.start();
  clock.fireAll();
  expect(retries).toBe(1);
});
