import { translations, defaultLang, showDefaultLang } from './translations';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in translations) return lang as keyof typeof translations;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof translations) {
  return function t(key: keyof typeof translations[typeof defaultLang]) {
    return translations[lang][key] || translations[defaultLang][key];
  }
}

export function useTranslatedPath(lang: keyof typeof translations) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`
  }
}
