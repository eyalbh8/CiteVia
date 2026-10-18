'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { usePathname } from 'next/navigation';

import { loadTranslations, loadedTranslations } from './load-translations.js';

const identity = (text) => text;
const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {},
  translateToSpanish: identity,
  translateToTurkish: identity,
});

export function LanguageProvider({ children }) {
  const pathname = usePathname();
  const [language, setLanguage] = useState('en');
  const selection = useRef(0);
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('citevia-language');
      if (saved === 'es' || saved === 'tr') {
        const request = selection.current;
        loadTranslations()
          .then(() => {
            if (selection.current === request) setLanguage(saved);
          })
          .catch(() => {});
      }
    } catch {
      // Language switching still works when browser storage is unavailable.
    }
  }, []);
  const selectLanguage = useCallback(async (nextLanguage) => {
    if (nextLanguage === 'en' || nextLanguage === 'es' || nextLanguage === 'tr') {
      const request = ++selection.current;
      try {
        if (nextLanguage !== 'en') await loadTranslations();
      } catch {
        return; // Keep the current language if its dictionary cannot be loaded.
      }
      if (selection.current !== request) return;
      setLanguage(nextLanguage);
      try {
        window.localStorage.setItem('citevia-language', nextLanguage);
      } catch {
        // Keep the selection in memory for this visit.
      }
    }
  }, []);

  useEffect(() => {
    const translations = loadedTranslations();
    if (!translations) return undefined;
    const {
      translatePage,
      translateMetadata,
      updateTextNode,
      updateElement,
      translatedAttributeNames,
      excludedTextParents,
    } = translations;
    translatePage(language);
    // English is already rendered by the server; no observer is needed after restoring it.
    if (language === 'en') return undefined;
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
    const headObserver = new MutationObserver(() => translateMetadata(language));
    headObserver.observe(document.head, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: ['content'],
    });
    return () => {
      observer.disconnect();
      headObserver.disconnect();
    };
  }, [language, pathname]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: selectLanguage,
      translateToSpanish: loadedTranslations()?.translateToSpanish || identity,
      translateToTurkish: loadedTranslations()?.translateToTurkish || identity,
    }),
    [language, selectLanguage],
  );
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
