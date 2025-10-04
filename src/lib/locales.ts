export const SUPPORTED_LOCALES = [
  { code: 'sk', label: 'Slovenčina' },
  { code: 'cz', label: 'Čeština' },
] as const;

export type Locale = typeof SUPPORTED_LOCALES[number]['code'];

export const DEFAULT_LOCALE: Locale = 'sk';
export const PREFERRED_LANG_KEY = 'preferredLang';

const SUPPORTED_LOCALE_CODE_SET = new Set<Locale>(
  SUPPORTED_LOCALES.map(l => l.code)
)

export function isSupportedLocale(lang?: string): lang is Locale {
  if (!lang) {
      return false;
  }
  return SUPPORTED_LOCALE_CODE_SET.has(lang as Locale);
}

export function getSupportedLocaleKeys(): Locale[] {
  return SUPPORTED_LOCALES.map(l => l.code);
}

// Optional helper to retrieve a locale's human label (not previously exported, but handy)
export function getLocaleLabel(locale: Locale): string {
  const found = SUPPORTED_LOCALES.find(l => l.code === locale);
  return found ? found.label : locale;
}

export function getBrowserLocale(acceptLanguage: string | null): Locale {
    if (!acceptLanguage) {
        return DEFAULT_LOCALE;
    }

    const languages = acceptLanguage
        .split(',')
        .map(lang => {
            const [code] = lang.trim().split(';');
            return code.split('-')[0].toLowerCase();
        });

    for (const lang of languages) {
        if (isSupportedLocale(lang)) {
            return lang;
        }
    }

    return DEFAULT_LOCALE;
}
