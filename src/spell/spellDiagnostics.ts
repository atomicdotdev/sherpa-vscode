import * as vscode from 'vscode';
import { pathToFileURL } from 'node:url';
import type { ValidationIssue } from 'cspell-lib' with { 'resolution-mode': 'import' };
import type * as SpellRuntime from './runtime.mjs' with { 'resolution-mode': 'import' };

export const MEO_SPELL_DIAGNOSTIC_SOURCE = 'MEO Spell';

const maxSpellCheckTextLength = 1_000_000;
const maxSpellSuggestions = 1;
let spellRuntime: Promise<typeof SpellRuntime> | undefined;

function loadSpellRuntime(extensionUri: vscode.Uri): Promise<typeof SpellRuntime> {
  spellRuntime ??= import(pathToFileURL(vscode.Uri.joinPath(extensionUri, 'dist', 'spell', 'runtime.mjs').fsPath).href);
  return spellRuntime;
}

export function shouldRunMeoSpellCheck(document: vscode.TextDocument): boolean {
  if (document.uri.scheme !== 'file') {
    return false;
  }
  if (document.getText().length > maxSpellCheckTextLength) {
    return false;
  }

  const meoEnabled = vscode.workspace
    .getConfiguration('sherpaIntent', document.uri)
    .get<boolean>('spellCheck.enabled', true);
  if (!meoEnabled) {
    return false;
  }

  return vscode.workspace.getConfiguration('cSpell', document.uri).get<boolean>('enabled', true);
}

export function hasExternalSpellDiagnostics(document: vscode.TextDocument): boolean {
  return vscode.languages.getDiagnostics(document.uri).some((diagnostic) => {
    if (diagnostic.source === MEO_SPELL_DIAGNOSTIC_SOURCE) {
      return false;
    }
    const source = `${diagnostic.source ?? ''}`.toLowerCase();
    return source.includes('spell') || source.includes('cspell');
  });
}

export async function collectMeoSpellDiagnostics(
  document: vscode.TextDocument,
  extensionUri: vscode.Uri
): Promise<vscode.Diagnostic[]> {
  if (!shouldRunMeoSpellCheck(document) || hasExternalSpellDiagnostics(document)) {
    return [];
  }

  const text = document.getText().replace(/\r\n?/g, '\n');
  const { checkDocument } = await loadSpellRuntime(extensionUri);
  const result = await checkDocument(
    {
      uri: document.uri.toString(),
      text,
      languageId: document.languageId || 'markdown'
    },
    false
  );

  if (!result.checked) {
    return [];
  }

  return result.issues.map((issue) => createDiagnostic(document, issue));
}

export async function collectMeoSpellSuggestions(
  document: vscode.TextDocument,
  normalizedFrom: number,
  normalizedTo: number,
  extensionUri: vscode.Uri
): Promise<string[]> {
  if (!shouldRunMeoSpellCheck(document)) {
    return [];
  }

  const text = document.getText().replace(/\r\n?/g, '\n');
  const { checkDocument } = await loadSpellRuntime(extensionUri);
  const result = await checkDocument(
    {
      uri: document.uri.toString(),
      text,
      languageId: document.languageId || 'markdown'
    },
    true
  );

  if (!result.checked) {
    return [];
  }

  const targetFrom = Math.max(0, Math.floor(normalizedFrom));
  const targetTo = Math.max(targetFrom, Math.floor(normalizedTo));
  const issue = result.issues.find((candidate) => {
    const from = Math.max(0, Math.floor(candidate.offset));
    const to = from + Math.max(1, Math.floor(candidate.length ?? candidate.text.length));
    return from === targetFrom && to === targetTo;
  });

  return uniqueSuggestions(issue?.suggestions ?? [], issue?.text ?? '').slice(0, maxSpellSuggestions);
}

function uniqueSuggestions(suggestions: string[], original: string): string[] {
  const seen = new Set<string>();
  const normalizedOriginal = original.toLowerCase();
  const result: string[] = [];
  for (const suggestion of suggestions) {
    const trimmed = `${suggestion}`.trim();
    if (!trimmed || trimmed.toLowerCase() === normalizedOriginal || seen.has(trimmed)) {
      continue;
    }
    seen.add(trimmed);
    result.push(trimmed);
  }
  return result;
}

function createDiagnostic(document: vscode.TextDocument, issue: ValidationIssue): vscode.Diagnostic {
  const offset = Number.isFinite(issue.offset) ? Math.max(0, Math.floor(issue.offset)) : 0;
  const length = Number.isFinite(issue.length) ? Math.max(1, Math.floor(issue.length ?? 1)) : 1;
  const start = document.positionAt(mapNormalizedOffsetToDocumentOffset(document.getText(), offset));
  const end = document.positionAt(mapNormalizedOffsetToDocumentOffset(document.getText(), offset + length));
  const diagnostic = new vscode.Diagnostic(
    new vscode.Range(start, end),
    issue.message || `Unknown word: ${issue.text}`,
    vscode.DiagnosticSeverity.Information
  );
  diagnostic.source = MEO_SPELL_DIAGNOSTIC_SOURCE;
  diagnostic.code = issue.text;
  return diagnostic;
}

function mapNormalizedOffsetToDocumentOffset(documentText: string, normalizedOffset: number): number {
  const target = Number.isFinite(normalizedOffset) ? Math.max(0, normalizedOffset) : documentText.length;
  if (target === 0) {
    return 0;
  }

  let normalizedIndex = 0;
  let documentIndex = 0;

  while (documentIndex < documentText.length && normalizedIndex < target) {
    if (documentText.charCodeAt(documentIndex) === 13) {
      if (documentText.charCodeAt(documentIndex + 1) === 10) {
        documentIndex += 2;
      } else {
        documentIndex += 1;
      }
      normalizedIndex += 1;
      continue;
    }

    documentIndex += 1;
    normalizedIndex += 1;
  }

  return documentIndex;
}
