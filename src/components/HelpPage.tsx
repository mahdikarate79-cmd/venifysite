'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/i18n/LocaleProvider';
import { games } from '@/data/games';
import { Game } from '@/data/games';
import Header from '@/components/Header';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import GameCard from '@/components/GameCard';
import GameModal from '@/components/GameModal';

export default function HelpPage() {
  const { t } = useLocale();
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  return (
    <div className="relative z-10 flex flex-col min-h-screen pb-28">
      <Header />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-4 mb-2"
      >
        <h2 className="text-xl font-semibold text-white/90 text-center">{t.helpTitle}</h2>
        <p className="text-sm text-white/40 text-center mt-1">{t.helpSubtitle}</p>
      </motion.div>

      <LanguageSwitcher />

      <div className="flex-1 px-4 space-y-3">
        {games.map((game, index) => (
          <GameCard
            key={game.id}
            game={game}
            index={index}
            onClick={() => setSelectedGame(game)}
          />
        ))}
      </div>

      <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />
    </div>
  );
}
