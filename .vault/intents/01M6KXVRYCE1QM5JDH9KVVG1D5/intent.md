---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::3
kind: bug
priority: high
project: CATA
seq: 3
status: needs-review
title: Restrict export image embedding to workspace image files
uid: 01M6KXVRYCE1QM5JDH9KVVG1D5
view: dev
entry_type: intent
content_hash: YKUATEPKVXZ75INKHK62DXVRWY7PF3YSZFJ65G2EBJTED4WVQ5HQ
created_at: 2026-11-04T19:13:48.563937+00:00
updated_at: 2026-11-04T19:13:48.563937+00:00
---
:::why
`src/export/assetPaths.ts` embeds every locally referenced image by reading the file and emitting a base64 data URL. It accepts any extension, any path, and performs no containment check. Verified: `rewriteExportImageSrc('file:///tmp/secret.txt', ...)` returns `data:application/octet-stream;base64,...` containing the file bytes. A cloned intent that references `../../.ssh/id_rsa` can therefore embed a private key into a shared HTML or PDF export.
:::

:::acceptance-criterion{#01M6KXVRYCE1QM5JDH9KVVG1D5-ac-1 status=met verifiedBy="npm run typecheck; bun test scripts/exportImageEmbedding.test.mjs; npm test" evidence="typecheck passed. exportImageEmbedding tests 7/7. npm test 182 pass, 0 fail. Covers workspace embedding, non-image and magic-byte rejection, absolute/relative/symlink escapes, PDF and linked modes, and markdown wiring."}
Only files with an allowlisted image extension and matching image magic bytes are embedded; other paths are left as links or dropped with a visible reason.
:::

:::acceptance-criterion{#01M6KXVRYCE1QM5JDH9KVVG1D5-ac-2 status=met verifiedBy="npm run typecheck; bun test scripts/exportImageEmbedding.test.mjs; npm test" evidence="typecheck passed. exportImageEmbedding tests 7/7. npm test 182 pass, 0 fail. Covers workspace embedding, non-image and magic-byte rejection, absolute/relative/symlink escapes, PDF and linked modes, and markdown wiring."}
A referenced path outside the document's workspace (including `..`, absolute, and symlinked escapes) is never read or embedded.
:::

:::task{#01M6KXVRYCE1QM5JDH9KVVG1D5-1 status=done criteria="01M6KXVRYCE1QM5JDH9KVVG1D5-ac-1,01M6KXVRYCE1QM5JDH9KVVG1D5-ac-2"}
Add an extension plus magic-byte check, resolve the target inside the workspace, cap total embedded bytes, and fall back to a normal link when embedding is unsafe.
::file-ref{path=src/export/assetPaths.ts}
::file-ref{path=src/export/renderMarkdown.ts}
:::

:::task{#01M6KXVRYCE1QM5JDH9KVVG1D5-2 status=done criteria="01M6KXVRYCE1QM5JDH9KVVG1D5-ac-1,01M6KXVRYCE1QM5JDH9KVVG1D5-ac-2"}
Cover a text-file reference, a traversal path, and a valid PNG with export regression tests.
::file-ref{path=scripts/}
:::

:::scope-in
Local image embedding for HTML and PDF exports.
:::

:::scope-out
No change to remote image handling or the linked-image export mode.
:::

:::constraint
Do not read arbitrary local files during export; the exported document must never contain bytes from a non-image path.
:::
