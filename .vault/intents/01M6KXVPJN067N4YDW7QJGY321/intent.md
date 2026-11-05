---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::2
kind: bug
priority: high
project: CATA
seq: 2
status: needs-review
title: Prevent CSS breakout in HTML and PDF export
uid: 01M6KXVPJN067N4YDW7QJGY321
view: dev
entry_type: intent
content_hash: XSTAV5HKSSLU3QXDSBUNRTVEBDWG3K7CTXX4RUNA7SB2SFWBQ6LQ
created_at: 2026-11-04T19:11:31.124746+00:00
updated_at: 2026-11-04T19:11:31.124746+00:00
---
:::why
`src/export/exportHtmlTemplate.ts:30` interpolates the generated stylesheet into `<style>` without HTML escaping, while `src/export/exportStyles.ts:9,877-910` and `src/shared/themeDefaults.ts:629-641` only strip `[\n\r;{}]`. `catalystIntent.theme` is workspace-settable, so a cloned repository can set `fonts.liveFont` to `</style><script>...</script>`. Verified with the current builders: `buildExportStyles` plus `buildExportHtmlDocument` emits a live script tag. PDF export runs that document in Chrome with `--allow-file-access-from-files --disable-web-security` (`src/export/pdfRenderer.ts:85-91`), giving the script local-file read access and network egress.
:::

:::acceptance-criterion{#01M6KXVPJN067N4YDW7QJGY321-ac-1 status=met verifiedBy="npm run typecheck; bun test scripts/exportSecurity.test.mjs; npm test; node headless export smoke" evidence="typecheck passed. exportSecurity tests 6/6. npm test 175 pass, 0 fail. Headless export under Node: CSP retained, Mermaid SVG rendered, runtime/mermaid scripts removed, PDF 9,520 bytes. Launch args contain no --disable-web-security."}
A theme or editor font value containing `<`, `>`, or attribute-breaking characters cannot terminate the `<style>` element or inject markup; a regression test asserts the exported document contains no attacker-supplied `</style` or `<script`.
:::

:::acceptance-criterion{#01M6KXVPJN067N4YDW7QJGY321-ac-2 status=met verifiedBy="npm run typecheck; bun test scripts/exportSecurity.test.mjs; npm test; node headless export smoke" evidence="typecheck passed. exportSecurity tests 6/6. npm test 175 pass, 0 fail. Headless export under Node: CSP retained, Mermaid SVG rendered, runtime/mermaid scripts removed, PDF 9,520 bytes. Launch args contain no --disable-web-security."}
Exported HTML carries a restrictive Content-Security-Policy, and PDF rendering no longer enables `--disable-web-security`.
:::

:::task{#01M6KXVPJN067N4YDW7QJGY321-1 status=done criteria=01M6KXVPJN067N4YDW7QJGY321-ac-1}
Escape or reject `<`, `>`, quotes, and backslashes in the CSS sanitizers and enforce a strict font/color value grammar; keep the theme value usable for normal font stacks.
::file-ref{path=src/export/exportStyles.ts}
::file-ref{path=src/shared/themeDefaults.ts}
:::

:::task{#01M6KXVPJN067N4YDW7QJGY321-2 status=done criteria="01M6KXVPJN067N4YDW7QJGY321-ac-1,01M6KXVPJN067N4YDW7QJGY321-ac-2"}
Add a CSP to `buildExportHtmlDocument` and drop `--disable-web-security` from the Puppeteer launch after confirming file images still render; add a hostile-theme regression test.
::file-ref{path=src/export/exportHtmlTemplate.ts}
::file-ref{path=src/export/pdfRenderer.ts}
::file-ref{path=scripts/}
:::

:::scope-in
CSS value sanitization, export document CSP, and headless browser flags.
:::

:::scope-out
No redesign of theme presets or KaTeX/Mermaid rendering, and no weakening of VS Code webview CSP.
:::

:::constraint
Treat configuration and imported theme values as untrusted; never interpolate them into HTML or CSS text without escaping.
:::
