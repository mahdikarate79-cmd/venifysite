import { GameKey } from '@/i18n/translations';

export interface Game {
  id: GameKey;
  color: string;
}

export const games: Game[] = [
  { id: 'xo', color: '#3767FA' },
  { id: 'quiz', color: '#7B5CFA' },
  { id: 'chimoji', color: '#FBBF24' },
  { id: 'truthOrDare', color: '#F472B6' },
  { id: 'hotSeat', color: '#FB7185' },
  { id: 'connect4', color: '#EF4444' },
  { id: 'ludo', color: '#2DD4BF' },
  { id: 'rockPaperScissors', color: '#A78BFA' },
  { id: 'duelDice', color: '#3767FA' },
  { id: 'duelBowling', color: '#F97316' },
  { id: 'duelFootball', color: '#22C55E' },
  { id: 'duelBasketball', color: '#F59E0B' },
  { id: 'duelDart', color: '#EC4899' },
  { id: 'russianRoulette', color: '#DC2626' },
  { id: 'roulette', color: '#10B981' },
  { id: 'slotMachine', color: '#7B5CFA' },
  { id: 'diceBet', color: '#3B82F6' },
  { id: 'fishing', color: '#06B6D4' },
  { id: 'clawMachine', color: '#E879F9' },
];

export const TELEGRAM_BOT_URL = 'https://t.me/venifyBot';
