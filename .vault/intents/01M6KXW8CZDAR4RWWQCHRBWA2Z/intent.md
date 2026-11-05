---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::10
kind: bug
priority: high
project: CATA
seq: 10
status: needs-review
title: Validate and version-fence webview docChanged/applied messages
uid: 01M6KXW8CZDAR4RWWQCHRBWA2Z
view: dev
entry_type: intent
content_hash: L2MB7TPABFD75TOJFUNF2OMEGFH6VS47HURFLOAHCWDFBG7X6YSA
created_at: 2026-11-04T21:41:31.774656+00:00
updated_at: 2026-11-04T21:41:31.774656+00:00
---
:::why
`webview/src/index.ts:1696-1701` and `1793-1794` assign `message.version` without a type or monotonicity check, and `normalizeEol(message.text)` throws on a non-string. Only three inbound types run inside `withMessageErrorBoundary`, so a malformed message can abort the listener or poison `documentVersion`; every later apply is then rejected as a version mismatch and the pending draft is discarded.
:::

:::acceptance-criterion{#01M6KXW8CZDAR4RWWQCHRBWA2Z-ac-1 status=met verifiedBy="npm run typecheck; bun test scripts/hostMessage.test.mjs; npm test; bun run build:webview" evidence="typecheck passed. hostMessage tests 2/2. npm test 205 pass, 0 fail. webview build succeeded. init/docChanged/applied/appliedFailed require safe-integer versions and string text; stale versions are ignored; handler failures show a Reload notice and request reload."}
All inbound messages are validated for shape, and `docChanged`/`applied` ignore or recover from missing, non-numeric, or regressed versions.
:::

:::acceptance-criterion{#01M6KXW8CZDAR4RWWQCHRBWA2Z-ac-2 status=met verifiedBy="npm run typecheck; bun test scripts/hostMessage.test.mjs; npm test; bun run build:webview" evidence="typecheck passed. hostMessage tests 2/2. npm test 205 pass, 0 fail. webview build succeeded. init/docChanged/applied/appliedFailed require safe-integer versions and string text; stale versions are ignored; handler failures show a Reload notice and request reload."}
A handler failure triggers a controlled reload/notice instead of an uncaught listener exception.
:::

:::task{#01M6KXW8CZDAR4RWWQCHRBWA2Z-1 status=done criteria="01M6KXW8CZDAR4RWWQCHRBWA2Z-ac-1,01M6KXW8CZDAR4RWWQCHRBWA2Z-ac-2"}
Add per-type guards and a single outer error boundary; enforce `typeof text === 'string'` and a version floor.
::file-ref{path=webview/src/index.ts}
::file-ref{path=webview/src/types.d.ts}
:::

:::task{#01M6KXW8CZDAR4RWWQCHRBWA2Z-2 status=done criteria="01M6KXW8CZDAR4RWWQCHRBWA2Z-ac-1,01M6KXW8CZDAR4RWWQCHRBWA2Z-ac-2"}
Add malformed-message tests for missing version, wrong text type, and out-of-order applied messages.
::file-ref{path=scripts/}
:::

:::scope-in
Webview message validation, version fencing, and error containment.
:::

:::scope-out
No change to the message vocabulary or editor rendering.
:::

:::constraint
Reject bad messages without losing the current document state.
:::
