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
      <ellipse cx="24" cy="24" rx="18" ry="6" fill={color} fillOpacity="0.08" transform="rotate(-25 24 24)" />
      <g transform="rotate(-28 24 26)">
        <rect x="10" y="22" width="26" height="10" rx="5" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="1.5" />
        <path d="M10 24 C10 20 12 16 16 15 H22 C26 16 28 20 28 24" fill={color} fillOpacity="0.35" stroke={color} strokeWidth="1.5" />
        <rect x="14" y="13" width="8" height="4" rx="1.5" fill={color} fillOpacity="0.5" stroke={color} strokeWidth="1" />
        <ellipse cx="23" cy="27" rx="3" ry="2" fill="white" fillOpacity="0.2" />
      </g>
      <path d="M32 14 C36 16 38 20 36 24" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2" opacity="0.6" />
      <path d="M34 12 L38 10 M36 16 L40 15" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    </IconWrapper>
  );
}

export function HotSeatIcon({ size = 48, color = '#FB7185' }: GameIconProps) {
  const flame = '#F97316';
  return (
    <IconWrapper size={size}>
      <path d="M14 36 C12 32 11 28 13 24 C14 22 16 20 18 20" stroke={flame} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M34 36 C36 32 37 28 35 24 C34 22 32 20 30 20" stroke={flame} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M20 38 C20 34 22 30 24 28 C26 30 28 34 28 38" fill={flame} fillOpacity="0.3" stroke={flame} strokeWidth="1" />
      <path d="M24 10 C22 14 20 16 20 18 C20 20 22 20 24 16 C26 20 28 20 28 18 C28 16 26 14 24 10 Z" fill={flame} fillOpacity="0.45" stroke={flame} strokeWidth="1" />
      <path d="M14 22 L16 18 L32 18 L34 22 L34 28 C34 30 32 32 30 32 H18 C16 32 14 30 14 28 Z" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M16 22 L18 18 H30 L32 22" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1" />
      <rect x="17" y="28" width="3" height="8" rx="1" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1" />
      <rect x="28" y="28" width="3" height="8" rx="1" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1" />
      <path d="M15 36 H33" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <ellipse cx="24" cy="20" rx="8" ry="3" fill="white" fillOpacity="0.12" />
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
        d="M16 34 C14 34 12 32 12 29 C12 26 13 23 15 21 C16 20 17 19 18 19 C19 19 20 20 20 22 C20 24 19 26 18 28 L16 34 Z"
        fill={color}
        fillOpacity="0.2"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M20 22 C21 18 22 14 24 12 C25 11 27 11 28 13 C29 15 29 18 28 21 L26 28"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M24 12 C25 10 27 9 29 10 C31 11 32 14 31 17 L29 24"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="18" cy="19" r="3" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="1.5" />
      <path d="M14 34 L11 38 M18 34 L17 39" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="22" cy="16" rx="2" ry="3" fill="white" fillOpacity="0.15" transform="rotate(-15 22 16)" />
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
      <path d="M8 38 H40" stroke={color} strokeWidth="1" strokeOpacity="0.3" strokeLinecap="round" />
      <path d="M22 12 L24 8 L26 12 L24 22 Z" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M18 14 L20 10 L22 14 L20 22 Z" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M26 14 L28 10 L30 14 L28 22 Z" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <ellipse cx="20" cy="10" rx="2" ry="1.5" fill={color} fillOpacity="0.4" />
      <ellipse cx="24" cy="8" rx="2" ry="1.5" fill={color} fillOpacity="0.4" />
      <ellipse cx="28" cy="10" rx="2" ry="1.5" fill={color} fillOpacity="0.4" />
      <circle cx="34" cy="32" r="6" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="1.5" />
      <circle cx="32.5" cy="31" r="1" fill={color} fillOpacity="0.5" />
      <circle cx="35.5" cy="31" r="1" fill={color} fillOpacity="0.5" />
      <circle cx="34" cy="33.5" r="1" fill={color} fillOpacity="0.5" />
      <ellipse cx="33" cy="30" rx="2" ry="1.5" fill="white" fillOpacity="0.2" />
    </IconWrapper>
  );
}

export function DuelFootballIcon({ size = 48 }: GameIconProps) {
  const black = '#1a1a1a';
  return (
    <IconWrapper size={size}>
      <circle cx="24" cy="24" r="15" fill="white" fillOpacity="0.95" stroke={black} strokeWidth="1.5" />
      <path
        d="M24 11 L28.5 16 L27 23 L21 23 L19.5 16 Z"
        fill={black}
        fillOpacity="0.85"
        stroke={black}
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
      <path d="M24 11 L19.5 16 M24 11 L28.5 16 M19.5 16 L14 19 M28.5 16 L34 19" stroke={black} strokeWidth="0.7" opacity="0.6" />
      <path d="M14 19 L16 25 M34 19 L32 25 M16 25 L21 23 M32 25 L27 23 M16 25 L19 31 M32 25 L29 31 M19 31 L24 37 M29 31 L24 37" stroke={black} strokeWidth="0.7" opacity="0.6" />
      <ellipse cx="20" cy="18" rx="4" ry="2.5" fill="white" fillOpacity="0.3" transform="rotate(-30 20 18)" />
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
        d="M30 12 C34 12 37 15 37 20 V28 C37 32 34 35 30 35 H22 C19 35 17 33 16 30 L12 26 L16 20 L20 14 H28 C29 13 29.5 12 30 12 Z"
        fill={color}
        fillOpacity="0.15"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <rect x="20" y="16" width="10" height="8" rx="2" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="1" />
      <circle cx="25" cy="28" r="5" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.1" />
      <circle cx="25" cy="28" r="2" fill={color} fillOpacity="0.4" />
      <circle cx="25" cy="28" r="0.8" fill="white" fillOpacity="0.5" />
      <rect x="14" y="26" width="6" height="10" rx="2" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.2" transform="rotate(-10 17 31)" />
      <path d="M12 26 L8 24" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M37 22 L41 20" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="28" cy="16" rx="4" ry="2" fill="white" fillOpacity="0.15" />
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
        d="M8 10 L20 14 L32 10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M32 10 L28 34" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M28 34 C26 38 22 40 18 36 C14 32 16 28 20 28 C22 28 24 30 25 32"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M25 32 L28 38 L26 40 L23 36 Z" fill={color} fillOpacity="0.35" stroke={color} strokeWidth="1.2" strokeLinejoin="round" />
      <circle cx="8" cy="10" r="2" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1" />
      <ellipse cx="14" cy="12" rx="3" ry="1.5" fill="white" fillOpacity="0.15" transform="rotate(-20 14 12)" />
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
