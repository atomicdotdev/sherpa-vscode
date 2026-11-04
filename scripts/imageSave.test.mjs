import { describe, expect, test } from 'bun:test';
import path from 'node:path';
import { decodePastedImageData, isPathInside, resolvePastedImagePath } from '../src/extension/imageSave.ts';

const workspace = path.resolve('/workspace');
const pngBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=';
const pngDataUrl = `data:image/png;base64,${pngBase64}`;

describe('Pasted image destination validation', () => {
  test('resolves a safe folder and file inside the workspace', () => {
    expect(resolvePastedImagePath(workspace, 'assets', '1700000000000.png')).toBe(path.join(workspace, 'assets', '1700000000000.png'));
    expect(resolvePastedImagePath(workspace, 'assets/nested', 'shot.JPEG')).toBe(path.join(workspace, 'assets', 'nested', 'shot.JPEG'));
  });

  test('rejects absolute and traversal image folders', () => {
    expect(resolvePastedImagePath(workspace, '../outside', 'x.png')).toBeNull();
    expect(resolvePastedImagePath(workspace, 'assets/../../outside', 'x.png')).toBeNull();
    expect(resolvePastedImagePath(workspace, '/tmp/assets', 'x.png')).toBeNull();
    expect(resolvePastedImagePath(workspace, 'C:\\assets', 'x.png')).toBeNull();
  });

  test('rejects traversal and non-image filenames', () => {
    expect(resolvePastedImagePath(workspace, 'assets', '../x.png')).toBeNull();
    expect(resolvePastedImagePath(workspace, 'assets', 'x.png/../../y.png')).toBeNull();
    expect(resolvePastedImagePath(workspace, 'assets', 'x.txt')).toBeNull();
    expect(resolvePastedImagePath(workspace, 'assets', '.hidden.png')).toBeNull();
  });

  test('isPathInside is component-aware', () => {
    expect(isPathInside('/workspace', '/workspace/assets/x.png')).toBe(true);
    expect(isPathInside('/workspace', '/workspace/assets')).toBe(true);
    expect(isPathInside('/workspace', '/workspace-evil/x.png')).toBe(false);
    expect(isPathInside('/workspace', '/workspace')).toBe(false);
  });
});

describe('Pasted image payload validation', () => {
  test('decodes a declared image whose bytes match the declared MIME', () => {
    const decoded = decodePastedImageData(pngDataUrl);
    expect(decoded?.mime).toBe('image/png');
    expect(decoded?.bytes.subarray(0, 8).toString('hex')).toBe('89504e470d0a1a0a');
  });

  test('rejects non-image data URLs', () => {
    expect(decodePastedImageData('data:text/html;base64,PHNjcmlwdD4=')).toBeNull();
    expect(decodePastedImageData('data:image/png;base64,' + Buffer.from('not a png').toString('base64'))).toBeNull();
    expect(decodePastedImageData('data:image/jpeg;base64,' + pngBase64)).toBeNull();
    expect(decodePastedImageData('')).toBeNull();
  });
});
