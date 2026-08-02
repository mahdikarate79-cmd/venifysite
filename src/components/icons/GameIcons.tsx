import { ReactNode } from 'react';

interface GameIconProps {
  className?: string;
  size?: number;
  color?: string;
}

function IconWrapper({ children, size = 48, className = '' }: { children: ReactNode; size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      {children}
    </svg>
  );
}

export function XOIcon({ size = 48, color = '#3767FA' }: GameIconProps) {
  return (
    <IconWrapper size={size}>
      <rect x="8" y="8" width="32" height="32" rx="4" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1.5" />
      <path d="M14 14 L22 22 M22 14 L14 22" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="32" r="5" stroke={color} strokeWidth="2" />
    </IconWrapper>
  );
}

export function QuizIcon({ size = 48, color = '#7B5CFA' }: GameIconProps) {
  return (
    <IconWrapper size={size}>
      <rect x="10" y="6" width="28" height="36" rx="4" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1.5" />
      <circle cx="24" cy="18" r="6" stroke={color} strokeWidth="1.5" />
      <text x="24" y="21" fill={color} fontSize="9" fontWeight="bold" textAnchor="middle">?</text>
      <path d="M14 30h20M14 36h14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </IconWrapper>
  );
}

export function ChimojiIcon({ size = 48, color = '#FBBF24' }: GameIconProps) {
  return (
    <IconWrapper size={size}>
      <circle cx="24" cy="24" r="16" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1.5" />
      <circle cx="18" cy="20" r="2" fill={color} />
      <circle cx="30" cy="20" r="2" fill={color} />
      <path d="M16 30 Q24 38 32 30" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </IconWrapper>
  );
}

export function TruthOrDareIcon({ size = 48, color = '#F472B6' }: GameIconProps) {
  return (
    <IconWrapper size={size}>
      <path d="M24 6 L38 14 V34 L24 42 L10 34 V14 Z" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1.5" />
      <text x="17" y="22" fill={color} fontSize="7" fontWeight="bold">T</text>
      <text x="27" y="22" fill={color} fontSize="7" fontWeight="bold">D</text>
      <path d="M16 30h16" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </IconWrapper>
  );
}

export function HotSeatIcon({ size = 48, color = '#FB7185' }: GameIconProps) {
  return (
    <IconWrapper size={size}>
      <rect x="12" y="22" width="24" height="14" rx="3" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5" />
      <path d="M16 22 V16 Q24 10 32 16 V22" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M10 36h28" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="14" r="4" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1" />
    </IconWrapper>
  );
}

export function Connect4Icon({ size = 48, color = '#EF4444' }: GameIconProps) {
  return (
    <IconWrapper size={size}>
      <rect x="8" y="8" width="32" height="32" rx="4" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1.5" />
      <circle cx="16" cy="18" r="4" fill={color} fillOpacity="0.5" />
      <circle cx="24" cy="26" r="4" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1" />
      <circle cx="32" cy="18" r="4" fill={color} fillOpacity="0.5" />
      <circle cx="16" cy="34" r="4" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1" />
    </IconWrapper>
  );
}

export function LudoIcon({ size = 48, color = '#2DD4BF' }: GameIconProps) {
  return (
    <IconWrapper size={size}>
      <rect x="8" y="8" width="32" height="32" rx="4" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1.5" />
      <circle cx="16" cy="16" r="4" fill={color} fillOpacity="0.4" />
      <circle cx="32" cy="16" r="4" fill="#EF4444" fillOpacity="0.4" />
      <circle cx="16" cy="32" r="4" fill="#FBBF24" fillOpacity="0.4" />
      <circle cx="32" cy="32" r="4" fill="#3B82F6" fillOpacity="0.4" />
      <rect x="20" y="20" width="8" height="8" fill={color} fillOpacity="0.2" />
    </IconWrapper>
  );
}

