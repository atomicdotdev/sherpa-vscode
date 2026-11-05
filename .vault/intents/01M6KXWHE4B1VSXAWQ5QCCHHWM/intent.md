---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::14
kind: bug
priority: medium
project: CATA
seq: 14
status: needs-review
title: Correct blame when the document exceeds the snapshot cap
uid: 01M6KXWHE4B1VSXAWQ5QCCHHWM
view: dev
entry_type: intent
content_hash: TCS3VZIFZLAUPZUOA6TLOUUZKDXSZTIDJODUGCEY324BGXX2BNVQ
created_at: 2026-11-04T21:46:32.036986+00:00
updated_at: 2026-11-04T21:46:32.036986+00:00
---
:::why
`src/git/blameActions.ts:103-107` drops the snapshot text when the buffer exceeds 500 KiB, while the requested line number still comes from the unsaved buffer. Git then blames the on-disk file, producing a plausible but wrong author/commit instead of reporting the limitation.
:::

:::acceptance-criterion{#01M6KXWHE4B1VSXAWQ5QCCHHWM-ac-1 status=met verifiedBy="npm run typecheck; bun test scripts/blameSnapshot.test.mjs; npm test; npm run build" evidence="typecheck passed. blameSnapshot tests 2/2. npm test 212 pass, 0 fail. build succeeded. Oversized unsaved buffers now return unavailable instead of blaming the on-disk file; request snapshots are also capped."}
Above the snapshot cap, blame either reports `unavailable` or uses a temp-file `--contents` path that preserves the unsaved buffer.
:::

:::acceptance-criterion{#01M6KXWHE4B1VSXAWQ5QCCHHWM-ac-2 status=met verifiedBy="npm run typecheck; bun test scripts/blameSnapshot.test.mjs; npm test; npm run build" evidence="typecheck passed. blameSnapshot tests 2/2. npm test 212 pass, 0 fail. build succeeded. Oversized unsaved buffers now return unavailable instead of blaming the on-disk file; request snapshots are also capped."}
A >500 KiB unsaved document never silently shows attribution from different content.
:::

:::task{#01M6KXWHE4B1VSXAWQ5QCCHHWM-1 status=done criteria="01M6KXWHE4B1VSXAWQ5QCCHHWM-ac-1,01M6KXWHE4B1VSXAWQ5QCCHHWM-ac-2"}
Return an explicit unavailable reason above the cap, or pass the snapshot through a bounded temp file and remove it afterward.
::file-ref{path=src/git/blameActions.ts}
::file-ref{path=src/git/blame.ts}
:::

:::task{#01M6KXWHE4B1VSXAWQ5QCCHHWM-2 status=done criteria="01M6KXWHE4B1VSXAWQ5QCCHHWM-ac-1,01M6KXWHE4B1VSXAWQ5QCCHHWM-ac-2"}
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
