import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCriticalCss, buildStyles } from './build-styles.mjs';
import { readFileSync } from 'node:fs';

test('critical CSS retains responsive navigation, shared resets and animation dependencies', () => {
  const css = extractCriticalCss(`
    .arielos-home :where(h1, p) { margin: 0 }
    @media (max-width: 899px) {
      .arielos-home .nav-menu, .arielos-home .chart { display: flex }
      .arielos-home .hero { animation: citevia-hero 1s }
      .arielos-home .chart { color: red }
    }
    @keyframes citevia-hero { to { opacity: 1 } }
    @keyframes citevia-chart { to { opacity: 0 } }
  `);
  assert.match(css, /:where\(h1, p\)/);
  assert.match(css, /@media \(max-width: 899px\)/);
  assert.match(css, /\.nav-menu/);
  assert.match(css, /@keyframes citevia-hero/);
  assert.doesNotMatch(css, /chart/);
});

test('generated styles use immutable assets and contain no network imports', () => {
  buildStyles();
  const module = readFileSync('src/generated/site-styles.ts', 'utf8');
  assert.match(module, /site\.[a-f0-9]{16}\.css/);
  assert.match(module, /\.nav-menu/);
  assert.match(module, /data:font\/woff2;base64,/);
  assert.doesNotMatch(module, /@import|https?:\/\//);
  assert.doesNotMatch(module, /\.platform-bars__row/);
});

test('embedded display font covers the homepage headline', () => {
  const subsets = JSON.parse(readFileSync('public/fonts/critical/subsets.json', 'utf8'));
  const headingFont = subsets.find((font) => font.family === 'Citevia Instrument');
  const codepoints = new Set(
    headingFont.unicodeRange.split(',').map((code) => parseInt(code.slice(2), 16)),
  );
  const homepage = readFileSync('src/components/arielos/Homepage.jsx', 'utf8');
  const heading = homepage
    .match(/<h1 className="hero__headline[^>]*>([\s\S]*?)<\/h1>/)[1]
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  for (const character of heading) {
    assert.ok(
      codepoints.has(character.codePointAt(0)),
      `Regenerate the heading subset for ${character}`,
    );
  }
});
