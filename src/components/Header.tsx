'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/i18n/LocaleProvider';

export default function Header() {
  const { t } = useLocale();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex justify-center pt-6 pb-2 px-4"
    >
      <div className="glass-island px-8 py-3">
        <h1 className="text-lg font-semibold tracking-[0.3em] text-white/90 brand-glow">
          {t.brand}
        </h1>
      </div>
    </motion.header>
  );
}
