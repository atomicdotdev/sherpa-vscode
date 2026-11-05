---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::4
kind: bug
priority: high
project: CATA
seq: 4
status: needs-review
title: Validate pasted-image write destinations
uid: 01M6KXVV23JDQJBM9VEZSKRBT6
view: dev
entry_type: intent
content_hash: 4FUHVESQYD2NUIIAKGGGGZOQWUSVDCUGM7ZJ2M6SPRKN6BSRENMQ
created_at: 2026-11-04T19:14:50.955380+00:00
updated_at: 2026-11-04T19:14:50.955380+00:00
---
:::why
`src/extension/panelSession.ts:1770-1785` joins `catalystIntent.imageFolder` and the webview-supplied `message.fileName` with `vscode.Uri.joinPath` and writes the decoded bytes directly. `Uri.joinPath` normalizes `..` — verified with the same URI implementation — so a workspace setting or webview message can write outside the workspace. `imageData` is also decoded without a size or MIME cap.
:::

:::acceptance-criterion{#01M6KXVV23JDQJBM9VEZSKRBT6-ac-1 status=met verifiedBy="npm run typecheck; bun test scripts/imageSave.test.mjs; npm test" evidence="typecheck passed. imageSave tests 6/6. npm test 188 pass, 0 fail. Covers absolute and traversal imageFolder, traversal and non-image fileName, MIME/magic-byte mismatch, and workspace containment; handler adds realpath folder containment and symlink rejection."}
The destination is confined to the resolved workspace image folder; `imageFolder` must be relative and free of `..`, and the filename must match a safe image-name pattern.
:::

:::acceptance-criterion{#01M6KXVV23JDQJBM9VEZSKRBT6-ac-2 status=met verifiedBy="npm run typecheck; bun test scripts/imageSave.test.mjs; npm test" evidence="typecheck passed. imageSave tests 6/6. npm test 188 pass, 0 fail. Covers absolute and traversal imageFolder, traversal and non-image fileName, MIME/magic-byte mismatch, and workspace containment; handler adds realpath folder containment and symlink rejection."}
Oversized or non-image payloads are rejected before writing, and a regression test covers traversal through both `imageFolder` and `fileName`.
:::

:::task{#01M6KXVV23JDQJBM9VEZSKRBT6-1 status=done criteria="01M6KXVV23JDQJBM9VEZSKRBT6-ac-1,01M6KXVV23JDQJBM9VEZSKRBT6-ac-2"}
Validate the configured folder and generated filename, resolve both with an explicit containment check, and cap decoded bytes by MIME.
::file-ref{path=src/extension/panelSession.ts}
::file-ref{path=src/shared/documentLinks.ts}
:::

:::task{#01M6KXVV23JDQJBM9VEZSKRBT6-2 status=done criteria="01M6KXVV23JDQJBM9VEZSKRBT6-ac-1,01M6KXVV23JDQJBM9VEZSKRBT6-ac-2"}
Add a workspace-scope or validation rule for `catalystIntent.imageFolder` and test the paste path in a host-level unit test.
::file-ref{path=package.json}
::file-ref{path=scripts/}
:::

:::scope-in
Clipboard image save path validation and size limits.
:::

:::scope-out
No change to Markdown image rendering or the paste gesture.
:::

:::constraint
Never write outside the workspace; keep the relative image markdown returned to the editor.
:::
