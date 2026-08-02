'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '@/i18n/LocaleProvider';
import { Game } from '@/data/games';
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
    <AnimatePresence>
      {game && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.95 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed inset-x-4 bottom-24 top-auto z-50 max-h-[70vh] overflow-y-auto"
          >
            <div className="glass-card p-6">
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5">
                    <IconComponent size={48} color={game.color} />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-white/95">{gameData.name}</h2>
                    <p className="text-xs text-accent/80 mt-0.5">{t.gameRules}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors duration-200"
                >
                  <CloseIcon className="text-white/60" size={18} />
                </button>
              </div>

              <p className="text-sm text-white/70 leading-relaxed mb-6">
                {gameData.description}
              </p>

              <div className="flex justify-center">
                <div className="px-5 py-2.5 rounded-full bg-accent/15 border border-accent/25 text-accent text-sm font-medium">
                  {t.playInBot}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
