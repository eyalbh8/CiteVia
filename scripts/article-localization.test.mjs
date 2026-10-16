import test from 'node:test';
import assert from 'node:assert/strict';
import { aiCrawlerPolicy, aiCrawlerTranslations } from '../src/content/ai-crawler-policy.js';
import { createArticleCopy } from '../src/i18n/article-copy.js';
import { translateSchemaValue } from '../src/i18n/article-schema.js';
import {
  translateToSpanish,
  translateToTurkish,
  updateTextNode,
  translateMetadata,
} from '../src/i18n/translate.js';

test('article copy registers complete paragraphs, link anchors and surrounding nodes', () => {
  const { copy, translations } = createArticleCopy();
  copy(
    'Read [this guide](/guide) today.',
    'Lee [esta guía](/guide) hoy.',
    'Oku: [bu rehber](/guide) bugün.',
  );
  assert.equal(translations.es.Read, 'Lee');
  assert.equal(translations.tr['this guide'], 'bu rehber');
  assert.equal(translations.es['today.'], 'hoy.');
  assert.throws(() => copy('[A](/a)', '[A](/b)', '[A](/a)'), /link changed/);
  assert.throws(() => copy('[A](/a)', 'A', '[A](/a)'), /preserve their order/);
});

test('new article strings survive language switching including Markdown fragments and FAQs', () => {
  for (const english of Object.keys(aiCrawlerTranslations.es)) {
    const node = { nodeValue: english };
    for (let cycle = 0; cycle < 2; cycle++) {
      for (const [language, translate] of [
        ['es', translateToSpanish],
        ['tr', translateToTurkish],
      ]) {
        assert.notEqual(translate(english), english, `${language}: ${english}`);
        updateTextNode(node, language);
        assert.equal(node.nodeValue.trim(), translate(english).trim());
        updateTextNode(node, language);
        assert.equal(node.nodeValue.trim(), translate(english).trim());
      }
      updateTextNode(node, 'en');
      assert.equal(node.nodeValue, english);
    }
  }
});

test('localized article schema uses the visible FAQ translations and preserves identifiers', () => {
  const source = {
    '@type': 'FAQPage',
    url: 'https://citevia.io/blog/ai-crawler-policy-training-search',
    inLanguage: 'en',
    headline: aiCrawlerPolicy.title,
    wordCount: 100,
    datePublished: aiCrawlerPolicy.published,
    mainEntity: aiCrawlerPolicy.faq.items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
  for (const [language, translate] of [
    ['es', translateToSpanish],
    ['tr', translateToTurkish],
  ]) {
    const schema = translateSchemaValue(source, language, translate, 200);
    assert.equal(schema.inLanguage, language);
    assert.equal(schema.wordCount, 200);
    assert.equal(schema.url, source.url);
    assert.equal(schema.datePublished, source.datePublished);
    schema.mainEntity.forEach((item, index) => {
      assert.equal(item.name, translate(aiCrawlerPolicy.faq.items[index].question));
      assert.equal(item.acceptedAnswer.text, translate(aiCrawlerPolicy.faq.items[index].answer));
    });
  }
  assert.equal(source.inLanguage, 'en');
  assert.equal(source.wordCount, 100);
});

test('translated text nodes reconstruct whole linked paragraphs with correct punctuation and spacing', () => {
  const split = (text) => text.split(/\[([^\]\n]+)\]\(([^\s)]+)\)/g);
  const plain = (text) =>
    split(text)
      .filter((_, index) => index % 3 !== 2)
      .join('');
  for (const [english, spanish] of Object.entries(aiCrawlerTranslations.es)) {
    if (!english.includes('](')) continue;
    for (const [language, expected] of [
      ['es', spanish],
      ['tr', aiCrawlerTranslations.tr[english]],
    ]) {
      const nodes = split(english)
        .filter((_, index) => index % 3 !== 2)
        .map((nodeValue) => ({ nodeValue }));
      for (const node of nodes) updateTextNode(node, language);
      assert.equal(
        nodes.map((node) => node.nodeValue).join(''),
        plain(expected),
        `${language}: ${english}`,
      );
      for (const node of nodes) updateTextNode(node, 'en');
      assert.equal(nodes.map((node) => node.nodeValue).join(''), plain(english));
    }
  }
});

test('head metadata recovers after hydration without repeated DOM writes', () => {
  const englishTitle = `${aiCrawlerPolicy.seoTitle} | Citevia`;
  let title = englishTitle;
  let writes = 0;
  globalThis.document = {
    head: { querySelectorAll: () => [] },
    querySelector: () => null,
    get title() {
      return title;
    },
    set title(value) {
      title = value;
      writes++;
    },
  };
  translateMetadata('tr');
  assert.equal(title, translateToTurkish(englishTitle));
  translateMetadata('tr');
  assert.equal(writes, 1);
  title = englishTitle; // A later Next.js head update restores the server title.
  translateMetadata('tr');
  assert.equal(title, translateToTurkish(englishTitle));
  assert.equal(writes, 2);
  translateMetadata('en');
  assert.equal(title, englishTitle);
  delete globalThis.document;
});
