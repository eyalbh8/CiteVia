import esUi from './es-ui.js';
import esHome from './es-home.js';
import esMarketing from './es-marketing.js';
import esRoutes from './es-routes.js';
import esRouteData from './es-route-data.js';
import trUi from './tr-ui.js';
import trHome from './tr-home.js';
import trMarketing from './tr-marketing.js';
import trRoutes from './tr-routes.js';
import trRouteData from './tr-route-data.js';
import { esSupplement, trSupplement } from './content-supplement.js';
import { aiCrawlerTranslations, aiCrawlerFragments } from '../content/ai-crawler-policy.js';
import {
  multilingualSeoTranslations,
  multilingualSeoFragments,
} from '../content/multilingual-seo.js';
import { localizeArticleSchema } from './article-schema.js';
import { faqSchemaTranslations, faqSchemaFragments } from '../content/faq-schema-ai-search.js';

const translationsByLanguage = {
  es: {
    ...esRouteData,
    ...esRoutes,
    ...esMarketing,
    ...esHome,
    ...esUi,
    ...esSupplement,
    ...aiCrawlerTranslations.es,
    ...multilingualSeoTranslations.es,
    ...faqSchemaTranslations.es,
  },
  tr: {
    ...trRouteData,
    ...trRoutes,
    ...trMarketing,
    ...trHome,
    ...trUi,
    ...trSupplement,
    ...aiCrawlerTranslations.tr,
    ...multilingualSeoTranslations.tr,
    ...faqSchemaTranslations.tr,
  },
};
const articleFragments = {
  es: { ...aiCrawlerFragments.es, ...multilingualSeoFragments.es, ...faqSchemaFragments.es },
  tr: { ...aiCrawlerFragments.tr, ...multilingualSeoFragments.tr, ...faqSchemaFragments.tr },
};
const normalizedTranslationsByLanguage = Object.fromEntries(
  Object.entries(translationsByLanguage).map(([language, translations]) => [
    language,
    new Map(
      Object.entries(translations).map(([english, translated]) => [
        normalize(english).toLowerCase(),
        translated,
      ]),
    ),
  ]),
);
const originalText = new WeakMap();
const originalAttributes = new WeakMap();
const originalDates = new WeakMap();
let titleState = { english: '', translated: {} };
export const translatedAttributeNames = [
  'alt',
  'aria-label',
  'aria-description',
  'placeholder',
  'title',
  'data-tooltip',
  'content',
];
export const excludedTextParents = 'script,style,code,pre,textarea,input,svg,[translate="no"]';
const humanReadableMetadata = new Set([
  'description',
  'application-name',
  'og:title',
  'og:description',
  'og:image:alt',
  'twitter:title',
  'twitter:description',
  'twitter:image:alt',
]);

function normalize(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const placeholderTranslationsByLanguage = Object.fromEntries(
  Object.entries(translationsByLanguage).map(([language, translations]) => [
    language,
    Object.entries(translations)
      .filter(([english]) => english.includes('{'))
      .map(([english, translated]) => {
        const placeholders = [...english.matchAll(/\{[^}]+\}/g)];
        let pattern = '';
        let offset = 0;
        for (const match of placeholders) {
          pattern += escapeRegExp(english.slice(offset, match.index)) + '(.*?)';
          offset = match.index + match[0].length;
        }
        pattern += escapeRegExp(english.slice(offset));
        return { translated, regex: new RegExp(`^${pattern}$`) };
      }),
  ]),
);

function getTranslation(value, language) {
  const translations = translationsByLanguage[language];
  const normalizedTranslations = normalizedTranslationsByLanguage[language];
  if (!translations || !normalizedTranslations) return undefined;
  const normalized = normalize(value);
  if (translations[normalized]) return translations[normalized];
  const folded = normalized.toLowerCase();
  if (normalizedTranslations.has(folded)) return normalizedTranslations.get(folded);
  for (const { regex, translated } of placeholderTranslationsByLanguage[language]) {
    const values = normalized.match(regex);
    if (!values) continue;
    let index = 1;
    return translated.replace(
      /\{[^}]+\}/g,
      () => getTranslation(values[index++], language) || values[index - 1],
    );
  }
  return undefined;
}

export function updateTextNode(node, language) {
  if (node.parentElement?.closest(excludedTextParents)) return;
  const previous = originalText.get(node);
  const current = node.nodeValue || '';
  const wasKnownTranslation = previous && Object.values(previous.translated).includes(current);
  const english =
    previous && (current === previous.english || wasKnownTranslation) ? previous.english : current;
  const exact = language === 'en' ? undefined : articleFragments[language]?.[english];
  const translated = language === 'en' ? undefined : (exact ?? getTranslation(english, language));
  if (translated) {
    const rendered = exact !== undefined ? exact : preserveSpace(english, translated);
    originalText.set(node, {
      english,
      translated: { ...(previous?.translated || {}), [language]: rendered },
    });
    if (current !== rendered) node.nodeValue = rendered;
  } else if (previous) {
    originalText.set(node, { english, translated: previous.translated });
    if (wasKnownTranslation) node.nodeValue = english;
  }
}

