---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
icebox_reason: Git integration removed by product decision; the Git stdin path no longer exists.
iceboxed_at: 2026-11-04T22:44:12.140525+00:00
id: CATA::bradley::5
kind: bug
priority: high
project: CATA
seq: 5
status: icebox
title: Handle Git stdin failures and harden runGit
uid: 01M6KXVXAMCB68N8Z8DK2AXC45
view: dev
entry_type: intent
content_hash: OINLX7NLRRVAX4NIGNJFI7YQA3K6OHP2EB2Q6GPLHRLPCWY2JJKQ
created_at: 2026-11-04T22:44:12.140753+00:00
updated_at: 2026-11-04T22:44:12.140753+00:00
---
:::why
`src/git/cli.ts:98-102` calls `child.stdin.end(...)` with no `stdin` error listener. Reproduced with Node: when the child exits before reading stdin, the write raises an uncaught `EPIPE` that can terminate the extension host. Git exits early on ordinary failures such as missing paths and out-of-range blame lines, and the `maxBytes` guard can kill the child mid-write.
:::

:::acceptance-criterion{#01M6KXVXAMCB68N8Z8DK2AXC45-ac-1 status=met verifiedBy="npm run typecheck; bun test scripts/runGitStdin.test.mjs; npm test" evidence="typecheck passed. runGitStdin tests 2/2. npm test 190 pass, 0 fail. The regression test writes 8 MiB to an immediately exiting Git child and asserts no uncaught exception; a failing Git invocation still returns GitCliFailure."}
A child that exits before reading stdin produces a rejected `runGit` promise, never an uncaught stream error.
:::

:::acceptance-criterion{#01M6KXVXAMCB68N8Z8DK2AXC45-ac-2 status=met verifiedBy="npm run typecheck; bun test scripts/runGitStdin.test.mjs; npm test" evidence="typecheck passed. runGitStdin tests 2/2. npm test 190 pass, 0 fail. The regression test writes 8 MiB to an immediately exiting Git child and asserts no uncaught exception; a failing Git invocation still returns GitCliFailure."}
The stdin path is covered by a regression test that spawns an immediately exiting child and asserts no uncaught exception.
:::

:::task{#01M6KXVXAMCB68N8Z8DK2AXC45-1 status=done criteria="01M6KXVXAMCB68N8Z8DK2AXC45-ac-1,01M6KXVXAMCB68N8Z8DK2AXC45-ac-2"}
Attach a stdin error handler, skip writes to destroyed streams, and preserve the existing stdout/stderr/byte-limit semantics.
::file-ref{path=src/git/cli.ts}
:::

:::task{#01M6KXVXAMCB68N8Z8DK2AXC45-2 status=done criteria="01M6KXVXAMCB68N8Z8DK2AXC45-ac-1,01M6KXVXAMCB68N8Z8DK2AXC45-ac-2"}
Add the regression test and run the blame/baseline suites.
::file-ref{path=scripts/}
:::

:::scope-in
Git child-process stdin handling and error propagation.
:::

:::scope-out
No change to Git command arguments or blame line mapping.
:::

:::constraint
Keep the wrapper dependency-free and do not replace it with a shell command.
:::
