---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::7
kind: chore
priority: high
project: CATA
seq: 7
status: needs-review
title: Isolate runtime smoke tests from installed Atomic registration
uid: 01M6KXW1Q0FD69EMP5NNHPYQDH
view: dev
entry_type: intent
content_hash: QYJ7INOOUNK45SJYRFMONGCN4LDTDWGIIAKCKB2ZLV4JUTXPRC3Q
created_at: 2026-11-04T19:18:01.467284+00:00
updated_at: 2026-11-04T19:18:01.467284+00:00
---
:::why
`scripts/atomicRuntimeSmoke.mjs:27-36` tries to prove missing-runtime rejection by deleting environment overrides and clearing PATH inside the child. nodeatomic also discovers the installer record at `~/.local/state/atomic/install.json`, which outranks PATH. On a machine with Atomic installed, `npm run build`, `npm run test:atomic:runtime`, and `npm run verify:vsix` fail; isolating `HOME` and `XDG_STATE_HOME` makes the same checks pass. The README documents these commands as working without a runtime override.
:::

:::acceptance-criterion{#01M6KXW1Q0FD69EMP5NNHPYQDH-ac-1 status=met verifiedBy="npm run build; npm run verify:vsix; node scripts/atomicRuntimeSmoke.mjs; node scripts/atomicRuntimeSmoke.mjs --native; bun test scripts/atomicRuntimeSmoke.test.mjs; npm test" evidence="npm run build passed with the installed runtime. verify:vsix passed. Missing-runtime smoke passed with installed state and with empty HOME/XDG state. --native passed (installed dispatch). atomicRuntimeSmoke test proves a fake registration record is ignored. npm test 198 pass, 0 fail."}
`npm run build` and `npm run verify:vsix` pass both with Atomic installed and with no discoverable runtime.
:::

:::acceptance-criterion{#01M6KXW1Q0FD69EMP5NNHPYQDH-ac-2 status=met verifiedBy="npm run build; npm run verify:vsix; node scripts/atomicRuntimeSmoke.mjs; node scripts/atomicRuntimeSmoke.mjs --native; bun test scripts/atomicRuntimeSmoke.test.mjs; npm test" evidence="npm run build passed with the installed runtime. verify:vsix passed. Missing-runtime smoke passed with installed state and with empty HOME/XDG state. --native passed (installed dispatch). atomicRuntimeSmoke test proves a fake registration record is ignored. npm test 198 pass, 0 fail."}
The missing-runtime assertion still proves `ATOMIC_RUNTIME_NOT_FOUND` and the optional native dispatch path still runs when explicitly requested.
:::

:::task{#01M6KXW1Q0FD69EMP5NNHPYQDH-1 status=done criteria="01M6KXW1Q0FD69EMP5NNHPYQDH-ac-1,01M6KXW1Q0FD69EMP5NNHPYQDH-ac-2"}
Run the missing-runtime check in a child with an isolated HOME/XDG_STATE_HOME (or an explicit empty registry), and keep native dispatch in a separate invocation.
::file-ref{path=scripts/atomicRuntimeSmoke.mjs}
:::

:::task{#01M6KXW1Q0FD69EMP5NNHPYQDH-2 status=done criteria="01M6KXW1Q0FD69EMP5NNHPYQDH-ac-1,01M6KXW1Q0FD69EMP5NNHPYQDH-ac-2"}
Add coverage that the smoke helper isolates the registration record, and re-run build, runtime, and VSIX verification.
::file-ref{path=scripts/universalVsix.test.mjs}
:::

:::scope-in
Node runtime smoke isolation used by build, runtime, and VSIX verification.
:::

:::scope-out
No change to nodeatomic discovery or the extension's runtime loading.
:::

:::constraint
Do not weaken the check into an import-only assertion; keep a real rejection and a real native dispatch path.
:::
