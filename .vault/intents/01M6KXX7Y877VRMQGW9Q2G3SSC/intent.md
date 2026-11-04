---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::24
kind: remediation
priority: medium
project: CATA
seq: 24
status: backlog
title: Cache and throttle Git gutter diffing
uid: 01M6KXX7Y877VRMQGW9Q2G3SSC
view: dev
entry_type: intent
content_hash: WXTJ4S53C32JHLG7T5T7TMRT7OGXR5GEOJ7KJCCCPYOT4QLRBP6A
created_at: 2026-11-04T18:43:09.992108+00:00
updated_at: 2026-11-04T18:43:09.992108+00:00
---
:::why
`webview/src/helpers/gitDiffGutter.ts:487-503` rebuilds the current-to-baseline line map on every document change, up to 1.5M exact-diff cells, then walks every line and serializes flags with `JSON.stringify` (`gitDiffGutter.ts:130-132,385-411`). Typing in a large file pays this cost per character.
:::

:::acceptance-criterion{#01M6KXX7Y877VRMQGW9Q2G3SSC-ac-1 status=unmet}
Diff computation is coalesced/debounced and scoped to changed ranges; a 1k-line document does not run a full LCS on every keystroke.
:::

:::acceptance-criterion{#01M6KXX7Y877VRMQGW9Q2G3SSC-ac-2 status=unmet}
Gutter markers are built for the visible range or from incremental mappings, with correct markers after edits.
:::

:::task{#01M6KXX7Y877VRMQGW9Q2G3SSC-1 status=open criteria="01M6KXX7Y877VRMQGW9Q2G3SSC-ac-1,01M6KXX7Y877VRMQGW9Q2G3SSC-ac-2"}
Debounce/coalesce the diff, reuse the previous mapping when possible, and build markers from the viewport.
::file-ref{path=webview/src/helpers/gitDiffGutter.ts}
::file-ref{path=src/shared/gitDiffCore.ts}
:::

:::task{#01M6KXX7Y877VRMQGW9Q2G3SSC-2 status=open criteria="01M6KXX7Y877VRMQGW9Q2G3SSC-ac-1,01M6KXX7Y877VRMQGW9Q2G3SSC-ac-2"}
Add a correctness fixture for edits above/inside the viewport and a timing benchmark.
::file-ref{path=scripts/}
:::

:::scope-in
Git gutter diff scheduling and marker construction.
:::

:::scope-out
No change to diff styling or the baseline protocol.
:::

:::constraint
Gutter markers must remain correct after any edit, even when computation is deferred.
:::
