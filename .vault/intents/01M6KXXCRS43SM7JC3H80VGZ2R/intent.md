---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::26
kind: chore
priority: low
project: CATA
seq: 26
status: backlog
title: Consolidate evidence projection validators and cap provenance
uid: 01M6KXXCRS43SM7JC3H80VGZ2R
view: dev
entry_type: intent
content_hash: WLLGYMT2LST4D7W36INBMJLT75IRQZOFRDHBZLZGCB5GCA23UHFQ
created_at: 2026-11-04T18:43:10.461235+00:00
updated_at: 2026-11-04T18:43:10.461235+00:00
---
:::why
`changeMetadata.ts`, `changeImpact.ts`, `changeIntentContext.ts`, and `evidence.ts` each re-implement object/hash/array/uint64 validation with different limits and failure modes. `evidence.ts` maps `provenanceLedger` without a length cap, which feeds the unbounded state payload.
:::

:::acceptance-criterion{#01M6KXXCRS43SM7JC3H80VGZ2R-ac-1 status=unmet}
Shared guards implement object/hash/array/uint64 checks with documented caps, and each projection keeps its explicit failure semantics.
:::

:::acceptance-criterion{#01M6KXXCRS43SM7JC3H80VGZ2R-ac-2 status=unmet}
Provenance ledgers per change and total state payloads are bounded and covered by tests.
:::

:::task{#01M6KXXCRS43SM7JC3H80VGZ2R-1 status=open criteria="01M6KXXCRS43SM7JC3H80VGZ2R-ac-1,01M6KXXCRS43SM7JC3H80VGZ2R-ac-2"}
Extract the shared guards and migrate the four projections without changing their public results for valid input.
::file-ref{path=src/atomic/changeMetadata.ts}
::file-ref{path=src/atomic/changeImpact.ts}
::file-ref{path=src/atomic/changeIntentContext.ts}
::file-ref{path=src/atomic/evidence.ts}
:::

:::task{#01M6KXXCRS43SM7JC3H80VGZ2R-2 status=open criteria=01M6KXXCRS43SM7JC3H80VGZ2R-ac-2}
Cap provenance ledgers and add boundary tests.
::file-ref{path=src/shared/atomicEvidence.ts}
::file-ref{path=scripts/}
:::

:::scope-in
Native evidence projection validation.
:::

:::scope-out
No change to the native wire contract.
:::

:::constraint
Invalid data must remain explicitly unavailable, never silently fabricated.
:::
