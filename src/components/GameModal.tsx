'use client';

import { useLocale } from '@/i18n/LocaleProvider';
import { Game, TELEGRAM_BOT_URL } from '@/data/games';
import { gameIconMap } from '@/components/icons/GameIcons';
import { CloseIcon } from '@/components/icons/NavIcons';

interface GameModalProps {
  game: Game | null;
  onClose: () => void;
}

export default function GameModal({ game, onClose }: GameModalProps) {
  const { t } = useLocale();

  if (!game) return null;

  const gameData = t.gamesList[game.id];
  const IconComponent = gameIconMap[game.id];

  return (
    <>
      <div
        className="modal-overlay"
        onClick={onClose}
        aria-hidden
      />
      <div className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="game-modal-title">
        <div className="surface-card p-6">
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5">
                <IconComponent size={48} color={game.color} />
              </div>
              <div>
                <h2 id="game-modal-title" className="text-xl font-semibold text-white/95">
                  {gameData.name}
                </h2>
                <p className="text-xs text-accent/80 mt-0.5">{t.gameRules}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label={t.close}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:opacity-80 transition-opacity duration-150"
            >
              <CloseIcon className="text-white/60" size={18} />
            </button>
          </div>

          <p className="text-sm text-white/70 leading-relaxed mb-6">
            {gameData.description}
          </p>

          <div className="flex justify-center">
            <a
              href={TELEGRAM_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-accent/15 border border-accent/25 text-accent text-sm font-medium transition-opacity duration-150 hover:opacity-90"
            >
              {t.playInBot}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
