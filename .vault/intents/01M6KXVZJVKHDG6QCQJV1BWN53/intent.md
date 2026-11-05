---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::6
kind: bug
priority: high
project: CATA
seq: 6
status: needs-review
title: Stop list auto-renumbering inside code fences and gapped lists
uid: 01M6KXVZJVKHDG6QCQJV1BWN53
view: dev
entry_type: intent
content_hash: VD3NRLOX3JCYVJLX7L5WPPNMJ6BVQ2I5F44ABBJISHLMT3NKOU7A
created_at: 2026-11-04T19:17:09.775892+00:00
updated_at: 2026-11-04T19:17:09.775892+00:00
---
:::why
`webview/src/helpers/listMarkers.ts:822-859` scans every line with no syntax-tree, fence, or frontmatter guard, and `webview/src/editor.ts:1835` applies the result on every document change. Reproduced: a fenced `1. first / 3. third` is rewritten to `1. / 2.`, and an intentionally gapped `1. / 5. / 9.` list becomes `1. / 2. / 3.` on any keystroke. This silently mutates user content.
:::

:::acceptance-criterion{#01M6KXVZJVKHDG6QCQJV1BWN53-ac-1 status=met verifiedBy="npm run typecheck; bun test scripts/listRenumber.test.mjs; npm test; bun run build:webview" evidence="typecheck passed. listRenumber tests 7/7. npm test 197 pass, 0 fail. webview build succeeded. Fenced/indented code, frontmatter, and untouched gapped lists stay unchanged; only the edited contiguous list block is renumbered, preserving the marker suffix."}
No renumber change is produced for lines inside fenced code, indented code, frontmatter, or tables.
:::

:::acceptance-criterion{#01M6KXVZJVKHDG6QCQJV1BWN53-ac-2 status=met verifiedBy="npm run typecheck; bun test scripts/listRenumber.test.mjs; npm test; bun run build:webview" evidence="typecheck passed. listRenumber tests 7/7. npm test 197 pass, 0 fail. webview build succeeded. Fenced/indented code, frontmatter, and untouched gapped lists stay unchanged; only the edited contiguous list block is renumbered, preserving the marker suffix."}
Intentionally gapped ordered lists and marker styles the user did not touch are preserved; renumbering only applies inside the contiguous list block affected by the edit.
:::

:::task{#01M6KXVZJVKHDG6QCQJV1BWN53-1 status=done criteria="01M6KXVZJVKHDG6QCQJV1BWN53-ac-1,01M6KXVZJVKHDG6QCQJV1BWN53-ac-2"}
Gate the scan on the resolved syntax tree and restrict it to the transaction's changed line range; skip non-list contexts.
::file-ref{path=webview/src/helpers/listMarkers.ts}
::file-ref{path=webview/src/editor.ts}
:::

:::task{#01M6KXVZJVKHDG6QCQJV1BWN53-2 status=done criteria="01M6KXVZJVKHDG6QCQJV1BWN53-ac-1,01M6KXVZJVKHDG6QCQJV1BWN53-ac-2"}
Add unit cases for fenced code, frontmatter, `1)`, and gapped sequences.
::file-ref{path=scripts/}
:::

:::scope-in
Ordered-list renumbering and its syntax/context filtering.
:::

:::scope-out
No change to list marker decorations, indentation, or task-list handling.
:::

:::constraint
Never rewrite text inside a code or frontmatter range; preserve the user's chosen starting number for gapped lists.
:::
