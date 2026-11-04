---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::17
kind: bug
priority: medium
project: CATA
seq: 17
status: backlog
title: Canonicalize resource keys across platforms
uid: 01M6KXWR6WR511GB1CZ0GC1SE6
view: dev
entry_type: intent
content_hash: W2DGBVKWFN5JXVCDAEDOJXZQXGNFLEQBCLVDKPV2L7KW5QRBEFMA
created_at: 2026-11-04T18:43:06.629059+00:00
updated_at: 2026-11-04T18:43:06.629059+00:00
---
:::why
`src/agents/resourceMatching.ts:78-100` uses `path.normalize(uri.fsPath)` without case folding and falls back to `path.normalize(uri.path)` for non-file URIs. On Windows and default macOS filesystems, casing differences and the drive-letter loss in the fallback produce different keys, so agent-review redirects, open-tab checks, and persisted association globs fail to match. The repo's own fixture assumes path-only review URIs, making this reachable.
:::

:::acceptance-criterion{#01M6KXWR6WR511GB1CZ0GC1SE6-ac-1 status=unmet}
One canonical key function produces identical keys for equivalent file, git, and path-only review URIs on Windows and POSIX.
:::

:::acceptance-criterion{#01M6KXWR6WR511GB1CZ0GC1SE6-ac-2 status=unmet}
Case-only workspace renames and drive-letter paths do not break handoff or leave orphaned association globs.
:::

:::task{#01M6KXWR6WR511GB1CZ0GC1SE6-1 status=open criteria="01M6KXWR6WR511GB1CZ0GC1SE6-ac-1,01M6KXWR6WR511GB1CZ0GC1SE6-ac-2"}
Canonicalize with platform-aware case folding and preserve the drive/authority; make the review-URI fallback explicit.
::file-ref{path=src/agents/resourceMatching.ts}
::file-ref{path=src/agents/reviewOverrides.ts}
:::

:::task{#01M6KXWR6WR511GB1CZ0GC1SE6-2 status=open criteria="01M6KXWR6WR511GB1CZ0GC1SE6-ac-1,01M6KXWR6WR511GB1CZ0GC1SE6-ac-2"}
Add cross-platform key fixtures for casing, drive letters, and path-only review URIs.
::file-ref{path=scripts/documentLifecycle.test.mjs}
:::

:::scope-in
URI equivalence used by review handoff, tab matching, and override globs.
:::

:::scope-out
No change to which documents are considered reviews.
:::

:::constraint
Match VS Code's file identity semantics rather than inventing a second path model.
:::
