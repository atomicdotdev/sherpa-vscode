---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::25
kind: chore
priority: low
project: CATA
seq: 25
status: backlog
title: Remove dead webview modules and consolidate table scanners
uid: 01M6KXXA6859ZT6S6MZ2GFZ975
view: dev
entry_type: intent
content_hash: NFYSYRXQAFGV4SWWST4EBYF4B7GN5E23LL2MUFHXXCKN6IIHM4SA
created_at: 2026-11-04T18:42:31.642191+00:00
updated_at: 2026-11-04T18:42:31.642191+00:00
---
:::why
`webview/src/blastRadiusList.ts` is imported by nothing; `atomicEvidenceInspector.ts`, `atomicEvidenceTree.ts`, and `draftProjection.ts` are imported only by tests. Three separate GFM table scanners exist with different guards (`tables.ts:3031-3043`, `liveRenderedBlocks.ts:92-138`, `liveMode.ts:2166-2192`), and `blastRadius.ts` duplicates the list renderer inline.
:::

:::acceptance-criterion{#01M6KXXA6859ZT6S6MZ2GFZ975-ac-1 status=unmet}
No production module is reachable only from tests; dead modules are deleted or wired into the product.
:::

:::acceptance-criterion{#01M6KXXA6859ZT6S6MZ2GFZ975-ac-2 status=unmet}
One shared table-discovery implementation serves source mode, live mode, and fallback rendering, with consistent fence/frontmatter/thematic-break guards.
:::

:::task{#01M6KXXA6859ZT6S6MZ2GFZ975-1 status=open criteria=01M6KXXA6859ZT6S6MZ2GFZ975-ac-1}
Delete or adopt the orphan modules and update the evidence tests.
::file-ref{path=webview/src/atomicEvidenceInspector.ts}
::file-ref{path=webview/src/atomicEvidenceTree.ts}
::file-ref{path=webview/src/draftProjection.ts}
::file-ref{path=scripts/atomicEvidence.test.mjs}
:::

:::task{#01M6KXXA6859ZT6S6MZ2GFZ975-2 status=open criteria=01M6KXXA6859ZT6S6MZ2GFZ975-ac-2}
Extract a cached `findTables(state)` and migrate the three call sites.
::file-ref{path=webview/src/helpers/tables.ts}
::file-ref{path=webview/src/helpers/liveRenderedBlocks.ts}
::file-ref{path=webview/src/liveMode.ts}
:::

:::scope-in
Dead-module removal and table discovery consolidation.
:::

:::scope-out
No behavioral change to the surviving renderers.
:::

:::constraint
Do not delete a module while it still carries a unique behavior; migrate that behavior first.
:::
