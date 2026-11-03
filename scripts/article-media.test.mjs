import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { runInThisContext } from 'node:vm';
import ts from 'typescript';
import { translateToSpanish, translateToTurkish } from '../src/i18n/translate.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const modules = new Map();

// Load the real TypeScript registries, including their relative and @/ imports.
function loadContent(filename) {
  if (modules.has(filename)) return modules.get(filename).exports;
  const module = { exports: {} };
  modules.set(filename, module);
  const require = createRequire(filename);
  const output = ts.transpileModule(readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true },
  }).outputText;
  const localRequire = (specifier) => {
    const target = specifier.startsWith('@/')
      ? path.join(root, 'src', specifier.slice(2))
      : path.resolve(path.dirname(filename), specifier);
    if (existsSync(`${target}.ts`)) return loadContent(`${target}.ts`);
    return require(specifier.startsWith('@/') ? target : specifier);
  };
  runInThisContext(`(function(require, module, exports) {\n${output}\n})`, { filename })(
    localRequire,
    module,
    module.exports,
  );
  return module.exports;
}

const { articles } = loadContent(path.join(root, 'src/content/articles.ts'));
const { articleMedia } = loadContent(path.join(root, 'src/content/article-media.ts'));
const images = JSON.parse(readFileSync(path.join(root, 'src/content/article-images.json'), 'utf8'));

test('every published article has its own explicit image; missing images cannot fall back', () => {
  assert.deepEqual(Object.keys(images).sort(), articles.map(({ slug }) => slug).sort());
  for (const { slug } of articles) assert.deepEqual(articleMedia(slug), images[slug]);
  assert.throws(() => articleMedia('article-without-an-image'), /Missing unique Unsplash image/);
});

test('every cover uses a distinct Unsplash photo and underlying image URL', () => {
  const seen = { id: new Set(), url: new Set(), src: new Set() };
  for (const [slug, image] of Object.entries(images)) {
    const source = new URL(image.sourceUrl);
    const original = new URL(image.imageUrl);
    assert.match(image.unsplashId, /^[\w-]{11}$/, slug);
    assert.equal(source.origin, 'https://unsplash.com', slug);
    assert(source.pathname.endsWith(`-${image.unsplashId}`), `${slug}: source must identify photo`);
    assert.equal(original.origin, 'https://images.unsplash.com', slug);
    assert.match(original.pathname, /^\/photo-[\w-]+$/, slug);
    assert.equal(image.license, 'https://unsplash.com/license', slug);
    assert(image.photographer.trim().length > 1, `${slug}: photographer missing`);
    assert.match(image.sourceCheckedAt, /^\d{4}-\d{2}-\d{2}$/, slug);
    const cover = new URL(image.src);
    assert.equal(cover.origin + cover.pathname, original.origin + original.pathname, slug);
    assert.equal(cover.searchParams.get('w'), '1600', `${slug}: bounded source image size`);
    assert.equal(cover.searchParams.get('fm'), 'jpg', slug);
    const values = {
      id: image.unsplashId,
      url: original.origin + original.pathname,
      src: image.src,
    };
    for (const [key, value] of Object.entries(values)) {
      assert(!seen[key].has(value), `${slug}: duplicate image ${key}: ${value}`);
      seen[key].add(value);
    }
  }
});

test('descriptive image alternatives are available in every supported language', () => {
  for (const [slug, image] of Object.entries(images)) {
    assert(image.alt.trim().length >= 15, `${slug}: descriptive English alternative required`);
    for (const [language, translate] of [
      ['es', translateToSpanish],
      ['tr', translateToTurkish],
    ]) {
      assert(image.altTranslations[language]?.trim().length >= 15, `${slug}: ${language} missing`);
      assert.notEqual(
        image.altTranslations[language],
        image.alt,
        `${slug}: ${language} untranslated`,
      );
      assert.equal(translate(image.alt), image.altTranslations[language], `${slug}: ${language}`);
    }
  }
});
