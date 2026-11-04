---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::20
kind: bug
priority: medium
project: CATA
seq: 20
status: backlog
title: Harden headless export navigation and fragment links
uid: 01M6KXWZ4RGNX378MP27M8Z0HP
view: dev
entry_type: intent
content_hash: 2UUIE77CL7NDJZK6HJOJE4A6QCPEE4NPBVKITXO6SQ26P6RUHP6Q
created_at: 2026-11-04T18:43:08.067511+00:00
updated_at: 2026-11-04T18:43:08.067511+00:00
---
:::why
The PDF renderer loads a temp `file://` document in Chrome with web security disabled, no request interception, and no restriction on remote subresources, so a malicious document can beacon or probe internal hosts during export. `baseHref` is passed for both targets, so fragment-only footnote/citation links resolve against the output directory instead of the temp document.
:::

:::acceptance-criterion{#01M6KXWZ4RGNX378MP27M8Z0HP-ac-1 status=unmet}
Headless export blocks non-file/non-data subresource requests or rewrites them explicitly, and no longer runs with `--disable-web-security`.
:::

:::acceptance-criterion{#01M6KXWZ4RGNX378MP27M8Z0HP-ac-2 status=unmet}
PDF footnote and citation links resolve inside the rendered document; HTML uses `<base>` only when linked assets require it.
:::

:::task{#01M6KXWZ4RGNX378MP27M8Z0HP-1 status=open criteria="01M6KXWZ4RGNX378MP27M8Z0HP-ac-1,01M6KXWZ4RGNX378MP27M8Z0HP-ac-2"}
Constrain browser flags and intercept requests during finalize/PDF rendering; scope `baseHref` by target.
::file-ref{path=src/export/pdfRenderer.ts}
::file-ref{path=src/export/exportHtmlTemplate.ts}
::file-ref{path=src/extension.ts}
:::

:::task{#01M6KXWZ4RGNX378MP27M8Z0HP-2 status=open criteria="01M6KXWZ4RGNX378MP27M8Z0HP-ac-1,01M6KXWZ4RGNX378MP27M8Z0HP-ac-2"}
Add a link-resolution test for PDF footnotes and a remote-image request test.
::file-ref{path=scripts/}
:::

:::scope-in
Headless browser navigation policy and export base URL handling.
:::

:::scope-out
No change to Markdown rendering or PDF page styling.
:::

:::constraint
Exports must be renderable without granting the browser unrestricted local-file or cross-origin access.
:::
