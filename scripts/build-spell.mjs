import { cp, mkdir, readFile, rm } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const nodeModules = path.join(projectRoot, 'node_modules');
const outdir = path.join(projectRoot, 'dist', 'spell');

// Resolve package directories without package exports restrictions: cspell is
// import-only, and several dictionary packages do not export package.json.
async function findPackage(name, from, optional = false) {
  const require = createRequire(path.join(from, 'package.json'));
  for (const base of require.resolve.paths(name) ?? []) {
    const directory = path.join(base, name);
    try {
      const manifest = JSON.parse(await readFile(path.join(directory, 'package.json'), 'utf8'));
      return { directory, manifest };
    } catch (error) {
      if (error.code !== 'ENOENT' && error.code !== 'ENOTDIR') throw error;
    }
  }
  if (optional) return undefined;
  throw new Error(`Cannot find spell runtime dependency ${name} from ${from}`);
}

await rm(outdir, { recursive: true, force: true });
await mkdir(outdir, { recursive: true });
const result = await Bun.build({
  entrypoints: [path.join(projectRoot, 'src', 'spell', 'runtime.mts')],
  target: 'node',
  format: 'esm',
  external: ['cspell-lib'],
  outdir,
  naming: 'runtime.mjs'
});
if (!result.success) throw new AggregateError(result.logs, 'Spell runtime build failed');

// Preserve the installed dependency layout, including nested version conflicts.
// Copy data and package metadata as well as JS; dictionary/config imports are
// dynamic and cannot be discovered reliably by a JavaScript bundler.
const pending = [await findPackage('cspell-lib', projectRoot)];
const copied = new Set();
while (pending.length) {
  const { directory, manifest } = pending.pop();
  if (copied.has(directory)) continue;
  copied.add(directory);
  const relative = path.relative(nodeModules, directory);
  if (relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) {
    throw new Error(`Spell runtime dependency is outside node_modules: ${directory}`);
  }
  await cp(directory, path.join(outdir, 'node_modules', relative), {
    recursive: true,
    dereference: true,
    filter: (source) => source === directory || path.basename(source) !== 'node_modules'
  });
  const optionalDependencies = manifest.optionalDependencies ?? {};
  const dependencies = {
    ...manifest.dependencies,
    ...manifest.peerDependencies,
    ...optionalDependencies
  };
  for (const name of Object.keys(dependencies)) {
    const optional = name in optionalDependencies || manifest.peerDependenciesMeta?.[name]?.optional;
    const dependency = await findPackage(name, directory, optional);
    if (dependency) pending.push(dependency);
  }
}
