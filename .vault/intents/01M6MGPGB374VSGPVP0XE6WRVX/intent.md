---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::31
kind: chore
priority: medium
project: CATA
seq: 31
status: needs-review
title: Rename command and setting namespaces to Sherpa
uid: 01M6MGPGB374VSGPVP0XE6WRVX
view: dev
entry_type: intent
content_hash: UTHCZ5O6K2IM4EC2NSX3ADENQQWSLZ3ZO5ZGABMSVA5BRUF7ZMVA
created_at: 2026-11-05T00:10:59.961089+00:00
updated_at: 2026-11-05T00:10:59.961089+00:00
---
:::why
Atomic Sherpa is being prepared for a public release and has no installed users to preserve. Command, setting, custom-editor, SCM view, and context-key identifiers must use the Sherpa namespace instead of the inherited Catalyst names.
:::

:::acceptance-criterion{#01M6MGPGB374VSGPVP0XE6WRVX-ac-1 status=met verifiedBy="npm run typecheck; npm test; npm run build; npm run package:vsix" evidence="typecheck passed; npm test 213 pass, 0 fail; build and VSIX packaging pass. Packaged manifest exposes sherpaIntent.* and sherpaAtomic.* only."}
Production manifests and source contain no `catalystIntent`/`catalystAtomic` identifiers; commands, settings, custom editors, context keys, webview panel IDs, tests, and docs use `sherpaIntent`/`sherpaAtomic`.
:::

:::acceptance-criterion{#01M6MGPGB374VSGPVP0XE6WRVX-ac-2 status=met verifiedBy="npm run typecheck; npm test; npm run build; npm run package:vsix" evidence="typecheck passed; npm test 213 pass, 0 fail; build and VSIX packaging pass. Packaged manifest exposes sherpaIntent.* and sherpaAtomic.* only."}
Typecheck, the full test suite, build, graph smoke, and VSIX packaging pass after the rename, and the packaged manifest exposes only Sherpa identifiers.
:::

:::task{#01M6MGPGB374VSGPVP0XE6WRVX-1 status=done criteria=01M6MGPGB374VSGPVP0XE6WRVX-ac-1}
Rename namespaces across the manifest, extension activation, SCM commands/view, graph panels, settings, keymaps, diagnostics, tests, and docs.
::file-ref{path=package.json}
::file-ref{path=src/extension.ts}
::file-ref{path=src/atomic/sourceControl.ts}
::file-ref{path=src/shared/extensionConfig.ts}
:::

:::task{#01M6MGPGB374VSGPVP0XE6WRVX-2 status=done criteria=01M6MGPGB374VSGPVP0XE6WRVX-ac-2}
Rename the example fixture and remaining product references, update the changelog, and verify the packaged manifest.
::file-ref{path=examples/sherpa.intent.md}
::file-ref{path=README.md}
::file-ref{path=CHANGELOG.md}
::file-ref{path=scripts/atomicIntent.test.mjs}
:::

:::scope-in
Public identifier namespace and visible branding for the first release.
:::

:::scope-out
No compatibility aliases for Catalyst identifiers; there are no existing users to migrate.
:::

:::constraint
Use the sherpaIntent/sherpaAtomic namespaces consistently across manifest, code, tests, and docs.
:::
