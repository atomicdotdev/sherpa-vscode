import { expect, test } from 'bun:test';
import { acceptHostDocumentVersion, isHostDocumentVersion } from '../webview/src/helpers/hostMessage.ts';

test('host document versions are non-negative safe integers', () => {
  expect(isHostDocumentVersion(0)).toBe(true);
  expect(isHostDocumentVersion(42)).toBe(true);
  expect(isHostDocumentVersion(Number.MAX_SAFE_INTEGER)).toBe(true);
  expect(isHostDocumentVersion(-1)).toBe(false);
  expect(isHostDocumentVersion(1.5)).toBe(false);
  expect(isHostDocumentVersion(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
  expect(isHostDocumentVersion(NaN)).toBe(false);
  expect(isHostDocumentVersion(Infinity)).toBe(false);
  expect(isHostDocumentVersion('3')).toBe(false);
  expect(isHostDocumentVersion(undefined)).toBe(false);
});

test('stale host versions are rejected and equal versions accepted', () => {
  expect(acceptHostDocumentVersion(3, 2)).toBe(true);
  expect(acceptHostDocumentVersion(2, 2)).toBe(true);
  expect(acceptHostDocumentVersion(1, 2)).toBe(false);
});
