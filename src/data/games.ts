import { GameKey } from '@/i18n/translations';

export interface Game {
  id: GameKey;
  color: string;
}

export const games: Game[] = [
  { id: 'dice', color: '#3767FA' },
  { id: 'slots', color: '#7B5CFA' },
  { id: 'blackjack', color: '#2DD4BF' },
  { id: 'roulette', color: '#F472B6' },
  { id: 'poker', color: '#FBBF24' },
  { id: 'crash', color: '#FB7185' },
];
