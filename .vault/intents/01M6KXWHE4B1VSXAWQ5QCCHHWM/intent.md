---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::14
kind: bug
priority: medium
project: CATA
seq: 14
status: backlog
title: Correct blame when the document exceeds the snapshot cap
uid: 01M6KXWHE4B1VSXAWQ5QCCHHWM
view: dev
entry_type: intent
content_hash: 43I7ARO6QPSGMOE2ZLS6DRRSGJKADKQHLTUOAJDZWONCRG7TMALQ
created_at: 2026-11-04T18:43:04.973425+00:00
updated_at: 2026-11-04T18:43:04.973425+00:00
---
:::why
`src/git/blameActions.ts:103-107` drops the snapshot text when the buffer exceeds 500 KiB, while the requested line number still comes from the unsaved buffer. Git then blames the on-disk file, producing a plausible but wrong author/commit instead of reporting the limitation.
:::

:::acceptance-criterion{#01M6KXWHE4B1VSXAWQ5QCCHHWM-ac-1 status=unmet}
Above the snapshot cap, blame either reports `unavailable` or uses a temp-file `--contents` path that preserves the unsaved buffer.
:::

:::acceptance-criterion{#01M6KXWHE4B1VSXAWQ5QCCHHWM-ac-2 status=unmet}
A >500 KiB unsaved document never silently shows attribution from different content.
:::

:::task{#01M6KXWHE4B1VSXAWQ5QCCHHWM-1 status=open criteria="01M6KXWHE4B1VSXAWQ5QCCHHWM-ac-1,01M6KXWHE4B1VSXAWQ5QCCHHWM-ac-2"}
Return an explicit unavailable reason above the cap, or pass the snapshot through a bounded temp file and remove it afterward.
::file-ref{path=src/git/blameActions.ts}
::file-ref{path=src/git/blame.ts}
:::

:::task{#01M6KXWHE4B1VSXAWQ5QCCHHWM-2 status=open criteria="01M6KXWHE4B1VSXAWQ5QCCHHWM-ac-1,01M6KXWHE4B1VSXAWQ5QCCHHWM-ac-2"}
Add a test with an oversized unsaved buffer and assert no disk-based false attribution.
::file-ref{path=scripts/}
:::

:::scope-in
Blame snapshot transport and oversize behavior.
:::

:::scope-out
No change to the 500 KiB transport limit or normal blame output.
:::

:::constraint
Never present attribution computed from different content as if it matched the editor buffer.
:::
