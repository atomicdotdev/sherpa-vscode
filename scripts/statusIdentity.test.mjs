import { expect, test } from 'bun:test';
import { statusIdentity } from '../src/atomic/model.ts';

const base = {
  view: 'dev',
  snapshot: new Uint8Array([1, 2, 3]),
  viewMerkle: new Uint8Array([9, 8, 7]),
  files: [{ path: 'src/a.ts', status: 1 }]
};

test('ordinary file changes do not change the recorded identity', () => {
  expect(statusIdentity(base)).toBe(statusIdentity({ ...base, files: [{ path: 'src/b.ts', status: 3 }] }));
});

test('view, snapshot, and merkle changes are detected', () => {
  expect(statusIdentity(base)).not.toBe(statusIdentity({ ...base, view: 'feature' }));
  expect(statusIdentity(base)).not.toBe(statusIdentity({ ...base, snapshot: new Uint8Array([1, 2, 4]) }));
  expect(statusIdentity(base)).not.toBe(statusIdentity({ ...base, viewMerkle: new Uint8Array([9, 8, 6]) }));
});

test('nested hash values and missing status are handled', () => {
  expect(statusIdentity({ view: 'dev', snapshot: { value: new Uint8Array([5]) }, viewMerkle: null }))
    .toBe(statusIdentity({ view: 'dev', snapshot: { value: new Uint8Array([5]) }, viewMerkle: null }));
  expect(statusIdentity(undefined)).toBeUndefined();
});
