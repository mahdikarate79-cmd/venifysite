'use client';

import { useLocale } from '@/i18n/LocaleProvider';

export default function Header() {
  const { t } = useLocale();

  return (
    <header className="flex justify-center pt-6 pb-2 px-4">
      <div className="surface-island px-8 py-3">
        <h1 className="text-lg font-semibold tracking-[0.3em] text-white/95">
          {t.brand}
        </h1>
      </div>
    </header>
  );
}
