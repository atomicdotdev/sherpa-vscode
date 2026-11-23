import { expect, test } from 'bun:test';
import { parseIntentMetadata, readIntentMetadata } from '../src/shared/intentMetadata.ts';

const frontmatter = (yaml, body = '# Intent\n') => `---\n${yaml}\n---\n${body}`;

test('quoted and flow YAML retain string metadata without interpreting Markdown', () => {
  const metadata = parseIntentMetadata('{entry_type: "intent", title: "Ship: café #1", id: \'A::1\', status: "in progress", priority: "high"}');
  expect(metadata.title).toBe('Ship: café #1');
  expect(metadata.id).toBe('A::1');
  expect(metadata.status).toBe('in progress');
  expect(metadata.priority).toBe('high');
  expect(parseIntentMetadata('"entry_type": \'intent\'\ntitle: "[Link](file.md)"').title).toBe('[Link](file.md)');
});


test('non-string metadata values are empty rather than coerced', () => {
  const values = parseIntentMetadata(`entry_type: intent
title: 42
id: true
status: null
priority: [high]
project: {name: demo}
author: false
created_by: 0
uid: ~
view: []
created_at: 2026-11-23
updated_at: "2026-11-23"
content_hash: 123abc`);
  for (const field of ['title', 'id', 'status', 'priority', 'project', 'author', 'created_by', 'uid', 'view']) {
    expect(values[field]).toBe('');
  }
  expect(values.created_at).toBe('2026-11-23');
  expect(values.updated_at).toBe('2026-11-23');
  expect(values.content_hash).toBe('123abc');
});

test('duplicate keys, malformed YAML, and non-mappings are not intent metadata', () => {
  for (const yaml of [
    'entry_type: intent\nentry_type: intent',
    'entry_type: intent\ntitle: First\ntitle: Second',
    'entry_type: [intent',
    'entry_type: intent\ntitle: "unterminated',
    'entry_type: intent\n---\nentry_type: intent',
    '- entry_type: intent',
    '[entry_type, intent]',
    'intent',
    'null',
    '',
    '# only a comment'
  ]) {
    expect(parseIntentMetadata(yaml)).toBeUndefined();
  }
});

test('entry_type must be the exact string intent', () => {
  for (const yaml of [
    'title: No type',
    'entry_type: memory',
    'entry_type: Intent',
    'entry_type: "intent "',
    'entry_type: [intent]',
    'entry_type: {name: intent}',
    'entry_type: null',
    'entry_type: true'
  ]) {
    expect(parseIntentMetadata(yaml)).toBeUndefined();
  }
});

test('leading frontmatter accepts BOM, CRLF, trailing fence whitespace, and EOF closure', () => {
  const yaml = 'entry_type: intent\ntitle: "Quoted title"\nstatus: ""';
  for (const source of [
    frontmatter(yaml),
    `\uFEFF${frontmatter(yaml)}`,
    frontmatter(yaml).replaceAll('\n', '\r\n'),
    `\uFEFF${frontmatter(yaml).replaceAll('\n', '\r\n')}`,
    `--- \t\n${yaml}\n---\t `,
    `---\n${yaml}\n---`
  ]) {
    const metadata = readIntentMetadata(source);
    expect(metadata.title).toBe('Quoted title');
    expect(metadata.status).toBe('');
  }
});

test('frontmatter is leading, unindented, exactly three dashes, and explicitly closed', () => {
  const yaml = 'entry_type: intent\ntitle: Not frontmatter';
  for (const source of [
    yaml,
    `\n${frontmatter(yaml)}`,
    `# Heading\n${frontmatter(yaml)}`,
    ` ${frontmatter(yaml)}`,
    `\t${frontmatter(yaml)}`,
    `----\n${yaml}\n---`,
    `--- yaml\n${yaml}\n---`,
    `---\n${yaml}`,
    `---\n${yaml}\n...`,
    `---\n${yaml}\n----`,
    `---\n${yaml}\n ---`,
    `---\n${yaml}\n--- comment`,
    `\`\`\`markdown\n${frontmatter(yaml)}\`\`\``
  ]) {
    expect(readIntentMetadata(source)).toBeUndefined();
  }
});

test('indented dashes inside YAML blocks are content and body metadata is ignored', () => {
  const source = frontmatter('entry_type: intent\ntitle: |-\n  First line\n  ---\n  Last line', frontmatter('entry_type: intent\ntitle: Body title'));
  expect(readIntentMetadata(source).title).toBe('First line\n---\nLast line');
  expect(readIntentMetadata(frontmatter('entry_type: memory', frontmatter('entry_type: intent')))).toBeUndefined();
  expect(readIntentMetadata(frontmatter('entry_type: intent\ntitle: [broken'))).toBeUndefined();
});
