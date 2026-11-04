import { EditorState } from '@codemirror/state';
import { getFencedCodeInfo } from './codeBlocks';
import { isThematicBreakLine } from './frontmatter';
import { resolvedSyntaxTree } from './markdownSyntax';
import { getMermaidColonBlocks, rangeOverlapsMermaidColonBlock } from './mermaidColonBlocks';
import { collectLatexMathRanges, resolveFencedDisplayMathInnerLineRange } from './math';
import { isTableDelimiterLine, parseTableInfo } from './tables';

export type LiveRenderedBlockKind = 'table' | 'mermaid' | 'math';

export interface LiveRenderedBlock {
  kind: LiveRenderedBlockKind;
  startLine: number;
  endLine: number;
  delimiterLine: number | null;
  lineNumberHiddenFrom: number;
  lineNumberHiddenTo: number;
}

const renderedBlockCache = new WeakMap<EditorState, { tree: any; blocks: LiveRenderedBlock[] }>();

function createRenderedBlock(
  kind: LiveRenderedBlockKind,
  startLine: number,
  endLine: number,
  delimiterLine: number | null
): LiveRenderedBlock | null {
  if (!Number.isFinite(startLine) || !Number.isFinite(endLine) || startLine < 1 || endLine < startLine) {
    return null;
  }

  if (kind === 'table') {
    return {
      kind,
      startLine,
      endLine,
      delimiterLine,
      lineNumberHiddenFrom: startLine,
      lineNumberHiddenTo: endLine
    };
  }

  return {
    kind,
    startLine,
    endLine,
    delimiterLine: null,
    lineNumberHiddenFrom: startLine + 1,
    lineNumberHiddenTo: endLine - 1
  };
}

function rangesOverlap(fromA: number, toA: number, fromB: number, toB: number): boolean {
  return fromA < toB && toA > fromB;
}

function isTableContentLine(lineText: string): boolean {
  return lineText.includes('|');
}

function isInsideCodeBlock(tree: any, pos: number): boolean {
  let node = tree.resolveInner(pos, 1);
  while (node) {
    if (node.name === 'FencedCode' || node.name === 'CodeBlock') {
      return true;
    }
    node = node.parent;
  }
  return false;
}

function detectFallbackTableBlocks(
  state: EditorState,
  tree: any,
  parsedTableRanges: Array<{ from: number; to: number }>,
  mermaidColonBlocks: ReadonlyArray<{ from: number; to: number }>
): LiveRenderedBlock[] {
  const blocks: LiveRenderedBlock[] = [];

  for (let lineNo = 2; lineNo <= state.doc.lines; lineNo += 1) {
    const delimiterLine = state.doc.line(lineNo);
    const delimiterText = state.doc.sliceString(delimiterLine.from, delimiterLine.to);
    if (isThematicBreakLine(delimiterText)) continue;
    if (!isTableDelimiterLine(delimiterText)) continue;

    const headerLineNo = lineNo - 1;
    const headerLine = state.doc.line(headerLineNo);
    const headerText = state.doc.sliceString(headerLine.from, headerLine.to);
    if (!isTableContentLine(headerText)) continue;

    let endLineNo = lineNo;
    for (let rowLineNo = lineNo + 1; rowLineNo <= state.doc.lines; rowLineNo += 1) {
      const rowLine = state.doc.line(rowLineNo);
      const rowText = state.doc.sliceString(rowLine.from, rowLine.to);
      if (!isTableContentLine(rowText)) break;
      endLineNo = rowLineNo;
    }

    const from = state.doc.line(headerLineNo).from;
    const to = state.doc.line(endLineNo).to;
    if (parsedTableRanges.some((range) => rangesOverlap(from, to, range.from, range.to))) {
      lineNo = endLineNo;
      continue;
    }
    if (isInsideCodeBlock(tree, from)) {
      lineNo = endLineNo;
      continue;
    }
    if (rangeOverlapsMermaidColonBlock(mermaidColonBlocks, from, to)) {
      lineNo = endLineNo;
      continue;
    }

    const block = createRenderedBlock('table', headerLineNo, endLineNo, lineNo);
    if (block) {
      blocks.push(block);
    }
    lineNo = endLineNo;
  }

  return blocks;
}

function collectCodeLikeRanges(
  tree: any,
  mermaidColonBlocks: ReadonlyArray<{ from: number; to: number }>
): Array<{ from: number; to: number }> {
  const ranges: Array<{ from: number; to: number }> = [];

  tree.iterate({
    enter(node) {
      if (node.name !== 'FencedCode' && node.name !== 'CodeBlock') {
        return;
      }
      ranges.push({ from: node.from, to: node.to });
      return false;
    }
  });

  for (const block of mermaidColonBlocks) {
    ranges.push({
      from: block.from,
      to: block.to
    });
  }

  ranges.sort((left, right) => left.from - right.from || left.to - right.to);
  return ranges;
}

