---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::8
kind: bug
priority: high
project: CATA
seq: 8
status: needs-review
title: Recover webview edits when host apply replies are lost
uid: 01M6KXW3ZP7D04PMCVVT4WKM7Z
view: dev
entry_type: intent
content_hash: 2XTDJSZHMWSMSV7575WQKIIWGPKT6X22LJCUZUIMAP5B2JWXG2DQ
created_at: 2026-11-04T19:54:48.146010+00:00
updated_at: 2026-11-04T19:54:48.146010+00:00
---
:::why
`webview/src/index.ts:1104,1142,1795` clears `inFlight` only when an `applied`, `appliedFailed`, or matching `docChanged` message arrives. The host can throw before replying (`panelSession.ts` apply path) and swallows `postMessage` failures. Once latched, every `flushChanges` returns, and `requestSave` times out without posting `saveDocument`, so subsequent typing never reaches the document and no error is shown.
:::

:::acceptance-criterion{#01M6KXW3ZP7D04PMCVVT4WKM7Z-ac-1 status=met verifiedBy="npm run typecheck; bun test scripts/applyWatchdog.test.mjs; npm test; bun run build:webview" evidence="typecheck passed. applyWatchdog tests 2/2 (retry then reload, settle cancels). npm test 200 pass, 0 fail. webview build succeeded. Host applyChanges now catches apply failures and posts appliedFailed instead of only logging."}
An unanswered apply is detected within a bounded time and either retried or recovered via `requestReload`, with a visible notice.
:::

:::acceptance-criterion{#01M6KXW3ZP7D04PMCVVT4WKM7Z-ac-2 status=met verifiedBy="npm run typecheck; bun test scripts/applyWatchdog.test.mjs; npm test; bun run build:webview" evidence="typecheck passed. applyWatchdog tests 2/2 (retry then reload, settle cancels). npm test 200 pass, 0 fail. webview build succeeded. Host applyChanges now catches apply failures and posts appliedFailed instead of only logging."}
The host always answers every `applyChanges` with `applied` or `appliedFailed`, including when the apply throws.
:::

:::task{#01M6KXW3ZP7D04PMCVVT4WKM7Z-1 status=done criteria="01M6KXW3ZP7D04PMCVVT4WKM7Z-ac-1,01M6KXW3ZP7D04PMCVVT4WKM7Z-ac-2"}
Add an in-flight deadline and recovery path; make save queue behind the flush instead of silently returning.
::file-ref{path=webview/src/index.ts}
:::

:::task{#01M6KXW3ZP7D04PMCVVT4WKM7Z-2 status=done criteria="01M6KXW3ZP7D04PMCVVT4WKM7Z-ac-1,01M6KXW3ZP7D04PMCVVT4WKM7Z-ac-2"}
Wrap host apply handling so failures post `appliedFailed` with the current text/version, and add a dropped-reply test.
::file-ref{path=src/extension/panelSession.ts}
::file-ref{path=scripts/}
:::

:::scope-in
Apply/flush/save handshake between the webview and the extension host.
:::

:::scope-out
No change to document formatting or the diff/gutter features.
:::

:::constraint
Never discard the user's pending text; recovery must be visible and version-checked.
:::
