---
author: bradley
created_by: bradley <bradley.hilton@atomic.dev>
goals: []
id: CATA::bradley::28
kind: bug
priority: low
project: CATA
seq: 28
status: backlog
title: Normalize keymap bindings from typed characters
uid: 01M6KXXHD2XGJWX0HBMWVWY3SD
view: dev
entry_type: intent
content_hash: HIO7ZQAMG7ARJDJYLIANIOPDVNZLXYV6X2OPXSNPQKMWCWV5KHGA
created_at: 2026-11-04T18:43:11.421780+00:00
updated_at: 2026-11-04T18:43:11.421780+00:00
---
:::why
`src/shared/keymapConfig.ts:255-286` derives the main key from `event.code`, while settings parsing and conflict detection use the configured character. `Shift-?` never matches `Shift-/`, and non-US layouts bind the physical key rather than the character. `normalizeKeymapKey` also cannot express `+` or `-` as main keys.
:::

:::acceptance-criterion{#01M6KXXHD2XGJWX0HBMWVWY3SD-ac-1 status=unmet}
Printable bindings match by typed character with `event.code` as a fallback; shifted punctuation and non-US layouts work as configured.
:::

:::acceptance-criterion{#01M6KXXHD2XGJWX0HBMWVWY3SD-ac-2 status=unmet}
`+` and `-` are bindable, and platform-equivalent `Mod-`/`Ctrl-` conflicts are detected before deduplication.
:::

:::task{#01M6KXXHD2XGJWX0HBMWVWY3SD-1 status=open criteria="01M6KXXHD2XGJWX0HBMWVWY3SD-ac-1,01M6KXXHD2XGJWX0HBMWVWY3SD-ac-2"}
Use `event.key` for printable keys, extend parsing, and normalize conflicts per platform.
::file-ref{path=src/shared/keymapConfig.ts}
::file-ref{path=webview/src/helpers/userKeymap.ts}
:::

:::task{#01M6KXXHD2XGJWX0HBMWVWY3SD-2 status=open criteria="01M6KXXHD2XGJWX0HBMWVWY3SD-ac-1,01M6KXXHD2XGJWX0HBMWVWY3SD-ac-2"}
Add layout and punctuation fixtures.
::file-ref{path=scripts/}
:::

:::scope-in
User keymap parsing and event normalization.
:::

:::scope-out
No change to the default keymap or Vim mode.
:::

:::constraint
Do not break existing `Ctrl`/`Mod` bindings on any platform.
:::
