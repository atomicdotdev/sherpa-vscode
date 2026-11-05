import { cp, copyFile, mkdir, rm } from 'node:fs/promises';

await rm('webview/dist', { recursive: true, force: true });
await mkdir('webview/dist/katex', { recursive: true });

const result = await Bun.build({
  entrypoints: ['webview/src/index.ts'],
  outdir: 'webview/dist',
  target: 'browser',
  format: 'esm',
  splitting: true,
  minify: true
});
if (!result.success) throw new AggregateError(result.logs, 'webview build failed');

await copyFile('webview/src/styles.css', 'webview/dist/index.css');
await copyFile('node_modules/mermaid/dist/mermaid.min.js', 'webview/dist/mermaid.min.js');
await copyFile('node_modules/katex/dist/katex.min.css', 'webview/dist/katex/katex.min.css');
await cp('node_modules/katex/dist/fonts', 'webview/dist/katex/fonts', { recursive: true });
