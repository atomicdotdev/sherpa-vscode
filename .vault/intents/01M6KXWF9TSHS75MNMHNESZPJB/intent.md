---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::13
kind: bug
priority: medium
project: CATA
seq: 13
status: needs-review
title: Isolate per-file SCM path failures
uid: 01M6KXWF9TSHS75MNMHNESZPJB
view: dev
entry_type: intent
content_hash: LKJQ6Z4PELV3VCWOGJFOUDOEIS6V25RZM5IMN2KWCFQ4MYPURR6A
created_at: 2026-11-04T21:45:20.399512+00:00
updated_at: 2026-11-04T21:45:20.399512+00:00
---
:::why
`src/atomic/sourceControl.ts:302-303` maps every status path through `resolveRepositoryPath` inside a single `map`. One empty, absolute, or escaping backend path throws, aborts the whole listing, and `refresh`'s catch degrades the repository to an unavailable state with the commit box disabled.
:::

:::acceptance-criterion{#01M6KXWF9TSHS75MNMHNESZPJB-ac-1 status=met verifiedBy="npm run typecheck; bun test scripts/repositoryFiles.test.mjs; npm test; npm run build" evidence="typecheck passed. repositoryFiles test 1/1. npm test 210 pass, 0 fail. build succeeded. Malformed status paths are skipped and logged per file; the remaining resources render and the repository stays available."}
A single invalid path is skipped and logged while all valid tracked/untracked resources remain visible.
:::

:::acceptance-criterion{#01M6KXWF9TSHS75MNMHNESZPJB-ac-2 status=met verifiedBy="npm run typecheck; bun test scripts/repositoryFiles.test.mjs; npm test; npm run build" evidence="typecheck passed. repositoryFiles test 1/1. npm test 210 pass, 0 fail. build succeeded. Malformed status paths are skipped and logged per file; the remaining resources render and the repository stays available."}
The repository is not marked unavailable for a path-only projection error.
:::

:::task{#01M6KXWF9TSHS75MNMHNESZPJB-1 status=done criteria="01M6KXWF9TSHS75MNMHNESZPJB-ac-1,01M6KXWF9TSHS75MNMHNESZPJB-ac-2"}
Wrap each file projection in a try/catch and report the offending path through the Atomic output channel.
::file-ref{path=src/atomic/sourceControl.ts}
:::

:::task{#01M6KXWF9TSHS75MNMHNESZPJB-2 status=done criteria="01M6KXWF9TSHS75MNMHNESZPJB-ac-1,01M6KXWF9TSHS75MNMHNESZPJB-ac-2"}
Add a status fixture with one invalid path and assert the remaining files still render.
::file-ref{path=scripts/}
:::

:::scope-in
SCM resource projection and per-file error handling.
:::

:::scope-out
No relaxation of the repository containment check for valid paths.
:::

:::constraint
Never turn a malformed file entry into a writable URI.
:::
