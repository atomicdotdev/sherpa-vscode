---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::18
kind: bug
priority: medium
project: CATA
seq: 18
status: backlog
title: Make deferred reopen fault-tolerant and dirty-tab safe
uid: 01M6KXWTGPZJ092NKBKG292B30
view: dev
entry_type: intent
content_hash: PEPSXB3ABILTEUAC4XYWMFZNEWMQVX4E3TPI5LNHNBPWTPBWCIRA
created_at: 2026-11-04T18:43:07.117326+00:00
updated_at: 2026-11-04T18:43:07.117326+00:00
---
:::why
`src/agents/reviewHandoff.ts:185-212` awaits each deferred target with no per-target `try/catch`; one throw aborts the flush and strands the remaining entries. `reviewHandoff.ts:326-329` then closes remaining native tabs without checking `isDirty`, so a review applied to an unsaved buffer can be discarded from a background timer. Entries that continue on pending review/diff state also never expire.
:::

:::acceptance-criterion{#01M6KXWTGPZJ092NKBKG292B30-ac-1 status=unmet}
One failed reopen does not prevent the remaining targets from being processed, and each entry is deleted only after success.
:::

:::acceptance-criterion{#01M6KXWTGPZJ092NKBKG292B30-ac-2 status=unmet}
Dirty native tabs are never closed from the timer; they are saved or skipped with a visible outcome.
:::

:::acceptance-criterion{#01M6KXWTGPZJ092NKBKG292B30-ac-3 status=unmet}
Stranded entries expire or are explicitly re-armed instead of accumulating for the session.
:::

:::task{#01M6KXWTGPZJ092NKBKG292B30-1 status=open criteria="01M6KXWTGPZJ092NKBKG292B30-ac-1,01M6KXWTGPZJ092NKBKG292B30-ac-2,01M6KXWTGPZJ092NKBKG292B30-ac-3"}
Add per-target error isolation, dirty-tab handling, and an expiry/re-arm policy for deferred entries.
::file-ref{path=src/agents/reviewHandoff.ts}
:::

:::task{#01M6KXWTGPZJ092NKBKG292B30-2 status=open criteria="01M6KXWTGPZJ092NKBKG292B30-ac-1,01M6KXWTGPZJ092NKBKG292B30-ac-2,01M6KXWTGPZJ092NKBKG292B30-ac-3"}
Add tests for a throwing target, a dirty native tab, and stale entries.
::file-ref{path=scripts/}
:::

:::scope-in
Deferred reopen flushing and native-tab cleanup.
:::

:::scope-out
No change to how review documents are detected.
:::

:::constraint
Never discard unsaved content and never let one failure stop the queue.
:::
