---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::10
kind: bug
priority: high
project: CATA
seq: 10
status: backlog
title: Validate and version-fence webview docChanged/applied messages
uid: 01M6KXW8CZDAR4RWWQCHRBWA2Z
view: dev
entry_type: intent
content_hash: 253NLXTBGCF75T6MQVLX3YULTPFELH3PV5RIPHJWO2YPAVBGQQFQ
created_at: 2026-11-04T18:43:03.033220+00:00
updated_at: 2026-11-04T18:43:03.033220+00:00
---
:::why
`webview/src/index.ts:1696-1701` and `1793-1794` assign `message.version` without a type or monotonicity check, and `normalizeEol(message.text)` throws on a non-string. Only three inbound types run inside `withMessageErrorBoundary`, so a malformed message can abort the listener or poison `documentVersion`; every later apply is then rejected as a version mismatch and the pending draft is discarded.
:::

:::acceptance-criterion{#01M6KXW8CZDAR4RWWQCHRBWA2Z-ac-1 status=unmet}
All inbound messages are validated for shape, and `docChanged`/`applied` ignore or recover from missing, non-numeric, or regressed versions.
:::

:::acceptance-criterion{#01M6KXW8CZDAR4RWWQCHRBWA2Z-ac-2 status=unmet}
A handler failure triggers a controlled reload/notice instead of an uncaught listener exception.
:::

:::task{#01M6KXW8CZDAR4RWWQCHRBWA2Z-1 status=open criteria="01M6KXW8CZDAR4RWWQCHRBWA2Z-ac-1,01M6KXW8CZDAR4RWWQCHRBWA2Z-ac-2"}
Add per-type guards and a single outer error boundary; enforce `typeof text === 'string'` and a version floor.
::file-ref{path=webview/src/index.ts}
::file-ref{path=webview/src/types.d.ts}
:::

:::task{#01M6KXW8CZDAR4RWWQCHRBWA2Z-2 status=open criteria="01M6KXW8CZDAR4RWWQCHRBWA2Z-ac-1,01M6KXW8CZDAR4RWWQCHRBWA2Z-ac-2"}
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
