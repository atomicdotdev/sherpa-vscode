---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::27
kind: chore
priority: medium
project: CATA
seq: 27
status: backlog
title: Add regression tests for apply protocol and export security
uid: 01M6KXXEZP5T312XR434WE2X5Y
view: dev
entry_type: intent
content_hash: JXAT4MZ6DHV5AHT5GNVVJWHEKPZLHDPH6MMFKGRTPJ2LN4GRPFEA
created_at: 2026-11-04T18:43:10.942013+00:00
updated_at: 2026-11-04T18:43:10.942013+00:00
---
:::why
The release shipped a broken merge and the critical export CSS breakout was undetected. The suite has 169 tests for ~44k LOC but no coverage of `panelSession` apply/version handling, the webview message protocol, the CSS sanitizers, export image embedding, or the paste path.
:::

:::acceptance-criterion{#01M6KXXEZP5T312XR434WE2X5Y-ac-1 status=unmet}
Tests cover a dropped apply reply, malformed/regressed versions, external-sync undo, hostile theme CSS, non-image embedding, and traversal in the image-save path.
:::

:::acceptance-criterion{#01M6KXXEZP5T312XR434WE2X5Y-ac-2 status=unmet}
`npm test` and `npm run typecheck` gate the release branch and fail on the regressions that produced this review.
:::

:::task{#01M6KXXEZP5T312XR434WE2X5Y-1 status=open criteria="01M6KXXEZP5T312XR434WE2X5Y-ac-1,01M6KXXEZP5T312XR434WE2X5Y-ac-2"}
Add targeted unit/host-double tests for the apply protocol and the four security paths.
::file-ref{path=scripts/}
::file-ref{path=package.json}
:::

:::task{#01M6KXXEZP5T312XR434WE2X5Y-2 status=open criteria=01M6KXXEZP5T312XR434WE2X5Y-ac-2}
Add a typecheck/test CI job that runs on the release branch.
::file-ref{path=.github/}
:::

:::scope-in
Regression coverage for the defects in this review.
:::

:::scope-out
No broad refactor of the test harness.
:::

:::constraint
Tests must fail before the fix and pass after it; do not assert implementation details.
:::
