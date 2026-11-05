---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::19
kind: bug
priority: medium
project: CATA
seq: 19
status: backlog
title: Guard dispose-time draft recovery against external edits
uid: 01M6KXWWYB7TJZDVSDVHSQWRP0
view: dev
entry_type: intent
content_hash: ZDQJ6CROGMUI5R3XOGUFLRGJFRPC5N2CEWI3JQ4PBOSCAWA4UAIA
created_at: 2026-11-04T18:43:07.586738+00:00
updated_at: 2026-11-04T18:43:07.586738+00:00
---
:::why
`src/extension/panelSession.ts:495-518` recovers `pendingDraftText` during `dispose()`, and `MarkdownCustomDocument.replaceFull` (`markdownCustomDocument.ts:208-232`) applies it without re-checking the document version. If an agent write triggers the redirect and disposal before the webview adopts the host text, the stale draft overwrites the accepted agent edit.
:::

:::acceptance-criterion{#01M6KXWWYB7TJZDVSDVHSQWRP0-ac-1 status=unmet}
Dispose-time recovery re-checks the document version/text before applying and abandons the draft when content changed underneath.
:::

:::acceptance-criterion{#01M6KXWWYB7TJZDVSDVHSQWRP0-ac-2 status=unmet}
The stale-draft path is covered by a test that simulates an external write between queueing and disposal.
:::

:::task{#01M6KXWWYB7TJZDVSDVHSQWRP0-1 status=open criteria="01M6KXWWYB7TJZDVSDVHSQWRP0-ac-1,01M6KXWWYB7TJZDVSDVHSQWRP0-ac-2"}
Snapshot the version/text before the await and bail on mismatch; optionally route recovery through the same conflict notice as normal external sync.
::file-ref{path=src/extension/panelSession.ts}
::file-ref{path=src/extension/markdownCustomDocument.ts}
:::

:::task{#01M6KXWWYB7TJZDVSDVHSQWRP0-2 status=open criteria="01M6KXWWYB7TJZDVSDVHSQWRP0-ac-1,01M6KXWWYB7TJZDVSDVHSQWRP0-ac-2"}
Add the regression test.
::file-ref{path=scripts/}
:::

:::scope-in
Draft recovery on panel disposal.
:::

:::scope-out
No change to normal save-time conflict detection.
:::

:::constraint
Never overwrite newer external content from a teardown callback.
:::
