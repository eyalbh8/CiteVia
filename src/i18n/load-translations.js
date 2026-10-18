let translations;
let pending;

export function loadedTranslations() {
  return translations;
}

export function loadTranslations() {
  pending ??= import('./translate.js')
    .then((module) => {
      translations = module;
      return module;
    })
    .catch((error) => {
      pending = undefined;
      throw error;
    });
  return pending;
}
