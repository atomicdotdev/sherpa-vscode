import { copyFile } from 'node:fs/promises';

const result = await Bun.build({
  entrypoints: ['webview/src/atomicGraph.ts'],
  outdir: 'dist',
  naming: 'atomic-graph.js',
  target: 'browser',
  format: 'iife',
  minify: true
});
if (!result.success) throw new AggregateError(result.logs, 'graph build failed');

await copyFile('webview/src/atomicGraph.css', 'dist/atomic-graph.css');
