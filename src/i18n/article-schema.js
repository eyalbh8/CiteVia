const originals = new WeakMap();
const textProperties = new Set(['name', 'headline', 'description', 'text', 'articleSection']);

// Only opted-in article graphs are changed. URLs, dates and organization IDs stay stable.
export function translateSchemaValue(value, language, translate, wordCount, key = '') {
  if (key === 'inLanguage') return language;
  if (key === 'wordCount') return wordCount;
  if (typeof value === 'string') return textProperties.has(key) ? translate(value) : value;
  if (Array.isArray(value))
    return value.map((item) => translateSchemaValue(item, language, translate, wordCount));
  if (value && typeof value === 'object')
    return Object.fromEntries(
      Object.entries(value).map(([property, item]) => [
        property,
        translateSchemaValue(item, language, translate, wordCount, property),
      ]),
    );
  return value;
}

export function localizeArticleSchema(language, translate) {
  if (!document.querySelector('script[data-localize-article]')) return;
  const wordCount = [...document.querySelectorAll('[data-article-words]')]
    .map((element) => element.textContent)
    .join(' ')
    .trim()
    .split(/\s+/).length;
  const minutes = document.querySelector('[data-article-minutes]')?.firstChild;
  const readingTime = String(Math.max(1, Math.ceil(wordCount / 220)));
  if (minutes && minutes.nodeValue !== readingTime) minutes.nodeValue = readingTime;
  document.querySelectorAll('script[data-localize-article]').forEach((script) => {
    if (!originals.has(script)) originals.set(script, JSON.parse(script.textContent));
    const localized = translateSchemaValue(originals.get(script), language, translate, wordCount);
    const text = JSON.stringify(localized).replace(/</g, '\\u003c');
    if (script.textContent !== text) script.textContent = text;
  });
}
