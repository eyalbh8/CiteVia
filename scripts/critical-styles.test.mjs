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
