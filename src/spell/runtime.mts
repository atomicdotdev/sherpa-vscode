import {
  getDefaultSettings,
  mergeSettings,
  searchForConfig,
  spellCheckDocument
} from 'cspell-lib';

// Keep cspell and its configuration/dictionary packages as native modules: their
// module-relative resolution must use the installed extension, not build paths.
export async function checkDocument(
  document: Parameters<typeof spellCheckDocument>[0],
  generateSuggestions: boolean
): ReturnType<typeof spellCheckDocument> {
  const [defaults, localConfig] = await Promise.all([
    getDefaultSettings(),
    searchForConfig(document.uri)
  ]);
  const settings = localConfig ? mergeSettings(defaults, localConfig) : defaults;
  return spellCheckDocument(
    document,
    { generateSuggestions },
    generateSuggestions ? { ...settings, numSuggestions: 1, suggestionsTimeout: 750 } : settings
  );
}
