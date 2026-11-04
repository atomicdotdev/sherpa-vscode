import * as path from 'node:path';
import { sniffImageMime } from '../export/assetPaths';

const MAX_IMAGE_BYTES = 8 * 1024 * 1024;
const MAX_DATA_URL_CHARS = Math.ceil((MAX_IMAGE_BYTES * 4) / 3) + 256;
const IMAGE_FILE_NAME_RE = /^[a-z0-9][a-z0-9._-]{0,127}\.(?:avif|bmp|gif|ico|jpe?g|png|svg|tiff?|webp)$/i;
const IMAGE_DATA_URL_RE = /^data:(image\/(?:avif|bmp|gif|x-icon|jpeg|jpg|png|svg\+xml|tiff|webp));base64,/i;

/** Resolve a paste destination without allowing absolute paths, traversal, or non-image names. */
export function resolvePastedImagePath(workspaceRoot: string, imageFolder: string, fileName: string): string | null {
  const folder = `${imageFolder ?? ''}`.trim();
  if (!folder || path.isAbsolute(folder) || /^[a-z]:/i.test(folder) || folder.includes('\0')) {
    return null;
  }
  if (folder.split(/[\\/]+/).some((segment) => segment === '..')) {
    return null;
  }
  if (!IMAGE_FILE_NAME_RE.test(fileName)) {
    return null;
  }

  const root = path.resolve(workspaceRoot);
  const folderPath = path.resolve(root, folder);
  if (!isPathInside(root, folderPath)) {
    return null;
  }
  const filePath = path.resolve(folderPath, fileName);
  return isPathInside(folderPath, filePath) ? filePath : null;
}

export function decodePastedImageData(dataUrl: string): { mime: string; bytes: Buffer } | null {
  if (typeof dataUrl !== 'string' || dataUrl.length > MAX_DATA_URL_CHARS) {
    return null;
  }
  const match = IMAGE_DATA_URL_RE.exec(dataUrl);
  if (!match) {
    return null;
  }

  const declared = match[1].toLowerCase() === 'image/jpg' ? 'image/jpeg' : match[1].toLowerCase();
  const bytes = Buffer.from(dataUrl.slice(match[0].length), 'base64');
  if (!bytes.length || bytes.length > MAX_IMAGE_BYTES) {
    return null;
  }
  const sniffed = sniffImageMime(bytes);
  return sniffed === declared ? { mime: sniffed, bytes } : null;
}

export function isPathInside(parent: string, candidate: string): boolean {
  const relative = path.relative(parent, candidate);
  return Boolean(relative) && relative !== '..' && !relative.startsWith(`..${path.sep}`) && !path.isAbsolute(relative);
}
