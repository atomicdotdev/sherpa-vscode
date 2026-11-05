---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::32
kind: chore
priority: medium
project: CATA
seq: 32
status: needs-review
title: Make Atomic Sherpa 1.0.0 production ready
uid: 01M6PC7K2SDM98K150VEA727WJ
view: dev
entry_type: intent
content_hash: EYEI2YOCKBJRBLHF2JJVR7NSMTREVNINVDENKLCWVHDFYXYSTXEQ
created_at: 2026-11-05T17:31:32.785585+00:00
updated_at: 2026-11-05T17:31:32.785585+00:00
---
:::why
Atomic Sherpa 1.0.0 is the first public release. It must build from a clean checkout without a sibling nodeatomic repository, ship no known production dependency vulnerabilities, expose complete release metadata, and verify typecheck, tests, build, universal VSIX packaging, and audit in CI on macOS, Linux, and Windows.
:::

:::acceptance-criterion{#01M6PC7K2SDM98K150VEA727WJ-ac-1 status=met verifiedBy="npm ci; npm run ci:verify; npm audit --omit=dev; Bun-built Node PDF smoke; installed VSIX manifest check" evidence="npm ci passed; typecheck, 213 tests, build, universal 1.0.0 VSIX packaging and archive verification passed; production audit reports 0 vulnerabilities; Puppeteer 25 PDF export produced /tmp/sherpa-1.0.0-export.pdf; installed VSIX is 1.0.0 with sherpaIntent/sherpaAtomic namespaces."}
The repository installs and builds from a clean checkout using the vendored nodeatomic consumer; the production dependency audit reports zero vulnerabilities; package.json declares version 1.0.0, no private flag, repository/homepage/bugs metadata, and the atomicdotdev publisher.
:::

:::acceptance-criterion{#01M6PC7K2SDM98K150VEA727WJ-ac-2 status=met verifiedBy="npm ci; npm run ci:verify; npm audit --omit=dev; Bun-built Node PDF smoke; installed VSIX manifest check" evidence="npm ci passed; typecheck, 213 tests, build, universal 1.0.0 VSIX packaging and archive verification passed; production audit reports 0 vulnerabilities; Puppeteer 25 PDF export produced /tmp/sherpa-1.0.0-export.pdf; installed VSIX is 1.0.0 with sherpaIntent/sherpaAtomic namespaces."}
The CI workflow runs typecheck, tests, build, universal VSIX packaging, archive verification, and production audit on macOS, Linux, and Windows; the generated 1.0.0 VSIX contains no stale Puppeteer runtime, native payload, vendor directory, or pinned platform target.
:::

:::acceptance-criterion{#01M6PC7K2SDM98K150VEA727WJ-ac-3 status=met verifiedBy="npm ci; npm run ci:verify; npm audit --omit=dev; Bun-built Node PDF smoke; installed VSIX manifest check" evidence="npm ci passed; typecheck, 213 tests, build, universal 1.0.0 VSIX packaging and archive verification passed; production audit reports 0 vulnerabilities; Puppeteer 25 PDF export produced /tmp/sherpa-1.0.0-export.pdf; installed VSIX is 1.0.0 with sherpaIntent/sherpaAtomic namespaces."}
PDF export still works through the Puppeteer 25 ESM runtime, and the installed VSIX exposes the Sherpa command/setting/editor namespaces.
:::

:::task{#01M6PC7K2SDM98K150VEA727WJ-1 status=done criteria=01M6PC7K2SDM98K150VEA727WJ-ac-1}
Upgrade and audit production dependencies, remove unused gRPC packages, and adapt the PDF runtime to Puppeteer 25 ESM.
::file-ref{path=package.json}
::file-ref{path=package-lock.json}
::file-ref{path=src/export/puppeteerRuntime.mts}
::file-ref{path=src/export/pdfRenderer.ts}
::file-ref{path=src/extension.ts}
:::

:::task{#01M6PC7K2SDM98K150VEA727WJ-2 status=done criteria=01M6PC7K2SDM98K150VEA727WJ-ac-1}
Vendor nodeatomic so a clean checkout can install and build without a sibling repository.
::file-ref{path=vendor/nodeatomic}
::file-ref{path=.gitignore}
::file-ref{path=.vscodeignore}
::file-ref{path=scripts/build-nodeatomic.mjs}
:::

:::task{#01M6PC7K2SDM98K150VEA727WJ-3 status=done criteria=01M6PC7K2SDM98K150VEA727WJ-ac-2}
Add cross-platform build scripts and CI for typecheck, tests, build, packaging, and audit.
::file-ref{path=scripts/build-webview.mjs}
::file-ref{path=scripts/build-graph.mjs}
::file-ref{path=scripts/clean-dist.mjs}
::file-ref{path=.github/workflows/ci.yml}
:::

:::task{#01M6PC7K2SDM98K150VEA727WJ-4 status=done criteria=01M6PC7K2SDM98K150VEA727WJ-ac-2}
Finalize 1.0.0 metadata, changelog, README, and security policy.
::file-ref{path=package.json}
::file-ref{path=CHANGELOG.md}
::file-ref{path=README.md}
::file-ref{path=SECURITY.md}
::file-ref{path=THIRD_PARTY_NOTICES.md}
:::

:::scope-in
Production release hardening, reproducible clean builds, CI, dependency security, release metadata, and cross-platform packaging.
:::

:::scope-out
No new editor features, no direct atomicd RPC dependency, and no Marketplace publication from CI.
:::

:::constraint
Keep the extension a universal JavaScript-only VSIX; do not bundle native Atomic libraries or require a sibling checkout.
:::
