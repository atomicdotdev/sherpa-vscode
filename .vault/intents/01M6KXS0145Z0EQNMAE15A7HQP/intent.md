---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::1
kind: bug
priority: high
project: CATA
seq: 1
status: needs-review
title: Fix blast-radius merge regression on release
uid: 01M6KXS0145Z0EQNMAE15A7HQP
view: dev
entry_type: intent
content_hash: MJ3ZAW5VCFH4LV47ATXGGTESXJCWVQLRAH5FAWX3YOM3XPNZQI5A
created_at: 2026-11-04T20:51:10.207837+00:00
updated_at: 2026-11-04T20:51:10.207837+00:00
---
:::why
Release HEAD `0913c91` contains a bad merge (`8902e5a`): `webview/src/blastRadius.ts` was resolved back to the pre-`b4197c0` inline renderer while `webview/src/blastRadiusList.ts` remained orphaned, and `webview/src/blastRadiusModel.ts:36` still compares `edge.relation === 'CALLS'` although the validated type is lowercase `'calls' | 'includes'`. As a result `npm run typecheck` fails with TS2367 and four `atomicBlastRadius` tests fail; the documented summary, always-visible file list, directory partitioning, and show-all filtering are missing from the release build.
:::

:::acceptance-criterion{#01M6KXS0145Z0EQNMAE15A7HQP-ac-1 status=met verifiedBy="npm run typecheck; bun test scripts/atomicBlastRadius.test.mjs scripts/blastRadiusModel.test.mjs; npm test; bun run build:webview" evidence="npm run typecheck: tsc --noEmit for extension and webview passed. bun test scripts/atomicBlastRadius.test.mjs scripts/blastRadiusModel.test.mjs: 12 pass, 0 fail. npm test: 169 pass, 0 fail, 883 expect() calls. bun run build:webview: succeeded."}
`npm run typecheck` exits 0 and `bun test scripts/atomicBlastRadius.test.mjs scripts/blastRadiusModel.test.mjs` passes all 12 tests.
:::

:::acceptance-criterion{#01M6KXS0145Z0EQNMAE15A7HQP-ac-2 status=met verifiedBy="npm run typecheck; bun test scripts/atomicBlastRadius.test.mjs scripts/blastRadiusModel.test.mjs; npm test; bun run build:webview" evidence="npm run typecheck: tsc --noEmit for extension and webview passed. bun test scripts/atomicBlastRadius.test.mjs scripts/blastRadiusModel.test.mjs: 12 pass, 0 fail. npm test: 169 pass, 0 fail, 883 expect() calls. bun run build:webview: succeeded."}
A selected change renders the one-line summary, the always-visible edited/dependent file list, per-cell narrowing with show-all, and separates created directories from edited files, matching the behavior asserted by `scripts/atomicBlastRadius.test.mjs`.
:::

:::acceptance-criterion{#01M6KXS0145Z0EQNMAE15A7HQP-ac-3 status=met verifiedBy="npm run typecheck; bun test scripts/blastRadiusModel.test.mjs scripts/atomicBlastRadius.test.mjs; npm test; bun run build:webview" evidence="13 blast-radius tests pass, npm test 203 pass, typecheck and webview build pass. A hop-1 file imported by another edited file is no longer labeled a dependent."}
Per-file dependent notes count only hop-2 callers/importers; an edge between two edited files is not reported as a dependent, so the summary and file list agree.
:::

:::task{#01M6KXS0145Z0EQNMAE15A7HQP-1 status=done criteria=01M6KXS0145Z0EQNMAE15A7HQP-ac-2}
Restore `webview/src/blastRadius.ts` from `b4197c0` so it consumes `renderFileList`, `summarize`, `partitionEntries`, `groupByModule`, and `filterFiles`, then remove the duplicated inline list renderer.
::file-ref{path=webview/src/blastRadius.ts}
::file-ref{path=webview/src/blastRadiusList.ts}
::file-ref{path=webview/src/blastRadiusModel.ts}
:::

:::task{#01M6KXS0145Z0EQNMAE15A7HQP-2 status=done criteria=01M6KXS0145Z0EQNMAE15A7HQP-ac-1}
Compare normalized relations case-insensitively in `reasonsFor` and keep the lowercase wire contract from `changeImpact.ts`.
::file-ref{path=webview/src/blastRadiusModel.ts}
::file-ref{path=src/atomic/changeImpact.ts}
:::

:::task{#01M6KXS0145Z0EQNMAE15A7HQP-3 status=done criteria=01M6KXS0145Z0EQNMAE15A7HQP-ac-3}
Filter `dependentCounts` by hop-2 source paths, pass the file set through `dependentNote`/`describeEdited`, and add a mixed-edge regression test.
::file-ref{path=webview/src/blastRadiusModel.ts}
::file-ref{path=webview/src/blastRadiusList.ts}
::file-ref{path=scripts/blastRadiusModel.test.mjs}
:::

:::scope-in
Restoring the release-branch blast-radius renderer, wiring the orphaned list module, and fixing relation display/type agreement.
:::

:::scope-out
No changes to the native blast-radius producer, the matrix visual design, or unrelated change-report sections.
:::

:::constraint
Do not reimplement the file list inline; keep the single `blastRadiusList.ts` renderer and the lowercase `'calls' | 'includes'` contract.
:::
