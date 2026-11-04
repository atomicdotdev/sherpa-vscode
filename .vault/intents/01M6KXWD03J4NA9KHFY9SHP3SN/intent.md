---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::12
kind: bug
priority: medium
project: CATA
seq: 12
status: backlog
title: Publish only consumed evidence state and fix detailOnly refresh
uid: 01M6KXWD03J4NA9KHFY9SHP3SN
view: dev
entry_type: intent
content_hash: GUF5KFZY2MVEK3FVP7ZWHL74LYSHWLGKJ4TZRO33MMSPTTMCNLMA
created_at: 2026-11-04T18:43:04.004966+00:00
updated_at: 2026-11-04T18:43:04.004966+00:00
---
:::why
`EvidenceExplorer.publishDraft` posts up to 300 full `ChangeEvidence` objects (each with up to 2 MiB provenance payloads) although `webview/src/atomicGraphView.ts` only reads `draft.intents`. `inspectView(name, true)` sets `detailOnly` and it is never cleared, so a later Refresh publishes a state without `draft` and the panel cannot list draft changes again. Coverage warnings and `more` are also produced but never rendered.
:::

:::acceptance-criterion{#01M6KXWD03J4NA9KHFY9SHP3SN-ac-1 status=unmet}
The posted state contains only fields the graph webview consumes, with bounded change/provenance data.
:::

:::acceptance-criterion{#01M6KXWD03J4NA9KHFY9SHP3SN-ac-2 status=unmet}
A webview-initiated refresh clears `detailOnly` and either renders warnings/`more` or removes the unreachable plumbing.
:::

:::task{#01M6KXWD03J4NA9KHFY9SHP3SN-1 status=open criteria="01M6KXWD03J4NA9KHFY9SHP3SN-ac-1,01M6KXWD03J4NA9KHFY9SHP3SN-ac-2"}
Trim the published projection, cap provenance per change, and clear `detailOnly` on refresh.
::file-ref{path=src/atomic/evidenceExplorer.ts}
::file-ref{path=src/shared/atomicEvidence.ts}
:::

:::task{#01M6KXWD03J4NA9KHFY9SHP3SN-2 status=open criteria="01M6KXWD03J4NA9KHFY9SHP3SN-ac-1,01M6KXWD03J4NA9KHFY9SHP3SN-ac-2"}
Render `draft.warnings` and `more`, or delete the unused branch; add an explorer regression test.
::file-ref{path=webview/src/atomicGraphView.ts}
::file-ref{path=scripts/}
:::

:::scope-in
Evidence explorer state projection and refresh behavior.
:::

:::scope-out
No change to native payload validation or change-detail rendering.
:::

:::constraint
Do not hide partial coverage; either surface the warning or remove the claim.
:::
