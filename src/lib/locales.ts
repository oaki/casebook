export const SUPPORTED_LOCALES = ['sk', 'cs'] as const;
export type Locale = typeof SUPPORTED_LOCALES[number];
export const DEFAULT_LOCALE: Locale = 'sk';

