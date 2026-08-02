'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/i18n/LocaleProvider';
import Header from '@/components/Header';

const TELEGRAM_CHAT_URL = 'https://t.me/VeniFyChat';

export default function ChatPage() {
  const { t } = useLocale();

  const openTelegramChat = () => {
    window.open(TELEGRAM_CHAT_URL, '_blank');
  };

  return (
    <div className="relative z-10 flex flex-col min-h-screen pb-28">
      <Header />

      <div className="flex-1 flex items-center justify-center px-6">
        <motion.button
          type="button"
          onClick={openTelegramChat}
          aria-label={t.chatOnTelegram}
          className="chat-bubble-btn group"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="chat-bubble-shimmer" aria-hidden />
          <span className="chat-bubble-glow" aria-hidden />
          <span className="relative z-10 text-sm sm:text-base font-medium tracking-wide text-white/95">
            {t.chatOnTelegram}
          </span>
        </motion.button>
      </div>
    </div>
  );
}
