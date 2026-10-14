import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';

// Check the HTML a crawler receives, without running client JavaScript.
// Without BASE_URL, start and stop a local production server automatically.
const base = new URL(process.env.BASE_URL || 'http://127.0.0.1:3100');
const canonicalOrigin = new URL(process.env.SITE_URL || 'https://citevia.io').origin;
const indexable = process.env.SITE_INDEXABLE === 'true' && process.env.VERCEL_ENV !== 'preview';
const legal = new Set(['/privacy', '/terms']);
const child = process.env.BASE_URL
  ? null
  : spawn(
      process.execPath,
      ['node_modules/next/dist/bin/next', 'start', '--hostname', '127.0.0.1', '--port', '3100'],
      { stdio: ['ignore', 'pipe', 'pipe'] },
    );
let serverOutput = '';
child?.stdout.on('data', (value) => {
  serverOutput += value;
});
child?.stderr.on('data', (value) => {
  serverOutput += value;
});

function decode(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}
function tags(html, name) {
  return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'g'))].map(([tag]) =>
    Object.fromEntries(
      [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, decode(value)]),
    ),
  );
}
async function request(path, options) {
  return fetch(new URL(path, base), {
    signal: AbortSignal.timeout(15000),
    redirect: 'manual',
    ...options,
  });
}

try {
  if (child) {
    let ready = false;
    for (let attempt = 0; attempt < 40; attempt++) {
      try {
        if ((await request('/')).ok) {
          ready = true;
          break;
        }
      } catch {
        /* Wait for server readiness. */
      }
      if (child.exitCode !== null) throw new Error(`Production server exited:\n${serverOutput}`);
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
    assert(ready, `Production server did not start:\n${serverOutput}`);
  }
  const queue = ['/'];
  const pages = new Map();
  const titles = new Set();
  const descriptions = new Set();
  const fragmentLinks = [];
  for (const path of queue) {
    if (pages.has(path)) continue;
    const response = await request(path);
    assert.equal(response.status, 200, `${path}: page must return HTTP 200`);
    assert(response.headers.get('content-type')?.includes('text/html'), `${path}: expected HTML`);
    const html = await response.text();
    pages.set(path, html);
    const title = decode(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] || '');
    assert(title.includes('Citevia'), `${path}: title must include the brand`);
    assert(!titles.has(title), `${path}: duplicate title`);
    titles.add(title);
    const meta = tags(html, 'meta');
    const description = meta.find((tag) => tag.name === 'description')?.content;
    assert(description?.length > 40, `${path}: missing descriptive metadata`);
    assert(!descriptions.has(description), `${path}: duplicate description`);
    descriptions.add(description);
    const canonicals = tags(html, 'link').filter((tag) => tag.rel === 'canonical');
    assert.equal(canonicals.length, 1, `${path}: expected one canonical`);
    assert.equal(
      new URL(canonicals[0].href).href,
      new URL(path, canonicalOrigin).href,
      `${path}: wrong canonical`,
    );
    assert.equal(
      [...html.matchAll(/<h1\b/g)].length,
      1,
      `${path}: expected one server-rendered H1`,
    );
    assert.match(html, /<html[^>]*lang="en"/, `${path}: missing language`);
    assert.match(
      html,
      /<html[^>]*data-theme="light"/,
      `${path}: white mode must render by default`,
    );
    assert.match(html, /<main\b/, `${path}: missing main landmark`);
    assert(!/Zyqon|Ledgerly|Marta Keller/.test(html), `${path}: legacy placeholder content found`);
    for (const img of tags(html, 'img'))
      assert('alt' in img, `${path}: image missing alt attribute`);
    const robots = meta.find((tag) => tag.name === 'robots')?.content || '';
    assert.equal(
      robots.includes('noindex'),
      !indexable || legal.has(path),
      `${path}: wrong indexing policy`,
    );
    assert(
      meta.some((tag) => tag.property === 'og:title'),
      `${path}: missing Open Graph title`,
    );
    assert(
      meta.some((tag) => tag.property === 'og:image'),
      `${path}: missing share image`,
    );
    const schemas = [
      ...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g),
    ].map(([, value]) => JSON.parse(value));
    assert(schemas.length, `${path}: missing JSON-LD`);
    const nodes = schemas.flatMap((schema) => schema['@graph'] || [schema]);
    assert(
      nodes.some((node) => node['@type'] === 'Organization'),
      `${path}: missing organization`,
    );
    if (path !== '/')
      assert(
        nodes.some((node) => node['@type'] === 'BreadcrumbList'),
        `${path}: missing breadcrumbs`,
      );
    if (path.startsWith('/services/'))
      assert(
        nodes.some((node) => node['@type'] === 'Service'),
        `${path}: missing service schema`,
      );
    if (path.startsWith('/blog/'))
      assert(
        nodes.some(
          (node) =>
            ['Article', 'BlogPosting'].includes(node['@type']) &&
            node.datePublished &&
            node.dateModified &&
            node.author,
        ),
        `${path}: incomplete article schema`,
      );
    for (const link of tags(html, 'a')) {
      if (!link.href) continue;
      const url = new URL(link.href, new URL(path, base));
      if (url.origin !== base.origin || /\.[a-z0-9]+$/i.test(url.pathname)) continue;
      if (!queue.includes(url.pathname)) queue.push(url.pathname);
      if (url.hash)
        fragmentLinks.push({
          from: path,
          path: url.pathname,
          id: decodeURIComponent(url.hash.slice(1)),
        });
    }
  }
  for (const link of fragmentLinks)
    assert(
      pages.get(link.path)?.includes(`id="${link.id}"`),
      `${link.from}: broken fragment ${link.path}#${link.id}`,
    );
  assert(pages.size >= 19, `Expected all 19 initial pages to be reachable, found ${pages.size}`);
  const robots = await (await request('/robots.txt')).text();
  const sitemap = await (await request('/sitemap.xml')).text();
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, value]) => decode(value));
  if (indexable) {
    assert(
      robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`),
      'Missing sitemap declaration',
    );
    assert(!/^Disallow: \/$/m.test(robots), 'Production crawling is blocked');
    const expected = [...pages.keys()]
      .filter((path) => !legal.has(path))
      .map((path) => `${canonicalOrigin}${path}`)
      .sort();
    assert.deepEqual(urls.sort(), expected, 'Sitemap must cover every indexable page exactly once');
  } else {
    assert.match(robots, /^Disallow: \/$/m, 'Preview crawling must be disabled');
    assert.equal(urls.length, 0, 'Preview sitemap must be empty');
  }
  for (const path of ['/index.html', '/index-light.html', '/light']) {
    const response = await request(path);
    assert.equal(response.status, 308, `${path}: missing permanent redirect`);
    assert.equal(new URL(response.headers.get('location'), base).pathname, '/');
  }
  for (const path of ['/does-not-exist', '/services/does-not-exist', '/blog/does-not-exist']) {
    assert.equal((await request(path)).status, 404, `${path}: unknown routes must return 404`);
  }
  for (const path of ['/opengraph-image', '/icon', '/apple-icon']) {
    const response = await request(path);
    assert.equal(response.status, 200, `${path}: generated image failed`);
    assert(response.headers.get('content-type')?.startsWith('image/png'));
  }
  console.log(
    `Passed: ${pages.size} pages, unique metadata, HTML content, schemas, links, ${urls.length} sitemap URLs, robots, redirects, 404s, and social images. Indexing ${indexable ? 'enabled' : 'disabled'}.`,
  );
} finally {
  child?.kill('SIGTERM');
}
