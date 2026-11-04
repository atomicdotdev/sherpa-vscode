---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::15
kind: bug
priority: medium
project: CATA
seq: 15
status: backlog
title: Harden Git environment, locale, and timeouts
uid: 01M6KXWKVN3FQQQYK5SHAEPKY2
view: dev
entry_type: intent
content_hash: APQBRICLOPSK3D5AEBYZGLT7RCEZBDM2ZMCZMAMNI7FCYTRTU6AQ
created_at: 2026-11-04T18:43:05.460335+00:00
updated_at: 2026-11-04T18:43:05.460335+00:00
---
:::why
`runGit` spawns without `GIT_OPTIONAL_LOCKS=0`, `GIT_TERMINAL_PROMPT=0`, `LC_ALL=C`, or a timeout, and merges every failure into `tracked:false` or `error`. Git can take index locks, block on prompts, emit localized stderr that breaks the `no such path` match, or hang indefinitely; `gitApiWatch` can then feed index changes back into repeated baseline refreshes.
:::

:::acceptance-criterion{#01M6KXWKVN3FQQQYK5SHAEPKY2-ac-1 status=unmet}
Git commands run non-interactively with optional locks disabled, stable locale output, and a bounded timeout/abort path.
:::

:::acceptance-criterion{#01M6KXWKVN3FQQQYK5SHAEPKY2-ac-2 status=unmet}
Failure classification distinguishes missing Git, missing repo/path, untracked, and timeout instead of collapsing them.
:::

:::task{#01M6KXWKVN3FQQQYK5SHAEPKY2-1 status=open criteria="01M6KXWKVN3FQQQYK5SHAEPKY2-ac-1,01M6KXWKVN3FQQQYK5SHAEPKY2-ac-2"}
Set the environment, add a timeout/AbortSignal, and preserve exit-code detail in `GitCliFailure`.
::file-ref{path=src/git/cli.ts}
::file-ref{path=src/git/types.ts}
:::

:::task{#01M6KXWKVN3FQQQYK5SHAEPKY2-2 status=open criteria="01M6KXWKVN3FQQQYK5SHAEPKY2-ac-1,01M6KXWKVN3FQQQYK5SHAEPKY2-ac-2"}
Stop mapping all failures to `tracked:false`; cover timeout and locale cases.
::file-ref{path=src/git/baseline.ts}
::file-ref{path=src/git/blame.ts}
::file-ref{path=scripts/}
:::

:::scope-in
Git subprocess environment, timeouts, and error classification.
:::

:::scope-out
No change to the Git API watcher’s debounce policy.
:::

:::constraint
Do not shell out or parse Git output with locale-dependent assumptions.
:::
