import test from 'node:test';
import assert from 'node:assert/strict';
import {
  updateTextNode,
  updateElement,
  translateToSpanish,
  translateToTurkish,
} from '../src/i18n/translate.js';
import { supplementalTranslations } from '../src/i18n/content-supplement.js';

// A small DOM boundary double lets us verify observer idempotence without a browser.
class TestElement {
  tagName = 'BUTTON';
  attributes = new Map();
  writes = 0;
  getAttribute(name) {
    return this.attributes.get(name) ?? null;
  }
  setAttribute(name, value) {
    this.attributes.set(name, value);
    this.writes++;
  }
}
globalThis.Element = TestElement;
globalThis.Node = { TEXT_NODE: 3 };

test('language names marked translate=no stay recognizable in every language', () => {
  const node = { nodeValue: 'English', parentElement: { closest: () => ({}) } };
  updateTextNode(node, 'es');
  updateTextNode(node, 'tr');
  assert.equal(node.nodeValue, 'English');
});

test('switching languages restores text with surrounding whitespace', () => {
  const node = { nodeValue: ' Opens an email draft to ' };
  updateTextNode(node, 'es');
  assert.equal(node.nodeValue, ' Abre un borrador de correo para ');
  // MutationObserver sees the translation it just wrote.
  updateTextNode(node, 'es');
  updateTextNode(node, 'tr');
  assert.equal(node.nodeValue, ' Şu adres için e-posta taslağı açar: ');
  updateTextNode(node, 'tr');
  updateTextNode(node, 'en');
  assert.equal(node.nodeValue, ' Opens an email draft to ');
});

test('translated attributes settle without toggling or an observer loop', () => {
  const button = new TestElement();
  button.setAttribute('aria-label', 'Choose language');
  button.writes = 0;
  for (let i = 0; i < 10; i++) updateElement(button, 'es');
  assert.equal(button.getAttribute('aria-label'), 'Elegir idioma');
  assert.equal(button.writes, 1);
  updateElement(button, 'tr');
  assert.equal(button.getAttribute('aria-label'), 'Dil seçin');
  updateElement(button, 'en');
  assert.equal(button.getAttribute('aria-label'), 'Choose language');
});

test('React updates to a previously translated label are translated again', () => {
  const button = new TestElement();
  button.setAttribute('aria-label', 'Open navigation');
  updateElement(button, 'es');
  button.setAttribute('aria-label', 'Close navigation');
  updateElement(button, 'es');
  assert.equal(button.getAttribute('aria-label'), 'Cerrar navegación');
  updateElement(button, 'en');
  assert.equal(button.getAttribute('aria-label'), 'Close navigation');
});

test('dynamic text can change after translation and still return to English', () => {
  const node = { nodeValue: 'Contact us' };
  updateTextNode(node, 'es');
  node.nodeValue = 'Book on Cal.com';
  updateTextNode(node, 'tr');
  assert.equal(node.nodeValue, 'Cal.com’da randevu al');
  updateTextNode(node, 'en');
  assert.equal(node.nodeValue, 'Book on Cal.com');
});

test('date localization preserves the React-owned text node', () => {
  const date = new TestElement();
  date.tagName = 'TIME';
  date.setAttribute('datetime', '2026-10-15');
  const text = { nodeType: 3, nodeValue: '15 October 2026' };
  date.firstChild = text;
  Object.defineProperty(date, 'textContent', {
    get: () => text.nodeValue,
    set: () => {
      throw new Error('Do not replace React-owned children');
    },
  });
  updateElement(date, 'es');
  assert.equal(text.nodeValue, '15 de octubre de 2026');
  updateElement(date, 'tr');
  assert.equal(text.nodeValue, '15 Ekim 2026');
  updateElement(date, 'en');
  assert.equal(date.firstChild, text);
  assert.equal(text.nodeValue, '15 October 2026');
});

test('dynamic counts and key booking actions have both translations', () => {
  for (const value of [
    'Show 4 more questions',
    '10 articles',
    'Contact us',
    'Book on Cal.com',
    '6 min read',
    'in technical seo',
    'GEO FOR MARKETING TEAMS & AGENCIES',
    'Show services pages',
    'All services',
  ]) {
    assert.notEqual(translateToSpanish(value), value);
    assert.notEqual(translateToTurkish(value), value);
  }
});

test('case variants in categories and headings use the same dictionary', () => {
  assert.equal(translateToSpanish('technical seo'), translateToSpanish('Technical SEO'));
  assert.equal(
    translateToTurkish('marketing teams & agencies'),
    translateToTurkish('Marketing teams & agencies'),
  );
});

test('supplemental page copy survives repeated language changes without losing English', () => {
  for (const [english] of supplementalTranslations) {
    const node = { nodeValue: ` ${english} ` };
    for (let cycle = 0; cycle < 2; cycle++) {
      for (const language of ['es', 'tr']) {
        updateTextNode(node, language);
        const localized = node.nodeValue;
        assert.notEqual(localized.trim(), english, `${language}: ${english}`);
        updateTextNode(node, language);
        assert.equal(node.nodeValue, localized);
      }
      updateTextNode(node, 'en');
      assert.equal(node.nodeValue, ` ${english} `);
    }
  }
});
