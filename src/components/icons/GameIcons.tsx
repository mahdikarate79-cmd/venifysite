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
      <path
        d="M20 8 L28 10 L28 34 C28 38 24 40 20 38 L20 8 Z"
        fill={color}
        fillOpacity="0.2"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M20 8 L28 10 V14 L20 12 Z" fill={color} fillOpacity="0.35" stroke={color} strokeWidth="1" />
      <rect x="18" y="6" width="8" height="3" rx="1" fill={color} fillOpacity="0.5" />
      <ellipse cx="24" cy="28" rx="4" ry="6" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1" />
      <path d="M22 34 L24 40 L26 34" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </IconWrapper>
  );
}

export function HotSeatIcon({ size = 48, color = '#FB7185' }: GameIconProps) {
  return (
    <IconWrapper size={size}>
      <rect x="14" y="20" width="20" height="10" rx="2" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.5" />
      <path d="M16 20 V14 H32 V20" stroke={color} strokeWidth="1.5" strokeLinejoin="round" fill={color} fillOpacity="0.1" />
      <path d="M12 30 V38 M36 30 V38" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M10 38 H14 M34 38 H38" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M18 14 V10 M30 14 V10" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
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
      <path
        d="M14 32 C14 32 12 28 14 24 C15 22 18 20 22 20 C24 20 26 21 27 23 C28 25 28 28 26 30 C24 32 20 34 16 34 C15 34 14 33 14 32 Z"
        fill={color}
        fillOpacity="0.2"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M22 20 L26 14 L30 16 L28 22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M26 14 L30 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 16 L34 18" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 34 L12 38 M20 34 L18 40" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
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
      <path
        d="M30 10 C30 10 34 14 34 22 C34 30 30 36 28 38 L26 36 C28 34 31 29 31 22 C31 16 28 12 28 12 Z"
        fill={color}
        fillOpacity="0.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <ellipse cx="28" cy="12" rx="3" ry="2" fill={color} fillOpacity="0.4" stroke={color} strokeWidth="1" />
      <circle cx="16" cy="34" r="5" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.5" />
      <circle cx="16" cy="34" r="1.5" fill={color} />
      <path d="M10 38 H38" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4" />
    </IconWrapper>
  );
}

export function DuelFootballIcon({ size = 48, color = '#22C55E' }: GameIconProps) {
  return (
    <IconWrapper size={size}>
      <circle cx="24" cy="24" r="15" fill="white" fillOpacity="0.9" stroke={color} strokeWidth="1.5" />
      <path
        d="M24 12 L28 18 L26 26 L22 26 L20 18 Z"
        fill={color}
        fillOpacity="0.3"
        stroke={color}
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path d="M24 12 L20 18 M24 12 L28 18 M20 18 L16 22 M28 18 L32 22 M16 22 L18 28 M32 22 L30 28 M18 28 L22 26 M30 28 L26 26" stroke={color} strokeWidth="0.8" strokeOpacity="0.5" />
      <path d="M12 24 L16 22 M36 24 L32 22 M24 36 L22 26 M24 36 L26 26" stroke={color} strokeWidth="0.8" strokeOpacity="0.5" />
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
      <path
        d="M28 10 C32 10 36 14 36 20 L36 30 C36 34 33 38 28 38 L20 38 C16 38 14 35 14 32 L14 22 L10 18 L14 14 L18 10 Z"
        fill={color}
        fillOpacity="0.15"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <rect x="18" y="14" width="12" height="6" rx="1" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="1" />
      <circle cx="24" cy="28" r="4" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="24" cy="28" r="1.5" fill={color} />
      <path d="M10 18 L6 16" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M36 20 L40 18" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
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
      <path
        d="M10 8 C10 8 14 6 20 10 C26 14 30 12 34 14"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M34 14 L30 36" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M30 36 C28 40 24 42 20 38 C16 34 18 30 22 30 C24 30 26 32 28 34"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M28 34 L32 38" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="32" cy="38" r="1" fill={color} />
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
