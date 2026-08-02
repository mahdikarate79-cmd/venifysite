export type Locale = 'en' | 'ru' | 'ar' | 'fa';

export const locales: Locale[] = ['en', 'ru', 'ar', 'fa'];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ru: 'Русский',
  ar: 'العربية',
  fa: 'فارسی',
};

export const rtlLocales: Locale[] = ['ar', 'fa'];

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}
