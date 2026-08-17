'use client';

import { useLocale } from '@/i18n/LocaleProvider';
import { Game } from '@/data/games';
import { gameIconMap } from '@/components/icons/GameIcons';
import { ChevronIcon } from '@/components/icons/NavIcons';

interface GameCardProps {
  game: Game;
  index: number;
  onClick: () => void;
}

export default function GameCard({ game, onClick }: GameCardProps) {
  const { t } = useLocale();
  const gameData = t.gamesList[game.id];
  const IconComponent = gameIconMap[game.id];

  return (
    <button
      type="button"
      onClick={onClick}
      className="surface-card w-full flex items-center gap-4 p-4 text-start transition-opacity duration-150 hover:opacity-95 hover:border-accent/20 group"
    >
      <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5">
        <IconComponent size={40} color={game.color} />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-medium text-white/90 truncate">{gameData.name}</h3>
        <p className="text-xs text-white/40 mt-0.5">{t.gameRules}</p>
      </div>
      <ChevronIcon
        className="text-white/30 w-5 h-5 flex-shrink-0 group-hover:text-accent/60 transition-opacity duration-150"
        size={20}
      />
    </button>
  );
}
