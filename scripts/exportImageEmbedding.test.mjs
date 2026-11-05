import { afterAll, describe, expect, test } from 'bun:test';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { rewriteExportImageSrc } from '../src/export/assetPaths.ts';
import { renderMarkdownToHtml } from '../src/export/renderMarkdown.ts';

const root = fs.mkdtempSync(path.join(os.tmpdir(), 'meo-export-images-'));
const workspace = path.join(root, 'workspace');
const docs = path.join(workspace, 'docs');
const assets = path.join(workspace, 'assets');
const outside = path.join(root, 'outside');
for (const directory of [docs, assets, outside]) fs.mkdirSync(directory, { recursive: true });

const documentPath = path.join(docs, 'doc.md');
const pixel = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=', 'base64');
fs.writeFileSync(path.join(assets, 'pixel.png'), pixel);
fs.writeFileSync(path.join(assets, 'fake.png'), 'not an image');
fs.writeFileSync(path.join(assets, 'notes.txt'), 'secret notes');
fs.writeFileSync(path.join(outside, 'pixel.png'), pixel);
fs.writeFileSync(path.join(outside, 'secret.txt'), 'outside secret');
const symlinkPath = path.join(assets, 'link.png');
let symlinkCreated = false;
try {
  fs.symlinkSync(path.join(outside, 'pixel.png'), symlinkPath);
  symlinkCreated = true;
} catch {
  symlinkCreated = false;
}

const base = {
  markdownFilePath: documentPath,
  workspaceRoot: workspace,
  outputFilePath: path.join(workspace, 'out.html'),
  htmlImageMode: 'embedded'
};

afterAll(() => fs.rmSync(root, { recursive: true, force: true }));

describe('Export image embedding containment', () => {
  test('embeds a workspace image with matching bytes', () => {
    const result = rewriteExportImageSrc('../assets/pixel.png', { ...base, target: 'html' });
    expect(result.startsWith('data:image/png;base64,')).toBe(true);
    expect(Buffer.from(result.split(',')[1], 'base64').equals(pixel)).toBe(true);
  });

  test('does not embed non-image files or extension/byte mismatches', () => {
    expect(rewriteExportImageSrc('../assets/notes.txt', { ...base, target: 'html' })).not.toStartWith('data:');
    expect(rewriteExportImageSrc('../assets/fake.png', { ...base, target: 'html' })).not.toStartWith('data:');
  });

  test('drops absolute and relative paths outside the workspace', () => {
    expect(rewriteExportImageSrc(`file://${path.join(outside, 'secret.txt')}`, { ...base, target: 'html' })).toBe('');
    expect(rewriteExportImageSrc('../outside/pixel.png', { ...base, target: 'html' })).toBe('');
  });

  test('drops symlinks that resolve outside the workspace', () => {
    if (!symlinkCreated) return;
    expect(rewriteExportImageSrc('../assets/link.png', { ...base, target: 'html' })).toBe('');
  });

  test('pdf and linked modes never expose an outside path', () => {
    expect(rewriteExportImageSrc('../outside/pixel.png', { ...base, target: 'pdf' })).toBe('');
    expect(rewriteExportImageSrc('../outside/pixel.png', { ...base, target: 'html', htmlImageMode: 'linked' })).toBe('');
  });

  test('linked mode keeps an inside workspace image as a relative link', () => {
    const result = rewriteExportImageSrc('../assets/pixel.png', { ...base, target: 'html', htmlImageMode: 'linked' });
    expect(result).toBe('assets/pixel.png');
    expect(result).not.toStartWith('data:');
  });

  test('markdown rendering applies the same containment rule', () => {
    const { html } = renderMarkdownToHtml({
      markdownText: '![inside](../assets/pixel.png)\n\n![outside](../outside/pixel.png)',
      markdownFilePath: documentPath,
      workspaceRoot: workspace,
      outputFilePath: path.join(workspace, 'out.html'),
      target: 'html',
      htmlImageMode: 'embedded'
    });
    expect(html.match(/data:image\/png/g)).toHaveLength(1);
    expect(html).not.toContain('outside/pixel.png');
  });
});
