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

export function TruthOrDareIcon({ size = 48, color = '#22C55E' }: GameIconProps) {
  return (
    <IconWrapper size={size}>
      <g transform="rotate(-40 24 24)">
        <rect x="18" y="10" width="10" height="26" rx="4" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2" />
        <path d="M18 14 H28 V18 C28 20 26 22 23 22 H18 Z" fill={color} fillOpacity="0.35" stroke={color} strokeWidth="1.5" />
        <rect x="20" y="6" width="6" height="5" rx="1.5" fill={color} fillOpacity="0.5" stroke={color} strokeWidth="1.5" />
        <path d="M21 4 L23 2 L25 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <ellipse cx="23" cy="28" rx="3" ry="5" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.2" />
      </g>
    </IconWrapper>
  );
}

export function HotSeatIcon({ size = 48, color = '#FB7185' }: GameIconProps) {
  return (
    <IconWrapper size={size}>
      <path d="M14 18 H34 V20 C34 22 32 24 30 24 H18 C16 24 14 22 14 20 Z" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <path d="M16 18 V14 H32 V18" stroke={color} strokeWidth="2" strokeLinejoin="round" fill="none" />
      <line x1="18" y1="24" x2="18" y2="36" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="30" y1="24" x2="30" y2="36" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="15" y1="36" x2="33" y2="36" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </IconWrapper>
  );
}

export function Connect4Icon({ size = 48 }: GameIconProps) {
  const blue = '#3B82F6';
  const red = '#EF4444';
  return (
    <IconWrapper size={size}>
      <rect x="8" y="8" width="32" height="32" rx="4" fill="#1e3a5f" fillOpacity="0.3" stroke={blue} strokeWidth="1.5" />
      {[0, 1, 2, 3].map((col) =>
        [0, 1, 2, 3].map((row) => (
          <circle
            key={`${col}-${row}`}
            cx={14 + col * 7}
            cy={14 + row * 7}
            r="2.8"
            fill="none"
            stroke="white"
            strokeOpacity="0.15"
            strokeWidth="0.5"
          />
        ))
      )}
      <circle cx="14" cy="28" r="2.8" fill={red} />
      <circle cx="21" cy="21" r="2.8" fill={blue} />
      <circle cx="28" cy="28" r="2.8" fill={red} />
      <circle cx="35" cy="21" r="2.8" fill={blue} />
      <circle cx="21" cy="35" r="2.8" fill={red} />
      <circle cx="28" cy="35" r="2.8" fill={blue} />
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
      <g transform="rotate(-25 24 24)">
        <path
          d="M14 36 C11 36 9 33 9 29 C9 25 11 21 14 19 C16 17 18 17 19 18 C20 19 20 21 19 24 L17 36 Z"
          fill={color}
          fillOpacity="0.2"
          stroke={color}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M19 18 C20 14 22 10 25 8 C27 7 29 8 30 11 C31 14 30 18 28 22 L25 30" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M25 8 C27 6 30 6 32 8 C34 10 34 14 32 18 L29 26" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <circle cx="16" cy="18" r="4" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="2" />
      </g>
    </IconWrapper>
  );
}

export function DuelDiceIcon({ size = 48, color = '#3767FA' }: GameIconProps) {
  return (
    <IconWrapper size={size}>
      <rect x="12" y="12" width="24" height="24" rx="5" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5" transform="rotate(8 24 24)" />
      <circle cx="18" cy="18" r="2" fill={color} />
      <circle cx="30" cy="18" r="2" fill={color} />
      <circle cx="24" cy="24" r="2" fill={color} />
      <circle cx="18" cy="30" r="2" fill={color} />
      <circle cx="30" cy="30" r="2" fill={color} />
    </IconWrapper>
  );
}

export function DuelBowlingIcon({ size = 48, color = '#F97316' }: GameIconProps) {
  return (
    <IconWrapper size={size}>
      <ellipse cx="20" cy="12" rx="4" ry="2.5" fill={color} fillOpacity="0.35" stroke={color} strokeWidth="1.8" />
      <path d="M16 14 L17 34 L23 34 L24 14 Z" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <rect x="17" y="16" width="6" height="3" rx="0.5" fill={color} fillOpacity="0.4" />
      <rect x="17" y="22" width="6" height="3" rx="0.5" fill={color} fillOpacity="0.4" />
      <circle cx="34" cy="32" r="7" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2" />
      <circle cx="32" cy="31" r="1.2" fill={color} />
      <circle cx="36" cy="31" r="1.2" fill={color} />
      <circle cx="34" cy="34" r="1.2" fill={color} />
    </IconWrapper>
  );
}