function resolveMathHiddenLineRange(
  startLine: number,
  endLine: number
): { from: number; to: number } | null {
  const innerLineRange = resolveFencedDisplayMathInnerLineRange(
    startLine,
    endLine
  );
  if (!innerLineRange) {
    return null;
  }

  return {
    from: innerLineRange.innerStartLine,
    to: innerLineRange.innerEndLine
  };
}

function selectionTouchesLineRange(state: EditorState, startLine: number, endLine: number): boolean {
  for (const range of state.selection.ranges) {
    const rangeStartLine = state.doc.lineAt(range.from).number;
    const rangeEndPos = range.to > range.from ? range.to - 1 : range.to;
    const rangeEndLine = state.doc.lineAt(rangeEndPos).number;
    if (rangeStartLine <= endLine && rangeEndLine >= startLine) {
      return true;
    }
  }
  return false;
}

export function getLiveRenderedBlocks(state: EditorState): LiveRenderedBlock[] {
  const tree = resolvedSyntaxTree(state);
  const cached = renderedBlockCache.get(state);
  if (cached?.tree === tree) {
    return cached.blocks;
  }

  const blocks: LiveRenderedBlock[] = [];
  const parsedTableRanges: Array<{ from: number; to: number }> = [];
  const mermaidColonBlocks = getMermaidColonBlocks(state);
  const codeLikeRanges = collectCodeLikeRanges(tree, mermaidColonBlocks);

  tree.iterate({
    enter(node) {
      if (node.name === 'Table') {
        const tableInfo = parseTableInfo(state, node);
        parsedTableRanges.push({ from: tableInfo.from, to: tableInfo.to });
        const block = createRenderedBlock(
          'table',
          tableInfo.startLine,
          tableInfo.endLine,
          tableInfo.delimiterRow?.lineNo ?? null
        );
        if (block) {
          blocks.push(block);
        }
        return;
      }

      if (node.name !== 'FencedCode') {
        return;
      }

      if (getFencedCodeInfo(state, node) !== 'mermaid') {
        return;
      }

      const startLine = state.doc.lineAt(node.from).number;
      const endLine = state.doc.lineAt(Math.max(node.to - 1, node.from)).number;
      const block = createRenderedBlock('mermaid', startLine, endLine, null);
      if (block) {
        blocks.push(block);
      }
    }
  });

  for (const block of mermaidColonBlocks) {
    const renderedBlock = createRenderedBlock('mermaid', block.startLine, block.endLine, null);
    if (renderedBlock) {
      blocks.push(renderedBlock);
    }
  }

  const mathRanges = collectLatexMathRanges(state.doc.toString(), {
    excludedRanges: codeLikeRanges
  });
  for (const mathRange of mathRanges) {
    if (mathRange.mode !== 'display' || mathRange.fencedDisplay !== true) {
      continue;
    }
    const startLine = state.doc.lineAt(mathRange.from).number;
    const endLine = state.doc.lineAt(Math.max(mathRange.to - 1, mathRange.from)).number;
    if (endLine <= startLine) {
      continue;
    }
    if (selectionTouchesLineRange(state, startLine, endLine)) {
      continue;
    }
    const block = createRenderedBlock('math', startLine, endLine, null);
    if (block) {
      const hiddenRange = resolveMathHiddenLineRange(startLine, endLine);
      if (hiddenRange) {
        block.lineNumberHiddenFrom = hiddenRange.from;
        block.lineNumberHiddenTo = hiddenRange.to;
      } else {
        block.lineNumberHiddenFrom = 1;
        block.lineNumberHiddenTo = 0;
      }
      blocks.push(block);
    }
  }

  blocks.push(...detectFallbackTableBlocks(state, tree, parsedTableRanges, mermaidColonBlocks));
  blocks.sort((left, right) => (
    left.startLine - right.startLine ||
    left.endLine - right.endLine
  ));
  renderedBlockCache.set(state, { tree, blocks });
  return blocks;
}

function findRenderedBlockAtLine(
  blocks: readonly LiveRenderedBlock[],
  lineNo: number
): LiveRenderedBlock | null {
  let low = 0;
  let high = blocks.length - 1;

  while (low <= high) {
    const mid = (low + high) >> 1;
    const block = blocks[mid];
    if (lineNo < block.startLine) {
      high = mid - 1;
      continue;
    }
    if (lineNo > block.endLine) {
      low = mid + 1;
      continue;
    }
    return block;
  }

  return null;
}

export function getLiveRenderedBlockAtLine(
  state: EditorState,
  lineNo: number
): LiveRenderedBlock | null {
  const blocks = getLiveRenderedBlocks(state);
  if (!blocks.length) {
    return null;
  }
  return findRenderedBlockAtLine(blocks, Math.max(1, Math.floor(lineNo)));
}
