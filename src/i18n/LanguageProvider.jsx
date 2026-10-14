'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
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

const translationsByLanguage = {
  es: { ...esRouteData, ...esRoutes, ...esMarketing, ...esHome, ...esUi },
  tr: { ...trRouteData, ...trRoutes, ...trMarketing, ...trHome, ...trUi },
};
const normalizedTranslationsByLanguage = Object.fromEntries(
  Object.entries(translationsByLanguage).map(([language, translations]) => [
    language,
    new Map(
      Object.entries(translations).map(([english, translated]) => [normalize(english), translated]),
    ),
  ]),
);
const LanguageContext = createContext({ language: 'en', setLanguage: () => {} });
const originalText = new WeakMap();
const originalAttributes = new WeakMap();
const originalDates = new WeakMap();
let titleState = { english: '', translated: {} };
const translatedAttributeNames = [
  'alt',
  'aria-label',
  'aria-description',
  'placeholder',
  'title',
  'data-tooltip',
  'content',
];
const excludedTextParents = 'script,style,code,pre,textarea,input,svg';

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
  if (normalizedTranslations.has(normalized)) return normalizedTranslations.get(normalized);
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

function updateTextNode(node, language) {
  const previous = originalText.get(node);
  const current = node.nodeValue || '';
  const wasKnownTranslation = previous && Object.values(previous.translated).includes(current);
  const english =
    previous && (current === previous.english || wasKnownTranslation) ? previous.english : current;
  const translated = language === 'en' ? undefined : getTranslation(english, language);
  if (translated) {
    originalText.set(node, {
      english,
      translated: { ...(previous?.translated || {}), [language]: translated },
    });
    if (current !== translated) node.nodeValue = preserveSpace(current, translated);
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

function updateElement(element, language) {
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
        if (currentText !== localized) element.textContent = localized;
      }
    } else if (wasLocalized) {
      originalDates.set(element, { ...previousDate, english });
      element.textContent = english;
    }
  }

  for (const name of translatedAttributeNames) {
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
    if (translated && value !== translated) {
      entry.translated[language] = translated;
      element.setAttribute(name, translated);
    } else if (wasTranslated) {
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

function translatePage(language) {
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
    document.title = localizedTitle;
  } else {
    titleState = { english: englishTitle, translated: titleState.translated };
    document.title = englishTitle;
  }
  document.documentElement.lang = language;
}

export function LanguageProvider({ children }) {
  const pathname = usePathname();
  const [language, setLanguage] = useState('en');
  const selectLanguage = useCallback((nextLanguage) => {
    if (nextLanguage === 'en' || nextLanguage === 'es' || nextLanguage === 'tr') {
      setLanguage(nextLanguage);
    }
  }, []);

  useEffect(() => {
    translatePage(language);
    const observer = new MutationObserver((records) => {
      for (const record of records) {
        if (record.type === 'characterData') updateTextNode(record.target, language);
        if (record.type === 'attributes') updateElement(record.target, language);
        record.addedNodes?.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) updateTextNode(node, language);
          else if (node.nodeType === Node.ELEMENT_NODE) {
            updateElement(node, language);
            node.querySelectorAll('*').forEach((child) => updateElement(child, language));
            const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, {
              acceptNode(textNode) {
                return textNode.parentElement?.closest(excludedTextParents)
                  ? NodeFilter.FILTER_REJECT
                  : NodeFilter.FILTER_ACCEPT;
              },
            });
            let textNode;
            while ((textNode = walker.nextNode())) updateTextNode(textNode, language);
          }
        });
      }
    });
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: translatedAttributeNames,
    });
    return () => observer.disconnect();
  }, [language, pathname]);

  const value = useMemo(
    () => ({ language, setLanguage: selectLanguage }),
    [language, selectLanguage],
  );
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function translateToSpanish(value) {
  return getTranslation(value, 'es') || value;
}

export function translateToTurkish(value) {
  return getTranslation(value, 'tr') || value;
}
