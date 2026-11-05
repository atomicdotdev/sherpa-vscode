---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::22
kind: bug
priority: medium
project: CATA
seq: 22
status: backlog
title: Fix table cell source ranges and pipe escaping
uid: 01M6KXX3JBXFT01HS9XKZ8VFQ2
view: dev
entry_type: intent
content_hash: E5MBI7H44NXRVSIC72LENK54Y2PIJYKVMM45J5CMSSBWC5JGLLZQ
created_at: 2026-11-04T18:43:09.028161+00:00
updated_at: 2026-11-04T18:43:09.028161+00:00
---
:::why
`webview/src/helpers/tables.ts:1141-1187` derives `segments` from separator-pipe pairs while `cells` counts inner pipes, so rows without a leading pipe shift every source range by one cell. `tables.ts:598-600,1225-1233` does not escape pipes or `<br>` on commit, so typing `|` corrupts the table; rows wider than the header are truncated, and the widget `eq` ignores document position, leaving stale ranges after edits above the table.
:::

:::acceptance-criterion{#01M6KXX3JBXFT01HS9XKZ8VFQ2-ac-1 status=unmet}
Cell source ranges match the cell text for rows with and without leading/trailing pipes; diagnostics, search, and selection map to the correct cell.
:::

:::acceptance-criterion{#01M6KXX3JBXFT01HS9XKZ8VFQ2-ac-2 status=unmet}
A pipe or `<br>` typed into a cell round-trips as escaped content instead of creating a column; extra source cells are preserved or the edit is refused.
:::

:::task{#01M6KXX3JBXFT01HS9XKZ8VFQ2-1 status=open criteria="01M6KXX3JBXFT01HS9XKZ8VFQ2-ac-1,01M6KXX3JBXFT01HS9XKZ8VFQ2-ac-2"}
Derive segments from the same cursor walk as cells, escape/unescape cell content, and include position in `eq`/re-map ranges.
::file-ref{path=webview/src/helpers/tables.ts}
::file-ref{path=webview/src/editor.ts}
:::

:::task{#01M6KXX3JBXFT01HS9XKZ8VFQ2-2 status=open criteria="01M6KXX3JBXFT01HS9XKZ8VFQ2-ac-1,01M6KXX3JBXFT01HS9XKZ8VFQ2-ac-2"}
Add tests for no-leading-pipe rows, pipe round-trip, extra cells, and typing above a table.
::file-ref{path=scripts/}
:::

:::scope-in
Table parsing, source-range mapping, and cell serialization.
:::

:::scope-out
No change to table visual styling or column resizing.
:::

:::constraint
Preserve the user's source text unless the user explicitly edits that cell.
:::