export function RockPaperScissorsIcon({ size = 48, color = '#A78BFA' }: GameIconProps) {
  return (
    <IconWrapper size={size}>
      <circle cx="16" cy="28" r="8" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.5" />
      <rect x="28" y="18" width="10" height="14" rx="2" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.5" transform="rotate(15 33 25)" />
      <path d="M30 10 L34 6 L38 14 L34 18 Z" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.5" />
    </IconWrapper>
  );
}

export function DuelDiceIcon({ size = 48, color = '#3767FA' }: GameIconProps) {
  return (
    <IconWrapper size={size}>
      <rect x="6" y="14" width="16" height="16" rx="3" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5" />
      <rect x="26" y="14" width="16" height="16" rx="3" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="1.5" />
      <circle cx="14" cy="22" r="2" fill={color} />
      <circle cx="34" cy="22" r="2" fill={color} />
      <path d="M22 22h4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </IconWrapper>
  );
}

export function DuelBowlingIcon({ size = 48, color = '#F97316' }: GameIconProps) {
  return (
    <IconWrapper size={size}>
      <circle cx="16" cy="30" r="6" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.5" />
      <circle cx="28" cy="28" r="6" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5" />
      <circle cx="36" cy="32" r="6" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1.5" />
      <circle cx="30" cy="12" r="5" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.5" />
      <circle cx="30" cy="10" r="1.5" fill={color} />
    </IconWrapper>
  );
}

export function DuelFootballIcon({ size = 48, color = '#22C55E' }: GameIconProps) {
  return (
    <IconWrapper size={size}>
      <circle cx="24" cy="24" r="14" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1.5" />
      <path d="M24 10 L30 18 L28 28 L20 28 L18 18 Z" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1" />
      <path d="M10 20 L18 18 M30 18 L38 20" stroke={color} strokeWidth="1" strokeOpacity="0.5" />
    </IconWrapper>
  );
}

export function DuelBasketballIcon({ size = 48, color = '#F59E0B' }: GameIconProps) {
  return (
    <IconWrapper size={size}>
      <circle cx="24" cy="26" r="14" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5" />
      <path d="M10 26h28M24 12v28" stroke={color} strokeWidth="1" strokeOpacity="0.4" />
      <path d="M14 14 Q24 26 14 38 M34 14 Q24 26 34 38" stroke={color} strokeWidth="1" strokeOpacity="0.4" fill="none" />
      <rect x="18" y="6" width="12" height="4" rx="1" fill={color} fillOpacity="0.3" />
    </IconWrapper>
  );
}

export function DuelDartIcon({ size = 48, color = '#EC4899' }: GameIconProps) {
  return (
    <IconWrapper size={size}>
      <circle cx="24" cy="24" r="16" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1.5" />
      <circle cx="24" cy="24" r="10" stroke={color} strokeWidth="1" strokeOpacity="0.4" />
      <circle cx="24" cy="24" r="4" fill="#EF4444" fillOpacity="0.5" />
      <circle cx="24" cy="24" r="1.5" fill="white" />
      <path d="M24 8 L26 20 L24 24 L22 20 Z" fill={color} stroke={color} strokeWidth="0.5" />
    </IconWrapper>
  );
}

export function RussianRouletteIcon({ size = 48, color = '#DC2626' }: GameIconProps) {
  return (
    <IconWrapper size={size}>
      <rect x="14" y="10" width="20" height="28" rx="4" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1.5" />
      <circle cx="24" cy="22" r="6" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="24" cy="22" r="2" fill={color} />
      <path d="M24 10 V6 M20 6h8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </IconWrapper>
  );
}

export function RouletteIcon({ size = 48, color = '#10B981' }: GameIconProps) {
  return (
    <IconWrapper size={size}>
      <circle cx="24" cy="24" r="18" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1.5" />
      <circle cx="24" cy="24" r="12" stroke={color} strokeWidth="1" strokeOpacity="0.4" />
      <circle cx="24" cy="24" r="4" fill={color} fillOpacity="0.4" />
      <circle cx="24" cy="10" r="2" fill="#EF4444" />
      <circle cx="36" cy="30" r="2" fill="#22C55E" />
      <circle cx="12" cy="30" r="2" fill="#9CA3AF" />
    </IconWrapper>
  );
}

