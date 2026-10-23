import test from 'node:test';
import {
  serviceAreaBusinessSeo,
  serviceAreaTranslations,
} from '../src/content/service-area-business-seo.js';
import assert from 'node:assert/strict';
import { aiCrawlerPolicy, aiCrawlerTranslations } from '../src/content/ai-crawler-policy.js';
import { multilingualSeo, multilingualSeoTranslations } from '../src/content/multilingual-seo.js';
import { faqSchemaAiSearch, faqSchemaTranslations } from '../src/content/faq-schema-ai-search.js';
import { createArticleCopy } from '../src/i18n/article-copy.js';
import { translateSchemaValue } from '../src/i18n/article-schema.js';
import {
  translateToSpanish,
  translateToTurkish,
  updateTextNode,
  updateElement,
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

for (const [article, articleTranslations] of [
  [serviceAreaBusinessSeo, serviceAreaTranslations],
  [aiCrawlerPolicy, aiCrawlerTranslations],
  [multilingualSeo, multilingualSeoTranslations],
  [faqSchemaAiSearch, faqSchemaTranslations],
]) {
  test(`${article.slug}: new article strings survive language switching including Markdown fragments and FAQs`, () => {
    for (const english of Object.keys(articleTranslations.es)) {
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

  test(`${article.slug}: localized schema matches FAQs and preserves identifiers`, () => {
    const source = {
      '@type': 'FAQPage',
      url: `https://citevia.io/blog/${article.slug}`,
      inLanguage: 'en',
      headline: article.title,
      wordCount: 100,
      datePublished: article.published,
      mainEntity: article.faq.items.map(({ question, answer }) => ({
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
        assert.equal(item.name, translate(article.faq.items[index].question));
        assert.equal(item.acceptedAnswer.text, translate(article.faq.items[index].answer));
      });
    }
    assert.equal(source.inLanguage, 'en');
    assert.equal(source.wordCount, 100);
  });

  test(`${article.slug}: linked text preserves punctuation and spacing`, () => {
    const split = (text) => text.split(/\[([^\]\n]+)\]\(([^\s)]+)\)/g);
    const plain = (text) =>
      split(text)
        .filter((_, index) => index % 3 !== 2)
        .join('');
    for (const [english, spanish] of Object.entries(articleTranslations.es)) {
      if (!english.includes('](')) continue;
      for (const [language, expected] of [
        ['es', spanish],
        ['tr', articleTranslations.tr[english]],
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

  test(`${article.slug}: head metadata recovers after hydration`, () => {
    const englishTitle = `${article.seoTitle} | Citevia`;
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
}

test('metadata translation changes prose while preserving protocol values', () => {
  const previousElement = globalThis.Element;
  class MetaElement {
    tagName = 'META';
    constructor(attributes) {
      this.attributes = new Map(Object.entries(attributes));
    }
    getAttribute(name) {
      return this.attributes.get(name) || null;
    }
    setAttribute(name, value) {
      this.attributes.set(name, value);
    }
  }
  globalThis.Element = MetaElement;
  try {
    const prose = new MetaElement({ name: 'description', content: faqSchemaAiSearch.description });
    const protocol = [
      new MetaElement({ property: 'og:type', content: 'article' }),
      new MetaElement({ name: 'twitter:card', content: 'summary_large_image' }),
      new MetaElement({ name: 'robots', content: 'index, follow' }),
      new MetaElement({
        property: 'og:url',
        content: 'https://citevia.io/blog/faq-schema-ai-search',
      }),
      new MetaElement({ property: 'article:published_time', content: '2026-10-21' }),
    ];
    const original = protocol.map((element) => element.getAttribute('content'));
    for (const language of ['es', 'tr', 'en', 'es', 'en']) {
      updateElement(prose, language);
      assert.equal(
        prose.getAttribute('content'),
        faqSchemaTranslations[language]?.[faqSchemaAiSearch.description] ||
          faqSchemaAiSearch.description,
      );
      protocol.forEach((element, index) => {
        updateElement(element, language);
        assert.equal(element.getAttribute('content'), original[index]);
      });
    }
  } finally {
    if (previousElement) globalThis.Element = previousElement;
    else delete globalThis.Element;
  }
});
