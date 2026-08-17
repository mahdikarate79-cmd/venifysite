'use client';

import { useState } from 'react';
import { useLocale } from '@/i18n/LocaleProvider';
import { locales, localeNames, Locale } from '@/i18n/config';
import { GlobeIcon, ChevronIcon } from '@/components/icons/NavIcons';

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);

  const handleSelect = (l: Locale) => {
    setLocale(l);
    setOpen(false);
  };

  return (
    <div className="relative px-4 mb-4">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="surface-card w-full flex items-center justify-between px-4 py-3 transition-opacity duration-150 hover:opacity-95"
      >
        <div className="flex items-center gap-3">
          <GlobeIcon className="text-accent w-5 h-5" size={20} />
          <span className="text-sm text-white/70">{t.selectLanguage}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-white/90">{localeNames[locale]}</span>
          <ChevronIcon
            className={`text-white/50 w-4 h-4 transition-transform duration-150 ${open ? 'rotate-90' : ''}`}
            size={16}
          />
        </div>
      </button>

      {open && (
        <div className="dropdown-panel absolute left-4 right-4 top-full mt-2 z-50 surface-card overflow-hidden">
          {locales.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => handleSelect(l)}
              className={`w-full px-4 py-3 text-sm text-start transition-opacity duration-150 hover:opacity-90 ${
                locale === l ? 'text-accent font-medium bg-white/5' : 'text-white/70'
              }`}
            >
              {localeNames[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
