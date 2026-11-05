---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::30
priority: medium
project: CATA
seq: 30
status: needs-review
title: Add Atomic push, pull, and insert-view commands
uid: 01M6MEKRK0JW0HN3RA245KSGX5
view: dev
entry_type: intent
content_hash: ZACULGXJW2PT6G7XMRCNWLQ3MDPDVCHCV2ZOQPGNTXOBLH5SGNHA
created_at: 2026-11-04T23:34:34.674032+00:00
updated_at: 2026-11-04T23:34:34.674032+00:00
---
:::why
Atomic already supports remote sync and view promotion, but Atomic Sherpa exposed neither. Users need to push/pull views to a configured remote or an `atomic.storage` project URL, add remotes, and insert all changes from one view into another without leaving VS Code. Remote authentication, project binding, and view-promotion semantics are owned by the installed Atomic CLI, so these explicit commands delegate to it with argument arrays and bounded output.
:::

:::acceptance-criterion{#01M6MEKRK0JW0HN3RA245KSGX5-ac-1 status=met verifiedBy="npm run typecheck; bun test scripts/atomicSyncArgs.test.mjs scripts/atomicCli.test.mjs; npm test; npm run build; npm run package:vsix" evidence="typecheck passed. Sync argument and CLI tests pass. npm test 213 pass, 0 fail. build and VSIX packaging pass. Commands use the installed Atomic CLI for identity/transport and nodeatomic remains the path for all other repository reads/mutations."}
SCM commands Push View, Pull View, Add Remote, and Insert View Into View prompt for the required remote/view names, guard trust and dirty documents, run the Atomic CLI without a shell, and surface failures in Atomic Version Control.
:::

:::acceptance-criterion{#01M6MEKRK0JW0HN3RA245KSGX5-ac-2 status=met verifiedBy="npm run typecheck; bun test scripts/atomicSyncArgs.test.mjs scripts/atomicCli.test.mjs; npm test; npm run build; npm run package:vsix" evidence="typecheck passed. Sync argument and CLI tests pass. npm test 213 pass, 0 fail. build and VSIX packaging pass. Commands use the installed Atomic CLI for identity/transport and nodeatomic remains the path for all other repository reads/mutations."}
Remote URLs such as `https://atomic.storage/...` are accepted; insert-view uses `atomic insert --confirm view <source> --to-view <target>` and refuses identical source/target views.
:::

:::task{#01M6MEKRK0JW0HN3RA245KSGX5-1 status=done criteria=01M6MEKRK0JW0HN3RA245KSGX5-ac-1}
Add argument builders and a bounded Atomic CLI runner with no shell and timeout handling.
::file-ref{path=src/atomic/syncArgs.ts}
::file-ref{path=src/atomic/syncCli.ts}
:::

:::task{#01M6MEKRK0JW0HN3RA245KSGX5-2 status=done criteria=01M6MEKRK0JW0HN3RA245KSGX5-ac-1}
Register SCM/tree commands and prompts for push, pull, insert-view, and add-remote; document the CLI boundary and add command/menu contributions.
::file-ref{path=src/atomic/sourceControl.ts}
::file-ref{path=package.json}
::file-ref{path=README.md}
:::

:::task{#01M6MEKRK0JW0HN3RA245KSGX5-3 status=done criteria=01M6MEKRK0JW0HN3RA245KSGX5-ac-2}
Cover argument construction and CLI success/failure paths with regression tests.
::file-ref{path=scripts/atomicSyncArgs.test.mjs}
::file-ref{path=scripts/atomicCli.test.mjs}
:::

:::scope-in
SCM push/pull/add-remote/insert-view commands, Atomic CLI invocation, prompts, output, documentation, and tests.
:::

:::scope-out
No new identity store or credential handling in the extension; the installed Atomic CLI resolves auth. No changes to Atomic history, diffs, or blast radius.
:::

:::constraint
Never invoke a shell. Pass argument arrays, set cwd to the repository, bound output and time, and keep CLI use limited to explicit sync/remote/insert commands.
:::
