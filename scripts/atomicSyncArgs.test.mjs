import { expect, test } from 'bun:test';
import { buildInsertViewArgs, buildPullArgs, buildPushArgs } from '../src/atomic/syncArgs.ts';

test('push and pull arguments preserve remote and view selections', () => {
  expect(buildPushArgs({ remote: 'origin', fromView: 'dev', toView: 'shared' }))
    .toEqual(['push', 'origin', '--from-view', 'dev', '--to-view', 'shared']);
  expect(buildPullArgs({ remote: 'https://atomic.storage/example', fromView: 'main', toView: 'dev' }))
    .toEqual(['pull', 'https://atomic.storage/example', '--from-view', 'main', '--to-view', 'dev']);
});

test('empty optional values are omitted', () => {
  expect(buildPushArgs({ remote: '', fromView: '', toView: '' })).toEqual(['push']);
  expect(buildPullArgs({ remote: '  ', fromView: 'dev' })).toEqual(['pull', '--from-view', 'dev']);
});

test('insert view always passes confirm and target view', () => {
  expect(buildInsertViewArgs('feature', 'dev')).toEqual(['insert', '--confirm', 'view', 'feature', '--to-view', 'dev']);
  expect(() => buildInsertViewArgs('', 'dev')).toThrow('source and target view names are required');
});
