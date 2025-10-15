import { Locale, Translations } from './types';
import { ko } from './ko';
import { en } from './en';

const translations: Record<Locale, Translations> = {
  ko,
  en,
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations.ko;
}

export { ko, en };
export type { Locale, Translations };
