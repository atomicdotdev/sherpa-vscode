---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::23
kind: remediation
priority: medium
project: CATA
seq: 23
status: backlog
title: Reduce live-mode decoration rebuild cost
uid: 01M6KXX5S35TT34VSTNEPXAVFB
view: dev
entry_type: intent
content_hash: FXRY4Q2Z7PCVACN2MTCN7VLRFOAGE3NYXX34QP7A5UIZCFBW4JPQ
created_at: 2026-11-04T18:43:09.514898+00:00
updated_at: 2026-11-04T18:43:09.514898+00:00
---
:::why
`webview/src/liveMode.ts:2104-2120` rebuilds the entire decoration set on every transaction, including selection-only moves, and each build performs multiple full-document scans and `doc.toString()` copies. `getLiveRenderedBlocks` caches on `EditorState`, which changes every transaction, so the cache never hits (`webview/src/helpers/liveRenderedBlocks.ts:202-207`).
:::

:::acceptance-criterion{#01M6KXX5S35TT34VSTNEPXAVFB-ac-1 status=unmet}
Selection-only transactions do not rebuild live decorations; document changes rebuild only affected ranges or reuse mapped decorations.
:::

:::acceptance-criterion{#01M6KXX5S35TT34VSTNEPXAVFB-ac-2 status=unmet}
The rendered-block cache keyed by document identity hits across transactions, and a representative 2k-line document stays within the agreed interaction budget.
:::

:::task{#01M6KXX5S35TT34VSTNEPXAVFB-1 status=open criteria="01M6KXX5S35TT34VSTNEPXAVFB-ac-1,01M6KXX5S35TT34VSTNEPXAVFB-ac-2"}
Convert the decoration state field to a plugin that recomputes on `docChanged`, reuse mapped decorations otherwise, and key caches by `state.doc`.
::file-ref{path=webview/src/liveMode.ts}
::file-ref{path=webview/src/helpers/liveRenderedBlocks.ts}
:::

:::task{#01M6KXX5S35TT34VSTNEPXAVFB-2 status=open criteria=01M6KXX5S35TT34VSTNEPXAVFB-ac-2}
Add a performance regression check or benchmark for cursor-only updates.
::file-ref{path=scripts/}
:::

:::scope-in
Live-mode decoration computation and caches.
:::

:::scope-out
No visual redesign and no change to Markdown semantics.
:::

:::constraint
Preserve rendered output for every existing fixture while reducing work.
:::
