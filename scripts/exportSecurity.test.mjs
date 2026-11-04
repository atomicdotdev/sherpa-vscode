import { describe, expect, test } from 'bun:test';
import { buildExportStyles } from '../src/export/exportStyles.ts';
import { buildExportHtmlDocument } from '../src/export/exportHtmlTemplate.ts';
import { headlessBrowserLaunchArgs } from '../src/export/pdfRenderer.ts';
import { defaultThemeSettings, resolveTheme, validateThemePayload } from '../src/shared/themeDefaults.ts';

const hostile = '</style><script>globalThis.__meo_pwned = true</script>';
const renderDocument = (stylesCss, extra = {}) => buildExportHtmlDocument({
  title: 'Export',
  bodyHtml: '<p>Body</p>',
  stylesCss,
  hasMermaid: false,
  hasMath: false,
  ...extra
});

describe('HTML/PDF export security boundaries', () => {
  test('theme fonts cannot terminate the style element', () => {
    const theme = resolveTheme({
      ...defaultThemeSettings,
      fonts: { ...defaultThemeSettings.fonts, liveFont: hostile, sourceFont: hostile }
    });
    expect(theme.fonts.liveFont).not.toContain('<');
    expect(theme.fonts.sourceFont).not.toContain('<');

    const css = buildExportStyles(theme, {});
    expect(css).not.toContain('<');
    expect(css).not.toContain('</style');

    const html = renderDocument(css);
    expect(html).not.toContain('</style><script');
  });

  test('hostile stylesheet text is escaped even if a caller bypasses the sanitizers', () => {
    const html = renderDocument(`body::after { content: "${hostile}"; }`);
    expect(html).not.toContain('</style><script');
    expect(html).toContain('\\3c /style');
  });

  test('CSS variable color fallbacks cannot carry markup', () => {
    const theme = resolveTheme({
      ...defaultThemeSettings,
      colors: { ...defaultThemeSettings.colors, base01: `var(--meo-fg, ${hostile})` }
    });
    expect(theme.colors.base01).not.toContain('<');
    expect(buildExportStyles(theme, {})).not.toContain('<');
  });

  test('normal font stacks and variable colors are preserved', () => {
    const theme = resolveTheme({
      ...defaultThemeSettings,
      fonts: { ...defaultThemeSettings.fonts, liveFont: '"Fira Code", Menlo, monospace' },
      colors: { ...defaultThemeSettings.colors, base01: 'var(--vscode-editor-foreground, #ffffff)' }
    });
    expect(theme.fonts.liveFont).toContain('Fira Code');
    expect(theme.fonts.liveFont).toContain('monospace');
    expect(theme.colors.base01).toBe('var(--vscode-editor-foreground, #ffffff)');
    expect(validateThemePayload({ ...defaultThemeSettings, fonts: { ...defaultThemeSettings.fonts, liveFont: 'Menlo, monospace' } }).success).toBe(true);
  });

  test('the exported document carries a nonce CSP shared by both scripts', () => {
    const html = renderDocument('body { color: #fff; }', {
      hasMermaid: true,
      mermaidRuntimeSrc: 'file:///tmp/mermaid.min.js'
    });
    expect(html).toContain('http-equiv="Content-Security-Policy"');
    const csp = html
      .match(/http-equiv="Content-Security-Policy" content="([^"]+)"/)[1]
      .replace(/&#39;/g, "'");
    expect(csp).toContain("default-src 'none'");
    expect(csp).toContain("connect-src 'none'");
    expect(csp).toContain("object-src 'none'");
    expect(csp).toContain("frame-src 'none'");
    expect(csp).not.toContain("script-src 'unsafe-inline'");

    const nonces = [...html.matchAll(/nonce="([0-9a-f]+)"/g)].map((match) => match[1]);
    expect(nonces.length).toBe(2);
    expect(new Set(nonces).size).toBe(1);
    expect(nonces[0]).toMatch(/^[0-9a-f]{32}$/);
    expect(html).toContain(`<script data-meo-export-mermaid-runtime nonce="${nonces[0]}"`);
  });

  test('headless export does not disable web security', () => {
    const args = headlessBrowserLaunchArgs();
    expect(args).toContain('--allow-file-access-from-files');
    expect(args).not.toContain('--disable-web-security');
  });
});
