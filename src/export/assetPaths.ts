import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const SCHEME_RE = /^[a-z][a-z0-9+.-]*:/i;
const REMOTE_OR_INLINE_RE = /^(?:https?:|data:|blob:)/i;

type ExportImageTarget = 'html' | 'pdf';
export type ExportHtmlImageMode = 'embedded' | 'linked';

const IMAGE_MIME_BY_EXTENSION: Record<string, string> = {
  '.avif': 'image/avif',
  '.bmp': 'image/bmp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.tif': 'image/tiff',
  '.tiff': 'image/tiff',
  '.webp': 'image/webp'
};

export type RewriteExportImageSrcOptions = {
  markdownFilePath: string;
  workspaceRoot?: string;
  target: ExportImageTarget;
  outputFilePath?: string;
  htmlImageMode: ExportHtmlImageMode;
  embeddedImageDataUrlCache?: Map<string, string | null>;
};

const MAX_EMBEDDED_IMAGE_BYTES = 8 * 1024 * 1024;
const MAX_TOTAL_EMBEDDED_IMAGE_BYTES = 24 * 1024 * 1024;

export function rewriteExportImageSrc(rawSrc: string, options: RewriteExportImageSrcOptions): string {
  const input = (rawSrc ?? '').trim();
  if (!input) {
    return '';
  }

  if (REMOTE_OR_INLINE_RE.test(input)) {
    return input;
  }

  const { pathPart, suffix, hash } = splitPathAndSuffix(input);
  if (!pathPart) {
    return input;
  }

  if (SCHEME_RE.test(pathPart) && !/^file:/i.test(pathPart)) {
    return input;
  }

  const filePath = resolveLocalLikePath(pathPart, options.markdownFilePath);
  if (!filePath) {
    return input;
  }

  const workspaceRoot = path.resolve(options.workspaceRoot ?? path.dirname(options.markdownFilePath));
  if (!isInsideWorkspace(workspaceRoot, filePath)) {
    return '';
  }

  if (options.target === 'pdf') {
    return `${toFileUrlString(filePath)}${suffix}`;
  }

  if (options.htmlImageMode === 'embedded') {
    const embedded = toEmbeddedImageDataUrl(filePath, options.embeddedImageDataUrlCache);
    if (embedded) {
      // Preserve hash fragments (e.g. SVG fragment refs), but skip query args for data URLs.
      return `${embedded}${hash}`;
    }
  }

  const outputDir = options.outputFilePath ? path.dirname(options.outputFilePath) : path.dirname(options.markdownFilePath);
  const relative = path.relative(outputDir, filePath);
  if (!relative || path.isAbsolute(relative) || hasWindowsDrivePrefix(relative)) {
    return `${toFileUrlString(filePath)}${suffix}`;
  }

  return `${toPosixPath(relative)}${suffix}`;
}

export function toFileUrlString(filePath: string): string {
  return pathToFileURL(filePath).toString();
}

function resolveLocalLikePath(rawPath: string, markdownFilePath: string): string | null {
  if (/^file:/i.test(rawPath)) {
    try {
      return fileURLToPath(rawPath);
    } catch {
      return null;
    }
  }

  const decoded = safeDecodeURIComponent(rawPath).replace(/\\/g, path.sep);
  if (!decoded) {
    return null;
  }

  if (path.isAbsolute(decoded)) {
    return decoded;
  }

  return path.resolve(path.dirname(markdownFilePath), decoded);
}

function splitPathAndSuffix(value: string): { pathPart: string; suffix: string; hash: string } {
  const queryIndex = value.indexOf('?');
  const hashIndex = value.indexOf('#');
  const hasQuery = queryIndex >= 0;
  const hasHash = hashIndex >= 0;
  const index = hasQuery && hasHash
    ? Math.min(queryIndex, hashIndex)
    : (hasQuery ? queryIndex : hashIndex);
  if (index < 0) {
    return { pathPart: value, suffix: '', hash: '' };
  }
  const hash = hasHash ? value.slice(hashIndex) : '';
  return {
    pathPart: value.slice(0, index),
    suffix: value.slice(index),
    hash
  };
}