function preserveSpace(current, replacement) {
  const sourceLeading = current.match(/^\s*/)?.[0] || '';
  const sourceTrailing = current.match(/\s*$/)?.[0] || '';
  const leading = replacement.match(/^\s*/)?.[0] || sourceLeading;
  const trailing = replacement.match(/\s*$/)?.[0] || sourceTrailing;
  return `${leading}${replacement.trim()}${trailing}`;
}

export function updateElement(element, language) {
  if (!(element instanceof Element)) return;
  const tagName = element.tagName.toLowerCase();

  if (tagName === 'time' && element.getAttribute('datetime')) {
    const previousDate = originalDates.get(element);
    const currentText = element.textContent || '';
    const wasLocalized =
      previousDate && Object.values(previousDate.localized).includes(currentText);
    const english =
      previousDate && (currentText === previousDate.english || wasLocalized)
        ? previousDate.english
        : currentText;
    if (language !== 'en') {
      const date = new Date(element.getAttribute('datetime'));
      if (!Number.isNaN(date.getTime())) {
        const localized = new Intl.DateTimeFormat(language === 'es' ? 'es' : 'tr', {
          dateStyle: 'long',
          timeZone: 'UTC',
        }).format(date);
        originalDates.set(element, {
          english,
          localized: { ...(previousDate?.localized || {}), [language]: localized },
        });
        if (currentText !== localized && element.firstChild?.nodeType === Node.TEXT_NODE)
          element.firstChild.nodeValue = localized;
      }
    } else if (wasLocalized) {
      originalDates.set(element, { ...previousDate, english });
      if (element.firstChild?.nodeType === Node.TEXT_NODE) element.firstChild.nodeValue = english;
    }
  }

  for (const name of translatedAttributeNames) {
    // Protocol values (article, summary_large_image, URLs, dates, robots) are not prose.
    if (
      name === 'content' &&
      tagName === 'meta' &&
      !humanReadableMetadata.has(element.getAttribute('property') || element.getAttribute('name'))
    )
      continue;
    const value = element.getAttribute(name);
    if (!value) continue;
    let perElement = originalAttributes.get(element);
    if (!perElement) {
      perElement = new Map();
      originalAttributes.set(element, perElement);
    }
    let entry = perElement.get(name);
    const knownTranslations = entry ? Object.values(entry.translated) : [];
    const wasTranslated = knownTranslations.includes(value);
    if (!entry || (value !== entry.english && !wasTranslated)) {
      entry = { english: value, translated: {} };
      perElement.set(name, entry);
    }
    const translated = language === 'en' ? undefined : getTranslation(entry.english, language);
    if (translated) {
      entry.translated[language] = translated;
      if (value !== translated) element.setAttribute(name, translated);
    } else if (wasTranslated && value !== entry.english) {
      element.setAttribute(name, entry.english);
    }
  }

  if (tagName === 'input' || tagName === 'textarea') return;

  if (tagName === 'option' && element.textContent) {
    element.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) updateTextNode(node, language);
    });
  }
}

export function translatePage(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return node.parentElement?.closest(excludedTextParents)
        ? NodeFilter.FILTER_REJECT
        : NodeFilter.FILTER_ACCEPT;
    },
  });
  let node;
  while ((node = walker.nextNode())) updateTextNode(node, language);
  document.body.querySelectorAll('*').forEach((element) => updateElement(element, language));
  translateMetadata(language);
  document.documentElement.lang = language;
  localizeArticleSchema(language, (text) => getTranslation(text, language) || text);
}

// Next.js may refresh head metadata after the first language effect during hydration.
export function translateMetadata(language) {
  document.head
    .querySelectorAll('meta[content]')
    .forEach((element) => updateElement(element, language));
  const currentTitle = document.title;
  const wasLocalizedTitle = Object.values(titleState.translated).includes(currentTitle);
  const englishTitle =
    currentTitle === titleState.english || wasLocalizedTitle ? titleState.english : currentTitle;
  if (language !== 'en') {
    const titleParts = englishTitle.split(' | ');
    const localizedTitle = titleParts
      .map((part) => getTranslation(part, language) || part)
      .join(' | ');
    titleState = {
      english: englishTitle,
      translated: { ...titleState.translated, [language]: localizedTitle },
    };
    if (document.title !== localizedTitle) document.title = localizedTitle;
  } else {
    titleState = { english: englishTitle, translated: titleState.translated };
    if (document.title !== englishTitle) document.title = englishTitle;
  }
  if (document.querySelector('script[data-localize-article]')) {
    const locale = document.querySelector('meta[property="og:locale"]');
    const value = { en: 'en_US', es: 'es_ES', tr: 'tr_TR' }[language] || 'en_US';
    if (locale && locale.getAttribute('content') !== value) locale.setAttribute('content', value);
  }
}

export function translateToSpanish(value) {
  return getTranslation(value, 'es') || value;
}

export function translateToTurkish(value) {
  return getTranslation(value, 'tr') || value;
}
