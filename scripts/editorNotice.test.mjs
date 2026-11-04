import { expect, test } from 'bun:test';
import { createFailureNoticeManager } from '../webview/src/helpers/errors.ts';

function mockNotice() {
  const calls = [];
  return {
    calls,
    notice: {
      setEditorNotice: (...args) => calls.push(args),
      clearEditorNotice: () => calls.push(['clear'])
    }
  };
}

test('restore action is carried through the failure notice manager', () => {
  const { calls, notice } = mockNotice();
  const manager = createFailureNoticeManager(notice);
  let restored = 0;
  manager.setFailureNotice('conflict', 'warning', { showRestore: true, onRestore: () => restored += 1 });

  expect(calls).toHaveLength(1);
  expect(calls[0][0]).toBe('conflict');
  expect(calls[0][2].showRestore).toBe(true);
  expect(calls[0][2].showReload).toBe(false);
  calls[0][2].onRestore();
  expect(restored).toBe(1);
});

test('clearing the notice removes the restore action', () => {
  const { calls, notice } = mockNotice();
  const manager = createFailureNoticeManager(notice);
  manager.setFailureNotice('conflict', 'warning', { showRestore: true, onRestore: () => undefined });
  manager.clearFailureNotice();
  expect(calls.at(-1)).toEqual(['clear']);
});
