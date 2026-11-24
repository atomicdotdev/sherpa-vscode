import { isMap, parseDocument } from 'yaml';

const metadataFields = [
  'title', 'id', 'status', 'priority', 'project', 'author', 'created_by',
  'uid', 'view', 'created_at', 'updated_at', 'content_hash'
] as const;

/** Read presentation metadata, not Atomic's canonical validation. */
export function parseIntentMetadata(yamlSource: string): Record<string, string> | undefined {
  const document = parseDocument(yamlSource);
  if (document.errors.length || !isMap(document.contents) || document.get('entry_type') !== 'intent') {
    return undefined;
  }
  const metadata: Record<string, string> = {};
  for (const field of metadataFields) {
    const value = document.get(field);
    metadata[field] = typeof value === 'string' ? value : '';
  }
  return metadata;
}

/** Read only leading YAML frontmatter, with the ticket parser's exact --- fences. */
export function readIntentMetadata(fullMarkdown: string): Record<string, string> | undefined {
  const opening = /^\uFEFF?---[ \t]*(?:\r\n|\n|\r)/.exec(fullMarkdown);
  if (!opening) {
    return undefined;
  }
  // Fences must start in column one; only spaces/tabs may follow the three dashes.
  // Like remark-frontmatter, require a closing fence (---, not YAML's ...).
  const closingFence = /^---[ \t]*(?=\r|\n|$)/gm;
  closingFence.lastIndex = opening[0].length;
  const closing = closingFence.exec(fullMarkdown);
  return closing ? parseIntentMetadata(fullMarkdown.slice(opening[0].length, closing.index)) : undefined;
}