export function DuelFootballIcon({ size = 48, color = '#22C55E' }: GameIconProps) {
  return (
    <IconWrapper size={size}>
      <circle cx="24" cy="24" r="16" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="2" />
      <path d="M24 10 L29 16 L27.5 24 L20.5 24 L19 16 Z" fill={color} fillOpacity="0.35" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M24 10 L19 16 M24 10 L29 16 M19 16 L13 19 M29 16 L35 19" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M13 19 L15 26 M35 19 L33 26 M15 26 L20.5 24 M33 26 L27.5 24 M15 26 L18 33 M33 26 L30 33 M18 33 L24 38 M30 33 L24 38" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
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
      <circle cx="24" cy="26" r="16" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="2" />
      <circle cx="24" cy="26" r="11" stroke={color} strokeWidth="1.5" />
      <circle cx="24" cy="26" r="6" stroke={color} strokeWidth="1.5" />
      <circle cx="24" cy="26" r="2.5" fill={color} fillOpacity="0.5" stroke={color} strokeWidth="1.5" />
      <path d="M34 10 L28 22 L26 26 L24 24 Z" fill={color} fillOpacity="0.35" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M34 10 L36 8 M34 10 L36 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </IconWrapper>
  );
}

export function RussianRouletteIcon({ size = 48, color = '#DC2626' }: GameIconProps) {
  return (
    <IconWrapper size={size}>
      <path d="M32 14 H38 V18 H34 V22 H32 Z" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      <rect x="18" y="16" width="14" height="10" rx="2" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2" />
      <circle cx="25" cy="28" r="8" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="2" />
      <circle cx="25" cy="28" r="3" fill={color} fillOpacity="0.35" stroke={color} strokeWidth="1.5" />
      <rect x="10" y="26" width="8" height="13" rx="2" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="2" transform="rotate(-8 14 32.5)" />
      <path d="M9 26 L5 24" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M33 20 C35 18 37 18 39 20" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" />
      <rect x="36" y="19" width="4" height="2" rx="0.5" fill={color} fillOpacity="0.4" />
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
      <path d="M6 8 C14 6 22 10 30 8" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <line x1="30" y1="8" x2="26" y2="30" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M26 30 C23 34 18 35 15 32 C12 29 14 26 17 26 C19 26 21 28 22 30" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M22 30 L26 38 L23 40 L19 34 Z" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      <ellipse cx="32" cy="36" rx="5" ry="3" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="1.8" />
      <path d="M36 36 L39 34" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="6" cy="8" r="2" fill={color} fillOpacity="0.35" stroke={color} strokeWidth="1.5" />
    </IconWrapper>
  );
}

export function ClawMachineIcon({ size = 48, color = '#E879F9' }: GameIconProps) {
  return (
    <IconWrapper size={size}>
      <rect x="6" y="6" width="36" height="36" rx="4" fill={color} fillOpacity="0.08" stroke={color} strokeWidth="1.5" />
      <rect x="6" y="6" width="36" height="8" rx="4" fill={color} fillOpacity="0.2" />
      <path d="M18 14 V20 M30 14 V20" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 20 H30" stroke={color} strokeWidth="1.5" />
      <path d="M24 20 V26" stroke={color} strokeWidth="1.5" />
      <path d="M18 26 L20 30 L24 28 L28 30 L30 26" stroke={color} strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <path d="M20 30 V34 M28 30 V34" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <ellipse cx="24" cy="38" rx="5" ry="4" fill={color} fillOpacity="0.35" stroke={color} strokeWidth="1" />
      <circle cx="24" cy="36" r="1.5" fill="white" fillOpacity="0.6" />
      <circle cx="14" cy="40" r="3" fill="#F472B6" fillOpacity="0.5" stroke="#F472B6" strokeWidth="0.8" />
      <circle cx="34" cy="40" r="2.5" fill="#FBBF24" fillOpacity="0.5" stroke="#FBBF24" strokeWidth="0.8" />
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
