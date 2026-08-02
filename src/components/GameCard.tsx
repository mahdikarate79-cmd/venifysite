'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/i18n/LocaleProvider';
import { Game } from '@/data/games';
import { gameIconMap } from '@/components/icons/GameIcons';
import { ChevronIcon } from '@/components/icons/NavIcons';

interface GameCardProps {
  game: Game;
  index: number;
  onClick: () => void;
}

export default function GameCard({ game, index, onClick }: GameCardProps) {
  const { t } = useLocale();
  const gameData = t.gamesList[game.id];
  const IconComponent = gameIconMap[game.id];

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
      onClick={onClick}
      className="glass-card w-full flex items-center gap-4 p-4 text-start transition-all duration-300 hover:shadow-glass-hover hover:border-accent/20 group"
    >
      <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 group-hover:bg-white/8 transition-colors duration-300 overflow-hidden p-1">
        <IconComponent size={56} color={game.color} className="w-full h-full" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-medium text-white/90 truncate">{gameData.name}</h3>
        <p className="text-xs text-white/40 mt-0.5">{t.gameRules}</p>
      </div>
      <ChevronIcon className="text-white/30 w-5 h-5 flex-shrink-0 group-hover:text-accent/60 transition-colors duration-300" size={20} />
    </motion.button>
  );
}