export function SlotMachineIcon({ size = 48, color = '#7B5CFA' }: GameIconProps) {
  return (
    <IconWrapper size={size}>
      <rect x="6" y="12" width="36" height="24" rx="4" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1.5" />
      <rect x="10" y="16" width="8" height="16" rx="2" fill={color} fillOpacity="0.25" />
      <rect x="20" y="16" width="8" height="16" rx="2" fill={color} fillOpacity="0.25" />
      <rect x="30" y="16" width="8" height="16" rx="2" fill={color} fillOpacity="0.25" />
      <text x="14" y="28" fill={color} fontSize="10" fontWeight="bold" textAnchor="middle">7</text>
      <text x="24" y="28" fill={color} fontSize="10" fontWeight="bold" textAnchor="middle">7</text>
      <text x="34" y="28" fill={color} fontSize="10" fontWeight="bold" textAnchor="middle">7</text>
    </IconWrapper>
  );
}

export function DiceBetIcon({ size = 48, color = '#3B82F6' }: GameIconProps) {
  return (
    <IconWrapper size={size}>
      <rect x="10" y="10" width="28" height="28" rx="6" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1.5" />
      <circle cx="18" cy="18" r="2.5" fill={color} />
      <circle cx="30" cy="18" r="2.5" fill={color} />
      <circle cx="24" cy="24" r="2.5" fill={color} />
      <circle cx="18" cy="30" r="2.5" fill={color} />
      <circle cx="30" cy="30" r="2.5" fill={color} />
    </IconWrapper>
  );
}

export function FishingIcon({ size = 48, color = '#06B6D4' }: GameIconProps) {
  return (
    <IconWrapper size={size}>
      <path d="M8 8 Q20 4 28 16" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M28 16 L32 36" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="20" cy="34" rx="10" ry="6" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5" />
      <path d="M14 34 Q20 28 26 34" stroke={color} strokeWidth="1" fill="none" />
      <circle cx="30" cy="38" r="3" fill={color} fillOpacity="0.4" stroke={color} strokeWidth="1" />
    </IconWrapper>
  );
}

export function ClawMachineIcon({ size = 48, color = '#E879F9' }: GameIconProps) {
  return (
    <IconWrapper size={size}>
      <rect x="8" y="8" width="32" height="32" rx="4" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1.5" />
      <path d="M16 8 V14 M32 8 V14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 14 H32" stroke={color} strokeWidth="1.5" />
      <path d="M24 14 V22" stroke={color} strokeWidth="1.5" />
      <path d="M18 22 H30 L28 28 H20 Z" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1" />
      <circle cx="20" cy="36" r="4" fill={color} fillOpacity="0.4" stroke={color} strokeWidth="1" />
      <circle cx="30" cy="36" r="3" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1" />
    </IconWrapper>
  );
}

export const gameIconMap = {
  xo: XOIcon,
  quiz: QuizIcon,
  chimoji: ChimojiIcon,
  truthOrDare: TruthOrDareIcon,
  hotSeat: HotSeatIcon,
  connect4: Connect4Icon,
  ludo: LudoIcon,
  rockPaperScissors: RockPaperScissorsIcon,
  duelDice: DuelDiceIcon,
  duelBowling: DuelBowlingIcon,
  duelFootball: DuelFootballIcon,
  duelBasketball: DuelBasketballIcon,
  duelDart: DuelDartIcon,
  russianRoulette: RussianRouletteIcon,
  roulette: RouletteIcon,
  slotMachine: SlotMachineIcon,
  diceBet: DiceBetIcon,
  fishing: FishingIcon,
  clawMachine: ClawMachineIcon,
} as const;
