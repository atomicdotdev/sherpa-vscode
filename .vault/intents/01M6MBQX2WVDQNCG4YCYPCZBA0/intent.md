---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::29
kind: chore
priority: medium
project: CATA
seq: 29
status: needs-review
title: Remove inherited Git editor integration
uid: 01M6MBQX2WVDQNCG4YCYPCZBA0
view: dev
entry_type: intent
content_hash: X77RFDVFLLO2ZSHZSKIPK5SO2XSSSI4FFD7GCF6C3CZ2NEUKHWFA
created_at: 2026-11-04T22:44:31.576219+00:00
updated_at: 2026-11-04T22:44:31.576219+00:00
---
:::why
Product direction: Atomic Sherpa should add no Git-related behavior. The inherited MEO Git gutter, line highlights, blame hover, baseline reads, `git` CLI subprocesses, and VS Code Git API watcher are being removed. Atomic history, views, diffs, and blast radius continue through nodeatomic and are unaffected.
:::

:::acceptance-criterion{#01M6MBQX2WVDQNCG4YCYPCZBA0-ac-1 status=met verifiedBy="npm run typecheck; npm test; npm run build; npm run test:atomic:graph; npm run package:vsix" evidence="typecheck, 208 tests, build, graph host/browser smoke, and VSIX packaging pass. Git modules, CLI, settings, helpers, CSS, and tests were removed."}
Production code contains no Git subprocess, Git baseline/blame modules, Git API watcher, Git settings, or Git webview helpers; the extension only uses Atomic/nodeatomic for repository behavior.
:::

:::acceptance-criterion{#01M6MBQX2WVDQNCG4YCYPCZBA0-ac-2 status=met verifiedBy="npm run typecheck; npm test; npm run build; npm run test:atomic:graph; npm run package:vsix" evidence="typecheck, 208 tests, build, graph host/browser smoke, and VSIX packaging pass. Git modules, CLI, settings, helpers, CSS, and tests were removed."}
Typecheck, the full test suite, build, graph smoke, and VSIX packaging pass after the removal, and Atomic history/diff UI still works.
:::

:::task{#01M6MBQX2WVDQNCG4YCYPCZBA0-1 status=done criteria=01M6MBQX2WVDQNCG4YCYPCZBA0-ac-1}
Delete the Git integration modules and webview helpers, including `src/git/**`, `src/shared/gitDiffCore.ts`, and the five `webview/src/helpers/git*.ts` files.
::file-ref{path=src/git/}
::file-ref{path=src/shared/gitDiffCore.ts}
::file-ref{path=webview/src/helpers/gitDiffGutter.ts}
::file-ref{path=webview/src/helpers/gitBlameHover.ts}
:::

:::task{#01M6MBQX2WVDQNCG4YCYPCZBA0-2 status=done criteria=01M6MBQX2WVDQNCG4YCYPCZBA0-ac-1}
Remove Git wiring from the panel session, extension activation, webview editor/index, configuration, manifest, CSS, docs, and Git-specific tests.
::file-ref{path=src/extension/panelSession.ts}
::file-ref{path=src/extension.ts}
::file-ref{path=webview/src/editor.ts}
::file-ref{path=webview/src/index.ts}
::file-ref{path=package.json}
:::

:::task{#01M6MBQX2WVDQNCG4YCYPCZBA0-3 status=done criteria=01M6MBQX2WVDQNCG4YCYPCZBA0-ac-2}
Update Atomic intent bookkeeping: supersede the Git hardening/gutter intents and record the product decision.
::file-ref{path=.vault/intents/01M6MBQX2WVDQNCG4YCYPCZBA0/intent.md}
:::

:::scope-in
Removing inherited Git-specific editor behavior and its configuration.
:::

:::scope-out
No change to Atomic history, views, diffs, blast radius, or nodeatomic integration.
:::

:::constraint
Do not replace the removed Git features with another Git integration. Atomic repository behavior stays in nodeatomic.
:::
