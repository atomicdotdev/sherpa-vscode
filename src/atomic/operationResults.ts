import type { PushResponse, PullResponse, InsertViewResponse } from 'nodeatomic' with { 'resolution-mode': 'import' };

export type OperationResult = { lines: string[]; error?: string };

/** A successful native call can still report a refused push or a partial pull. */
export function pushResult(response: PushResponse): OperationResult {
  if (response.conflict) {
    const conflict = response.conflict;
    return { lines: [], error: `View “${conflict.view}”: ${conflict.description}` };
  }
  const report = response.report;
  if (!report) throw new Error('Atomic returned no push report. Install a compatible native runtime.');
  const lines = (report.views ?? []).flatMap((view) => [
    ...(view.shrink ? [`Warning: remote view “${view.remoteName}” contains changes absent locally; its manifest was not reduced.`] : []),
    ...(view.forced ? [`Warning: remote view “${view.remoteName}” diverged; a forced push was attempted.`] : [])
  ]);
  lines.push(`Push complete: ${response.pushedChanges} changes stored, ${report.viewsDeclared} views declared on ${report.remoteName}.`);
  return { lines };
}

export function pullResult(response: PullResponse): OperationResult {
  const report = response.report;
  if (!report) throw new Error('Atomic returned no pull report. Install a compatible native runtime.');
  const downloads = report.downloads ?? [];
  const localOnly = report.localOnly ?? [];
  const lines = (report.warnings ?? []).map((warning) => `Warning: ${warning.text}`);
  if (localOnly.length) lines.push(`Warning: ${localOnly.length} local changes are not on the remote.`);
  if (report.setIdWarning) lines.push(`Warning: ${report.setIdWarning}`);
  const failures = [
    ...downloads.filter((download) => !download.ok).map((download) => download.error || 'A change failed to download.'),
    ...(report.applyErrors ?? []),
    ...(report.materializeError ? [`Working copy not updated: ${report.materializeError}`] : [])
  ];
  if (String(report.changesFailed) !== '0' && !downloads.some((download) => !download.ok)) {
    failures.push(`${report.changesFailed} changes failed to download.`);
  }
  lines.push(`${failures.length ? 'Pull completed with errors' : 'Pull complete'}: ${report.changesDownloaded} changes downloaded, ${response.appliedChanges} applied to ${report.localView}.`);
  if (report.materialized) lines.push(`${report.filesWritten} working-copy files updated.`);
  else if (report.applied && !report.materializeError) lines.push(`Working copy unchanged; switch to “${report.localView}” to inspect the pulled view.`);
  return { lines, ...(failures.length ? { error: failures.join('\n') } : {}) };
}

export function insertResult(response: InsertViewResponse): OperationResult {
  const lines = [`Inserted ${response.inserted.length} changes into “${response.resolvedTargetView}”; ${response.skippedCount} already present.`];
  if (response.filesUpdated != null) lines.push(`${response.filesUpdated} working-copy files updated.`);
  const conflicts = response.conflicts.map((conflict) => conflict.path).filter(Boolean);
  return { lines, ...(response.hasConflicts || conflicts.length
    ? { error: `Insertion reported conflicts${conflicts.length ? `: ${conflicts.join(', ')}` : '.'}` } : {}) };
}
