---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::11
kind: bug
priority: medium
project: CATA
seq: 11
status: backlog
title: Stop invalidating explorer state on every filesystem save
uid: 01M6KXWAW0YJH55SR27MB2DPV1
view: dev
entry_type: intent
content_hash: JJWJ2QWRNYCSINPTLEF4BHB3KSQZMSMDD5G7GIGFYY4IYYHK5Q7Q
created_at: 2026-11-04T18:43:03.516083+00:00
updated_at: 2026-11-04T18:43:03.516083+00:00
---
:::why
`src/atomic/sourceControl.ts:318` calls `owner.graph?.invalidate()` on every watcher refresh (600 ms debounce for any repo file). `EvidenceExplorer.invalidate()` clears the selected change and up to 32 MiB of decoded diffs, so saving a file destroys the current change view and makes an immediate `openDiff` a silent no-op because `fileDiff()` returns undefined.
:::

:::acceptance-criterion{#01M6KXWAW0YJH55SR27MB2DPV1-ac-1 status=unmet}
A filesystem event that does not change the displayed view/status does not clear the selected change or the diff cache.
:::

:::acceptance-criterion{#01M6KXWAW0YJH55SR27MB2DPV1-ac-2 status=unmet}
An `openDiff` request after invalidation reports that the change must be reselected instead of silently dropping the click.
:::

:::task{#01M6KXWAW0YJH55SR27MB2DPV1-1 status=open criteria="01M6KXWAW0YJH55SR27MB2DPV1-ac-1,01M6KXWAW0YJH55SR27MB2DPV1-ac-2"}
Compare the refreshed status/snapshot before invalidating; preserve the selection and diff cache when recorded state is unchanged.
::file-ref{path=src/atomic/sourceControl.ts}
::file-ref{path=src/atomic/evidenceExplorer.ts}
:::

:::task{#01M6KXWAW0YJH55SR27MB2DPV1-2 status=open criteria="01M6KXWAW0YJH55SR27MB2DPV1-ac-1,01M6KXWAW0YJH55SR27MB2DPV1-ac-2"}
Add a miss-path message in the graph panel and cover save-then-open behavior.
::file-ref{path=src/atomic/graphPanel.ts}
::file-ref{path=scripts/}
:::

:::scope-in
Explorer invalidation triggers and diff-cache retention.
:::

:::scope-out
No change to Atomic recording, status polling, or diff rendering.
:::

:::constraint
Never show stale evidence after a real recorded-state change; invalidate only when the underlying data changed.
:::
