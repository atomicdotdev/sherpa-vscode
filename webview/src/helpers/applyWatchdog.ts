export type ApplyWatchdogTimers = {
  setTimeout: (callback: () => void, timeoutMs: number) => unknown;
  clearTimeout: (handle: unknown) => void;
};

export function createApplyWatchdog(options: {
  timeoutMs: number;
  maxRetries: number;
  onRetry: () => void;
  onReload: () => void;
  timers: ApplyWatchdogTimers;
}) {
  let handle: unknown = null;
  let retries = 0;

  const cancel = () => {
    if (handle !== null) {
      options.timers.clearTimeout(handle);
      handle = null;
    }
  };

  const start = () => {
    cancel();
    handle = options.timers.setTimeout(() => {
      handle = null;
      if (retries < options.maxRetries) {
        retries += 1;
        options.onRetry();
        return;
      }
      options.onReload();
    }, options.timeoutMs);
  };

  const settle = () => {
    cancel();
    retries = 0;
  };

  return { start, settle, cancel };
}
