import { expect, test } from 'bun:test';
import { insertResult, pullResult, pushResult } from '../src/atomic/operationResults.ts';

const pull = (overrides = {}) => ({ appliedChanges: '2', report: {
  localView: 'target', changesDownloaded: '2', changesFailed: '0', filesWritten: '0',
  warnings: [], localOnly: [], downloads: [], applyErrors: [], ...overrides
} });

test('a native push refusal is not reported as a completed push', () => {
  const result = pushResult({ pushedChanges: '0', conflict: {
    view: 'feature', description: 'remote history diverged', identityMismatch: false
  } });
  expect(result.error).toContain('remote history diverged');
  expect(result.lines).toEqual([]);
});

test('a native pull that applied changes but failed materialization remains an error', () => {
  const result = pullResult(pull({ applied: true, materializeError: 'unrecorded file would be overwritten' }));
  expect(result.error).toContain('Working copy not updated: unrecorded file would be overwritten');
  expect(result.lines.join('\n')).not.toContain('Pull complete:');
  expect(result.lines.join('\n')).not.toContain('switch to');
});

test('native download and reconciliation failures cannot become success', () => {
  for (const report of [
    { changesFailed: '1' },
    { changesFailed: '1', downloads: [{ ok: false, error: 'change checksum mismatch' }] },
    { applyErrors: ['view closure rejected'] }
  ]) {
    const result = pullResult(pull(report));
    expect(result.error).toBeDefined();
    expect(result.lines.join('\n')).toContain('Pull completed with errors:');
  }
});

test('a successful inactive-view pull distinguishes membership from working-copy changes', () => {
  const result = pullResult(pull({ applied: true, materialized: false, localOnly: ['local-change'],
    warnings: [{ text: 'remote identity endpoint unavailable' }] }));
  expect(result.error).toBeUndefined();
  expect(result.lines.join('\n')).toContain('Working copy unchanged; switch to “target”');
  expect(result.lines.join('\n')).toContain('1 local changes are not on the remote');
  expect(result.lines.join('\n')).toContain('remote identity endpoint unavailable');
});

test('insertion exposes both new and pre-existing conflicts', () => {
  for (const response of [
    { hasConflicts: true, conflicts: [] },
    { hasConflicts: false, filesUpdated: '1', conflicts: [{ path: 'conflicted.txt' }] }
  ]) {
    const result = insertResult({ inserted: [], resolvedTargetView: 'target', skippedCount: 0, ...response });
    expect(result.error).toContain('Insertion reported conflicts');
  }
});

test('an inactive insertion does not fail because the current working copy has conflicts', () => {
  const result = insertResult({ inserted: [], resolvedTargetView: 'inactive', skippedCount: 0,
    hasConflicts: false, conflicts: [{ path: 'current-view-conflict.txt' }] });
  expect(result.error).toBeUndefined();
});

test('inactive target conflicts never borrow paths from the current working copy', () => {
  const result = insertResult({ inserted: [], resolvedTargetView: 'inactive', skippedCount: 0,
    hasConflicts: true, conflicts: [{ path: 'current-view-conflict.txt' }] });
  expect(result.error).toBeDefined();
  expect(result.error).not.toContain('current-view-conflict.txt');
});