function toPosixPath(value: string): string {
  return value.split(path.sep).join('/');
}

function hasWindowsDrivePrefix(value: string): boolean {
  return /^[a-z]:/i.test(value);
}

function toEmbeddedImageDataUrl(filePath: string, cache?: Map<string, string | null>): string | null {
  const cached = cache?.get(filePath);
  if (cached !== undefined) {
    return cached;
  }

  let embedded: string | null = null;
  const mimeType = IMAGE_MIME_BY_EXTENSION[path.extname(filePath).toLowerCase()];
  if (mimeType) {
    try {
      const stat = fs.statSync(filePath);
      if (stat.isFile() && stat.size <= MAX_EMBEDDED_IMAGE_BYTES) {
        const content = fs.readFileSync(filePath);
        if (sniffImageMime(content) === mimeType) {
          const dataUrl = `data:${mimeType};base64,${content.toString('base64')}`;
          let used = 0;
          for (const value of cache?.values() ?? []) used += value?.length ?? 0;
          if (used + dataUrl.length <= MAX_TOTAL_EMBEDDED_IMAGE_BYTES) {
            embedded = dataUrl;
          }
        }
      }
    } catch {
      embedded = null;
    }
  }

  cache?.set(filePath, embedded);
  return embedded;
}

function isInsideWorkspace(workspaceRoot: string, filePath: string): boolean {
  const canonicalRoot = canonicalPath(workspaceRoot);
  const canonicalFile = canonicalPath(filePath);
  const relative = path.relative(canonicalRoot, canonicalFile);
  return Boolean(relative) && relative !== '..' && !relative.startsWith(`..${path.sep}`) && !path.isAbsolute(relative);
}

function canonicalPath(filePath: string): string {
  try {
    return fs.realpathSync(filePath);
  } catch {
    return path.resolve(filePath);
  }
}

export function sniffImageMime(content: Buffer): string | null {
  if (content.length >= 8 && content.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) {
    return 'image/png';
  }
  if (content.length >= 3 && content[0] === 0xff && content[1] === 0xd8 && content[2] === 0xff) {
    return 'image/jpeg';
  }
  if (content.length >= 6) {
    const signature = content.subarray(0, 6).toString('ascii');
    if (signature === 'GIF87a' || signature === 'GIF89a') {
      return 'image/gif';
    }
  }
  if (content.length >= 12 && content.subarray(0, 4).toString('ascii') === 'RIFF' && content.subarray(8, 12).toString('ascii') === 'WEBP') {
    return 'image/webp';
  }
  if (content.length >= 2 && content[0] === 0x42 && content[1] === 0x4d) {
    return 'image/bmp';
  }
  if (content.length >= 4) {
    const tiffLittle = content[0] === 0x49 && content[1] === 0x49 && content[2] === 0x2a && content[3] === 0;
    const tiffBig = content[0] === 0x4d && content[1] === 0x4d && content[2] === 0 && content[3] === 0x2a;
    if (tiffLittle || tiffBig) {
      return 'image/tiff';
    }
    if (content[0] === 0 && content[1] === 0 && content[2] === 1 && content[3] === 0) {
      return 'image/x-icon';
    }
  }
  if (content.length >= 12 && content.subarray(4, 8).toString('ascii') === 'ftyp') {
    const brand = content.subarray(8, 12).toString('ascii');
    if (brand === 'avif' || brand === 'avis') {
      return 'image/avif';
    }
  }
  if (/<svg[\s>]/i.test(content.subarray(0, 1024).toString('utf8'))) {
    return 'image/svg+xml';
  }
  return null;
}

function safeDecodeURIComponent(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}
