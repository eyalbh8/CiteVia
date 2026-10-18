import test from 'node:test';
import assert from 'node:assert/strict';
import { loadTranslations, loadedTranslations } from '../src/i18n/load-translations.js';

test('English needs no dictionary, and concurrent language requests share one lazy load', async () => {
  assert.equal(loadedTranslations(), undefined);
  const first = loadTranslations();
  assert.equal(loadTranslations(), first);
  const translations = await first;
  assert.equal(loadedTranslations(), translations);
  assert.notEqual(translations.translateToSpanish('Contact us'), 'Contact us');
  assert.notEqual(translations.translateToTurkish('Contact us'), 'Contact us');
});
