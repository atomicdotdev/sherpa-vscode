export const MAX_BLAME_SNAPSHOT_TEXT_CHARS = 500 * 1024;

/** A blame result must describe the editor buffer, or be explicitly unavailable. */
export function selectBlameSnapshotText(requestText: unknown, currentDocumentText: unknown): {
  snapshotText?: string;
  lineResolutionText?: string;
  tooLarge: boolean;
} {
  const request = typeof requestText === 'string' && requestText.length <= MAX_BLAME_SNAPSHOT_TEXT_CHARS
    ? requestText
    : undefined;
  const current = typeof currentDocumentText === 'string' && currentDocumentText.length <= MAX_BLAME_SNAPSHOT_TEXT_CHARS
    ? currentDocumentText
    : undefined;
  return {
    snapshotText: request ?? current,
    lineResolutionText: request ?? (typeof currentDocumentText === 'string' ? currentDocumentText : undefined),
    tooLarge: !request && !current && (typeof requestText === 'string' || typeof currentDocumentText === 'string')
  };
}
