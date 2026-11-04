---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::16
kind: bug
priority: medium
project: CATA
seq: 16
status: backlog
title: Implement useAsDefault rollback
uid: 01M6KXWP15MH2BZF3KQ8FQGTGN
view: dev
entry_type: intent
content_hash: H5C2M5JWMZ5XAIBXCE36KMTPZC73ABVMR5WDWEYRN6WVCSJ4VQGA
created_at: 2026-11-04T18:43:05.958658+00:00
updated_at: 2026-11-04T18:43:05.958658+00:00
---
:::why
`src/shared/extensionConfig.ts:274-278` returns immediately when `useAsDefault` is false, and the `'default'` branch at line 281 is dead. Opting in overwrites `workbench.editorAssociations` for Markdown and chat/git schemes; opting out never restores them, so the extension keeps taking over `*.md` opens with no UI path back.
:::

:::acceptance-criterion{#01M6KXWP15MH2BZF3KQ8FQGTGN-ac-1 status=unmet}
Toggling `catalystIntent.useAsDefault` off restores the previous user associations for the keys the extension wrote.
:::

:::acceptance-criterion{#01M6KXWP15MH2BZF3KQ8FQGTGN-ac-2 status=unmet}
Only keys previously written by this extension are modified; unrelated user associations are preserved.
:::

:::task{#01M6KXWP15MH2BZF3KQ8FQGTGN-1 status=open criteria="01M6KXWP15MH2BZF3KQ8FQGTGN-ac-1,01M6KXWP15MH2BZF3KQ8FQGTGN-ac-2"}
Record the written association keys, implement the rollback branch, and serialize writes with the review-override writer.
::file-ref{path=src/shared/extensionConfig.ts}
::file-ref{path=src/extension.ts}
::file-ref{path=src/agents/reviewOverrides.ts}
:::

:::task{#01M6KXWP15MH2BZF3KQ8FQGTGN-2 status=open criteria="01M6KXWP15MH2BZF3KQ8FQGTGN-ac-1,01M6KXWP15MH2BZF3KQ8FQGTGN-ac-2"}
Add a test for enable, disable, and preservation of unrelated associations.
::file-ref{path=scripts/}
:::

:::scope-in
Editor association opt-in and rollback.
:::

:::scope-out
No change to the custom editor IDs or default editor behavior.
:::

:::constraint
Never discard associations the user set outside this extension.
:::
