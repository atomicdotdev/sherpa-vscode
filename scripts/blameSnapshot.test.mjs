import { expect, test } from 'bun:test';
import { MAX_BLAME_SNAPSHOT_TEXT_CHARS, selectBlameSnapshotText } from '../src/git/blameSnapshot.ts';

const oversized = 'x'.repeat(MAX_BLAME_SNAPSHOT_TEXT_CHARS + 1);

test('prefers the webview snapshot and otherwise uses a bounded host snapshot', () => {
  expect(selectBlameSnapshotText('request text', 'host text').snapshotText).toBe('request text');
  expect(selectBlameSnapshotText(undefined, 'host text').snapshotText).toBe('host text');
});

test('oversized buffers are explicitly unavailable rather than blamed from disk', () => {
  expect(selectBlameSnapshotText(undefined, oversized)).toMatchObject({ snapshotText: undefined, tooLarge: true });
  expect(selectBlameSnapshotText(oversized, oversized)).toMatchObject({ snapshotText: undefined, tooLarge: true });
  expect(selectBlameSnapshotText('small request', oversized).snapshotText).toBe('small request');
});
