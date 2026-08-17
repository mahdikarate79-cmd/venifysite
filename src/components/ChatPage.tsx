'use client';

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
        <button
          type="button"
          onClick={openTelegramChat}
          aria-label={t.chatOnTelegram}
          className="chat-bubble-btn"
        >
          <span className="text-sm sm:text-base font-medium tracking-wide">
            {t.chatOnTelegram}
          </span>
        </button>
      </div>
    </div>
  );
}
