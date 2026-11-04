---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::13
kind: bug
priority: medium
project: CATA
seq: 13
status: backlog
title: Isolate per-file SCM path failures
uid: 01M6KXWF9TSHS75MNMHNESZPJB
view: dev
entry_type: intent
content_hash: QQGBMG6DN67JGXEQVSYMG3LVO3V4JSQ267WBVSGR5CI2IMZICRPQ
created_at: 2026-11-04T18:43:04.477061+00:00
updated_at: 2026-11-04T18:43:04.477061+00:00
---
:::why
`src/atomic/sourceControl.ts:302-303` maps every status path through `resolveRepositoryPath` inside a single `map`. One empty, absolute, or escaping backend path throws, aborts the whole listing, and `refresh`'s catch degrades the repository to an unavailable state with the commit box disabled.
:::

:::acceptance-criterion{#01M6KXWF9TSHS75MNMHNESZPJB-ac-1 status=unmet}
A single invalid path is skipped and logged while all valid tracked/untracked resources remain visible.
:::

:::acceptance-criterion{#01M6KXWF9TSHS75MNMHNESZPJB-ac-2 status=unmet}
The repository is not marked unavailable for a path-only projection error.
:::

:::task{#01M6KXWF9TSHS75MNMHNESZPJB-1 status=open criteria="01M6KXWF9TSHS75MNMHNESZPJB-ac-1,01M6KXWF9TSHS75MNMHNESZPJB-ac-2"}
Wrap each file projection in a try/catch and report the offending path through the Atomic output channel.
::file-ref{path=src/atomic/sourceControl.ts}
:::

:::task{#01M6KXWF9TSHS75MNMHNESZPJB-2 status=open criteria="01M6KXWF9TSHS75MNMHNESZPJB-ac-1,01M6KXWF9TSHS75MNMHNESZPJB-ac-2"}
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
