// Register both complete strings and the text nodes ArticleText renders around links.
export function createArticleCopy() {
  const translations = { es: {}, tr: {} };
  const fragments = { es: {}, tr: {} };
  const parts = (value) => value.split(/\[([^\]\n]+)\]\(([^\s)]+)\)/g);
  function copy(en, es, tr) {
    const english = parts(en);
    for (const [language, value] of Object.entries({ es, tr })) {
      if (!value) throw new Error(`Missing ${language} article translation: ${en}`);
      translations[language][en] = value;
      const localized = parts(value);
      if (english.length !== localized.length)
        throw new Error(`Translated article links must preserve their order: ${en}`);
      english.forEach((part, index) => {
        if (index % 3 === 2) {
          if (part !== localized[index]) throw new Error(`Translated link changed: ${part}`);
        } else if (part.trim()) {
          translations[language][part.trim()] = localized[index].trim();
          if (english.length > 1) fragments[language][part] = localized[index];
        }
      });
    }
    return en;
  }
  return { copy, translations, fragments };
}
