'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Locale, defaultLocale, isRtl } from './config';
import { translations } from './translations';

type Translations = (typeof translations)[Locale];

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
  dir: 'ltr' | 'rtl';
}

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    document.documentElement.lang = newLocale;
    document.documentElement.dir = isRtl(newLocale) ? 'rtl' : 'ltr';
  }, []);

  const value: LocaleContextType = {
    locale,
    setLocale,
    t: translations[locale],
    dir: isRtl(locale) ? 'rtl' : 'ltr',
  };

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error('useLocale must be used within LocaleProvider');
  return context;
}
