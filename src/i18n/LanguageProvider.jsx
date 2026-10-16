'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  translatePage,
  translateMetadata,
  updateTextNode,
  updateElement,
  translatedAttributeNames,
  excludedTextParents,
} from './translate.js';
export { translateToSpanish, translateToTurkish } from './translate.js';

const LanguageContext = createContext({ language: 'en', setLanguage: () => {} });

export function LanguageProvider({ children }) {
  const pathname = usePathname();
  const [language, setLanguage] = useState('en');
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('citevia-language');
      if (saved === 'es' || saved === 'tr') setLanguage(saved);
    } catch {
      // Language switching still works when browser storage is unavailable.
    }
  }, []);
  const selectLanguage = useCallback((nextLanguage) => {
    if (nextLanguage === 'en' || nextLanguage === 'es' || nextLanguage === 'tr') {
      setLanguage(nextLanguage);
      try {
        window.localStorage.setItem('citevia-language', nextLanguage);
      } catch {
        // Keep the selection in memory for this visit.
      }
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
    () => ({ language, setLanguage: selectLanguage }),
    [language, selectLanguage],
  );
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
