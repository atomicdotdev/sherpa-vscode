import { expect, test } from 'bun:test';
import { EditorState } from '@codemirror/state';
import { markdown } from '@codemirror/lang-markdown';
import { collectOrderedListRenumberChanges } from '../webview/src/helpers/listMarkers.ts';

const stateOf = (doc) => EditorState.create({ doc, extensions: [markdown()] });
const rangeAtLine = (state, lineNumber) => {
  const line = state.doc.line(lineNumber);
  return [{ fromB: line.from, toB: line.from }];
};
const applied = (state, changes) => {
  let text = state.doc.toString();
  for (const change of [...changes].sort((a, b) => b.from - a.from)) {
    text = `${text.slice(0, change.from)}${change.insert}${text.slice(change.to)}`;
  }
  return text;
};

test('leaves ordered lists inside fenced code untouched', () => {
  const doc = '```text\n1. first\n3. third\n```';
  const state = stateOf(doc);
  expect(collectOrderedListRenumberChanges(state, rangeAtLine(state, 3))).toEqual([]);
});

test('leaves ordered lists inside indented code untouched', () => {
  const doc = '    1. first\n    3. third';
  const state = stateOf(doc);
  expect(collectOrderedListRenumberChanges(state, rangeAtLine(state, 2))).toEqual([]);
});

test('leaves ordered lists inside frontmatter untouched', () => {
  const doc = '---\n1. first\n3. third\n---';
  const state = stateOf(doc);
  expect(collectOrderedListRenumberChanges(state, rangeAtLine(state, 2))).toEqual([]);
});

test('does not renumber a gapped list when the edit is elsewhere', () => {
  const doc = '1. first\n5. second\n9. third\n\nparagraph';
  const state = stateOf(doc);
  expect(collectOrderedListRenumberChanges(state, rangeAtLine(state, 5))).toEqual([]);
});

test('renumbers only the edited list block', () => {
  const doc = '1. first\n3. second\n\n4. third\n6. fourth';
  const state = stateOf(doc);
  expect(applied(state, collectOrderedListRenumberChanges(state, rangeAtLine(state, 2))))
    .toBe('1. first\n2. second\n\n4. third\n6. fourth');
});

test('preserves the ordered marker suffix', () => {
  const doc = '1) first\n3) second';
  const state = stateOf(doc);
  expect(applied(state, collectOrderedListRenumberChanges(state, rangeAtLine(state, 2))))
    .toBe('1) first\n2) second');
});

test('without change context nothing is rewritten', () => {
  const state = stateOf('1. first\n3. second');
  expect(collectOrderedListRenumberChanges(state)).toEqual([]);
});
