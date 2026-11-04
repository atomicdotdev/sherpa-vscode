---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::21
kind: bug
priority: medium
project: CATA
seq: 21
status: backlog
title: Make exported HTML self-contained and path-safe
uid: 01M6KXX1BK2WWGKZ1S2KRJMGPZ
view: dev
entry_type: intent
content_hash: ZJJLPNBCJLZKVMCIRWHR6FLK76C5D2TMYCVNGVEL5MS7NZXSWLJQ
created_at: 2026-11-04T18:43:08.559651+00:00
updated_at: 2026-11-04T18:43:08.559651+00:00
---
:::why
`src/extension.ts:1024-1030` emits `file:///.../webview/dist/...` URLs and an absolute output-directory `<base>`, so exported HTML depends on the author's extension install, leaks home paths, and renders math without KaTeX styling when opened elsewhere. On Windows, `assetPaths.ts` treats `C:/...` as a scheme and never rewrites the image path.
:::

:::acceptance-criterion{#01M6KXX1BK2WWGKZ1S2KRJMGPZ-ac-1 status=unmet}
An exported HTML file renders math/code/images without the extension installed and contains no absolute user-home or extension-install paths.
:::

:::acceptance-criterion{#01M6KXX1BK2WWGKZ1S2KRJMGPZ-ac-2 status=unmet}
Windows drive-letter and UNC image paths are rewritten correctly.
:::

:::task{#01M6KXX1BK2WWGKZ1S2KRJMGPZ-1 status=open criteria="01M6KXX1BK2WWGKZ1S2KRJMGPZ-ac-1,01M6KXX1BK2WWGKZ1S2KRJMGPZ-ac-2"}
Inline the KaTeX CSS/fonts and any needed assets, emit relative/deterministic paths, and narrow `<base>` to the linked-image case.
::file-ref{path=src/export/exportHtmlTemplate.ts}
::file-ref{path=src/export/exportStyles.ts}
::file-ref{path=src/extension.ts}
:::

:::task{#01M6KXX1BK2WWGKZ1S2KRJMGPZ-2 status=open criteria="01M6KXX1BK2WWGKZ1S2KRJMGPZ-ac-1,01M6KXX1BK2WWGKZ1S2KRJMGPZ-ac-2"}
Detect Windows drive/UNC paths before scheme classification and add portability fixtures.
::file-ref{path=src/export/assetPaths.ts}
::file-ref{path=scripts/}
:::

:::scope-in
Exported HTML asset embedding, base URL, and Windows path handling.
:::

:::scope-out
No change to the in-editor webview asset loading.
:::

:::constraint
Do not require the extension or the author's filesystem layout to view an export.
:::
