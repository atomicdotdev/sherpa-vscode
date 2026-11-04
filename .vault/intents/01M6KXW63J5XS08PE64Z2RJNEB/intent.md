---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::9
kind: bug
priority: high
project: CATA
seq: 9
status: needs-review
title: Keep host-synced text out of undo history
uid: 01M6KXW63J5XS08PE64Z2RJNEB
view: dev
entry_type: intent
content_hash: 76FJEH7VPIOR6VD6XX5GY5N3GYANMGSVTAQTJJRPKPESF56U66IA
created_at: 2026-11-04T19:56:22.522943+00:00
updated_at: 2026-11-04T19:56:22.522943+00:00
---
:::why
`webview/src/editor.ts:2076-2102` dispatches adopted host text with `externalSyncAnnotation` but without `Transaction.addToHistory.of(false)`, so it enters the undo stack. `editor.ts:1830` treats any undo/redo as a history replay, calls `onApplyChanges`, and the resulting full-document `applyChanges` has a matching version and is accepted by the host. A stray `Ctrl+Z` after an agent or Git edit can therefore revert that external edit on disk without confirmation.
:::

:::acceptance-criterion{#01M6KXW63J5XS08PE64Z2RJNEB-ac-1 status=met verifiedBy="npm run typecheck; bun test scripts/editorNotice.test.mjs; npm test; bun run build:webview" evidence="typecheck passed. editorNotice tests 2/2. npm test 202 pass, 0 fail. webview build succeeded. External sync dispatches with Transaction.addToHistory.of(false); conflict notice now exposes Restore draft with a version guard instead of asking for Undo."}
Undo/redo never posts an external host sync back as an `applyChanges` request.
:::

:::acceptance-criterion{#01M6KXW63J5XS08PE64Z2RJNEB-ac-2 status=met verifiedBy="npm run typecheck; bun test scripts/editorNotice.test.mjs; npm test; bun run build:webview" evidence="typecheck passed. editorNotice tests 2/2. npm test 202 pass, 0 fail. webview build succeeded. External sync dispatches with Transaction.addToHistory.of(false); conflict notice now exposes Restore draft with a version guard instead of asking for Undo."}
A conflict notice offers an explicit restore path for a discarded local draft without silently overwriting newer host content.
:::

:::task{#01M6KXW63J5XS08PE64Z2RJNEB-1 status=done criteria="01M6KXW63J5XS08PE64Z2RJNEB-ac-1,01M6KXW63J5XS08PE64Z2RJNEB-ac-2"}
Exclude external sync transactions from history and intercept history replays carrying `externalSyncAnnotation`; add the explicit restore action.
::file-ref{path=webview/src/editor.ts}
::file-ref{path=webview/src/index.ts}
::file-ref{path=webview/src/helpers/readOnly.ts}
:::

:::task{#01M6KXW63J5XS08PE64Z2RJNEB-2 status=done criteria="01M6KXW63J5XS08PE64Z2RJNEB-ac-1,01M6KXW63J5XS08PE64Z2RJNEB-ac-2"}
Add a regression test for external sync followed by undo.
::file-ref{path=scripts/}
:::

:::scope-in
Undo history and external-sync conflict handling.
:::

:::scope-out
No change to ordinary local undo/redo or auto-save.
:::

:::constraint
External edits must win unless the user explicitly chooses to restore a draft.
:::
