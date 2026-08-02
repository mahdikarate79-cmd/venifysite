import { ReactNode } from 'react';

interface GameIconProps {
  className?: string;
  size?: number;
  color?: string;
}

function IconWrapper({ children, size = 48, className = '' }: { children: ReactNode; size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      {children}
    </svg>
  );
}

export function XOIcon({ size = 48, color = '#3767FA', className = '' }: GameIconProps) {
  return (
    <IconWrapper size={size} className={className}>
      <rect x="6" y="6" width="36" height="36" rx="5" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="2" />
      <path d="M13 13 L21 21 M21 13 L13 21" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="33" cy="33" r="6" stroke={color} strokeWidth="2.5" />
    </IconWrapper>
  );
}

export function QuizIcon({ size = 48, color = '#7B5CFA', className = '' }: GameIconProps) {
  return (
    <IconWrapper size={size} className={className}>
      <rect x="10" y="5" width="28" height="38" rx="4" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="2" />
      <circle cx="24" cy="17" r="7" stroke={color} strokeWidth="2" />
      <text x="24" y="20.5" fill={color} fontSize="11" fontWeight="bold" textAnchor="middle">?</text>
      <path d="M13 30h22M13 37h16" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </IconWrapper>
  );
}

export function ChimojiIcon({ size = 48, color = '#FBBF24', className = '' }: GameIconProps) {
  return (
    <IconWrapper size={size} className={className}>
      <circle cx="24" cy="24" r="17" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="2" />
      <circle cx="17" cy="20" r="2.5" fill={color} />
      <circle cx="31" cy="20" r="2.5" fill={color} />
      <path d="M15 31 Q24 39 33 31" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" />
    </IconWrapper>
  );
}

export function TruthOrDareIcon({ size = 48, color = '#22C55E', className = '' }: GameIconProps) {
  return (
    <IconWrapper size={size} className={className}>
      <g transform="translate(24 26) rotate(-30) translate(-24 -26)">
        <rect x="8" y="22" width="30" height="11" rx="5.5" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="2" />
        <path d="M8 24 C8 19 11 15 16 14 H24 C29 15 32 19 32 24" fill={color} fillOpacity="0.45" stroke={color} strokeWidth="2" />
        <rect x="13" y="11" width="9" height="5" rx="2" fill={color} fillOpacity="0.6" stroke={color} strokeWidth="1.5" />
        <ellipse cx="26" cy="26" rx="4" ry="2.5" fill="white" fillOpacity="0.25" />
      </g>
      <path d="M30 12 C34 14 36 18 35 22" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M33 10 L37 8" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </IconWrapper>
  );
}

export function HotSeatIcon({ size = 48, color = '#FB7185', className = '' }: GameIconProps) {
  const flame = '#F97316';
  return (
    <IconWrapper size={size} className={className}>
      <path d="M11 36 C10 32 10 28 12 25" stroke={flame} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M37 36 C38 32 38 28 36 25" stroke={flame} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M18 38 C18 34 20 31 24 29 C28 31 30 34 30 38" fill={flame} fillOpacity="0.4" stroke={flame} strokeWidth="1.5" />
      <path d="M24 9 C21 14 19 16 19 18 C19 20 21 20 24 15 C27 20 29 20 29 18 C29 16 27 14 24 9 Z" fill={flame} fillOpacity="0.55" stroke={flame} strokeWidth="1.5" />
      <path d="M13 21 L15 16 H33 L35 21 V29 C35 31 33 33 30 33 H18 C15 33 13 31 13 29 Z" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <path d="M15 21 L17 16 H31 L33 21" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5" />
      <rect x="16" y="29" width="4" height="7" rx="1" fill={color} fillOpacity="0.35" stroke={color} strokeWidth="1.5" />
      <rect x="28" y="29" width="4" height="7" rx="1" fill={color} fillOpacity="0.35" stroke={color} strokeWidth="1.5" />
    </IconWrapper>
  );
}

export function Connect4Icon({ size = 48, className = '' }: GameIconProps) {
  const blue = '#3B82F6';
  const red = '#EF4444';
  return (
    <IconWrapper size={size} className={className}>
      <rect x="6" y="6" width="36" height="36" rx="4" fill="#1e3a5f" fillOpacity="0.35" stroke={blue} strokeWidth="2" />
      {[0, 1, 2, 3].map((col) =>
        [0, 1, 2, 3].map((row) => (
          <circle key={`${col}-${row}`} cx={12 + col * 8} cy={12 + row * 8} r="3" fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="0.8" />
        ))
      )}
      <circle cx="12" cy="28" r="3" fill={red} />
      <circle cx="20" cy="20" r="3" fill={blue} />
      <circle cx="28" cy="28" r="3" fill={red} />
      <circle cx="36" cy="20" r="3" fill={blue} />
      <circle cx="20" cy="36" r="3" fill={red} />
      <circle cx="28" cy="36" r="3" fill={blue} />
    </IconWrapper>
  );
}

export function LudoIcon({ size = 48, color = '#2DD4BF', className = '' }: GameIconProps) {
  return (
    <IconWrapper size={size} className={className}>
      <rect x="6" y="6" width="36" height="36" rx="4" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="2" />
      <circle cx="15" cy="15" r="5" fill={color} fillOpacity="0.45" />
      <circle cx="33" cy="15" r="5" fill="#EF4444" fillOpacity="0.45" />
      <circle cx="15" cy="33" r="5" fill="#FBBF24" fillOpacity="0.45" />
      <circle cx="33" cy="33" r="5" fill="#3B82F6" fillOpacity="0.45" />
      <rect x="19" y="19" width="10" height="10" fill={color} fillOpacity="0.2" />
    </IconWrapper>
  );
}

export function RockPaperScissorsIcon({ size = 48, color = '#A78BFA', className = '' }: GameIconProps) {
  return (
    <IconWrapper size={size} className={className}>
      <path
        d="M14 36 C11 36 9 33 9 29 C9 25 11 21 14 19 C16 17 18 17 19 18 C20 19 20 21 19 24 L17 36 Z"
        fill={color}
        fillOpacity="0.25"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M19 18 C20 14 22 10 25 8 C27 7 29 8 30 11 C31 14 30 18 28 22 L25 30" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M25 8 C27 6 30 6 32 8 C34 10 34 14 32 18 L29 26" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="16" cy="18" r="4" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="2" />
    </IconWrapper>
  );
}

export function DuelDiceIcon({ size = 48, color = '#3767FA', className = '' }: GameIconProps) {
  return (
    <IconWrapper size={size} className={className}>
      <rect x="10" y="10" width="28" height="28" rx="6" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2" />
      <circle cx="17" cy="17" r="2.5" fill={color} />
      <circle cx="31" cy="17" r="2.5" fill={color} />
      <circle cx="24" cy="24" r="2.5" fill={color} />
      <circle cx="17" cy="31" r="2.5" fill={color} />
      <circle cx="31" cy="31" r="2.5" fill={color} />
    </IconWrapper>
  );
}

export function DuelBowlingIcon({ size = 48, color = '#F97316', className = '' }: GameIconProps) {
  return (
    <IconWrapper size={size} className={className}>
      <path d="M6 40 H42" stroke={color} strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M21 14 L24 8 L27 14 L24 26 Z" fill={color} fillOpacity="0.35" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <path d="M15 16 L18 10 L21 16 L18 26 Z" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <path d="M27 16 L30 10 L33 16 L30 26 Z" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <ellipse cx="18" cy="10" rx="2.5" ry="2" fill={color} fillOpacity="0.5" />
      <ellipse cx="24" cy="8" rx="2.5" ry="2" fill={color} fillOpacity="0.5" />
      <ellipse cx="30" cy="10" rx="2.5" ry="2" fill={color} fillOpacity="0.5" />
      <circle cx="35" cy="34" r="7" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="2" />
      <circle cx="33" cy="33" r="1.2" fill={color} />
      <circle cx="37" cy="33" r="1.2" fill={color} />
      <circle cx="35" cy="36" r="1.2" fill={color} />
    </IconWrapper>
  );
}

export function DuelFootballIcon({ size = 48, className = '' }: GameIconProps) {
  const black = '#111';
  return (
    <IconWrapper size={size} className={className}>
      <circle cx="24" cy="24" r="17" fill="white" stroke={black} strokeWidth="2" />
      <path d="M24 9 L29.5 15 L28 24 L20 24 L18.5 15 Z" fill={black} fillOpacity="0.9" />
      <path d="M24 9 L18.5 15 M24 9 L29.5 15 M18.5 15 L12 18 M29.5 15 L36 18" stroke={black} strokeWidth="1" opacity="0.5" />
      <path d="M12 18 L14.5 25 M36 18 L33.5 25 M14.5 25 L20 24 M33.5 25 L28 24 M14.5 25 L17.5 33 M33.5 25 L30.5 33 M17.5 33 L24 39 M30.5 33 L24 39" stroke={black} strokeWidth="1" opacity="0.5" />
    </IconWrapper>
  );
}

export function DuelBasketballIcon({ size = 48, color = '#F59E0B', className = '' }: GameIconProps) {
  return (
    <IconWrapper size={size} className={className}>
      <circle cx="24" cy="26" r="16" fill={color} fillOpacity="0.18" stroke={color} strokeWidth="2" />
      <path d="M8 26h32M24 10v32" stroke={color} strokeWidth="1.5" strokeOpacity="0.45" />
      <path d="M12 12 Q24 26 12 40 M36 12 Q24 26 36 40" stroke={color} strokeWidth="1.5" strokeOpacity="0.45" fill="none" />
    </IconWrapper>
  );
}

export function DuelDartIcon({ size = 48, color = '#EC4899', className = '' }: GameIconProps) {
  return (
    <IconWrapper size={size} className={className}>
      <circle cx="24" cy="24" r="17" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="2" />
      <circle cx="24" cy="24" r="11" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" />
      <circle cx="24" cy="24" r="5" fill="#EF4444" fillOpacity="0.6" />
      <circle cx="24" cy="24" r="2" fill="white" />
      <path d="M24 6 L27 20 L24 24 L21 20 Z" fill={color} stroke={color} strokeWidth="1" />
    </IconWrapper>
  );
}

export function RussianRouletteIcon({ size = 48, color = '#DC2626', className = '' }: GameIconProps) {
  return (
    <IconWrapper size={size} className={className}>
      <path
        d="M26 10 H30 C34 10 37 13 37 18 V27 C37 31 34 34 30 34 H22 C19 34 17 32 16 29 L12 25 L15 19 L19 13 H26 Z"
        fill={color}
        fillOpacity="0.2"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect x="19" y="15" width="11" height="9" rx="2" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.5" />
      <circle cx="24.5" cy="27" r="6" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.1" />
      <circle cx="24.5" cy="27" r="2.5" fill={color} />
      <rect x="13" y="25" width="7" height="11" rx="2" fill={color} fillOpacity="0.35" stroke={color} strokeWidth="1.5" transform="rotate(-8 16.5 30.5)" />
      <path d="M12 25 L8 23" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M37 20 L40 18" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </IconWrapper>
  );
}

export function RouletteIcon({ size = 48, color = '#10B981', className = '' }: GameIconProps) {
  return (
    <IconWrapper size={size} className={className}>
      <circle cx="24" cy="24" r="18" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="2" />
      <circle cx="24" cy="24" r="12" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" />
      <circle cx="24" cy="24" r="5" fill={color} fillOpacity="0.45" />
      <circle cx="24" cy="8" r="2.5" fill="#EF4444" />
      <circle cx="37" cy="30" r="2.5" fill="#22C55E" />
      <circle cx="11" cy="30" r="2.5" fill="#9CA3AF" />
    </IconWrapper>
  );
}

export function SlotMachineIcon({ size = 48, color = '#7B5CFA', className = '' }: GameIconProps) {
  return (
    <IconWrapper size={size} className={className}>
      <rect x="5" y="11" width="38" height="26" rx="4" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="2" />
      <rect x="9" y="15" width="9" height="18" rx="2" fill={color} fillOpacity="0.28" />
      <rect x="19.5" y="15" width="9" height="18" rx="2" fill={color} fillOpacity="0.28" />
      <rect x="30" y="15" width="9" height="18" rx="2" fill={color} fillOpacity="0.28" />
      <text x="13.5" y="28" fill={color} fontSize="11" fontWeight="bold" textAnchor="middle">7</text>
      <text x="24" y="28" fill={color} fontSize="11" fontWeight="bold" textAnchor="middle">7</text>
      <text x="34.5" y="28" fill={color} fontSize="11" fontWeight="bold" textAnchor="middle">7</text>
    </IconWrapper>
  );
}

export function DiceBetIcon({ size = 48, color = '#3B82F6', className = '' }: GameIconProps) {
  return (
    <IconWrapper size={size} className={className}>
      <rect x="8" y="8" width="32" height="32" rx="7" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="2" />
      <circle cx="16" cy="16" r="3" fill={color} />
      <circle cx="32" cy="16" r="3" fill={color} />
      <circle cx="24" cy="24" r="3" fill={color} />
      <circle cx="16" cy="32" r="3" fill={color} />
      <circle cx="32" cy="32" r="3" fill={color} />
    </IconWrapper>
  );
}

export function FishingIcon({ size = 48, color = '#06B6D4', className = '' }: GameIconProps) {
  return (
    <IconWrapper size={size} className={className}>
      <path d="M6 8 L18 13 L34 8" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M34 8 L30 36" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M30 36 C27 40 22 41 18 37 C14 33 16 29 20 29 C22 29 24 31 25 33" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M25 33 L29 40 L26 42 L22 37 Z" fill={color} fillOpacity="0.4" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="6" cy="8" r="2.5" fill={color} fillOpacity="0.35" stroke={color} strokeWidth="1.5" />
    </IconWrapper>
  );
}

export function ClawMachineIcon({ size = 48, color = '#E879F9', className = '' }: GameIconProps) {
  return (
    <IconWrapper size={size} className={className}>
      <rect x="5" y="5" width="38" height="38" rx="4" fill={color} fillOpacity="0.08" stroke={color} strokeWidth="2" />
      <rect x="5" y="5" width="38" height="9" rx="4" fill={color} fillOpacity="0.22" />
      <path d="M17 14 V19 M31 14 V19" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M17 19 H31" stroke={color} strokeWidth="2" />
      <path d="M24 19 V25" stroke={color} strokeWidth="2" />
      <path d="M17 25 L19 30 L24 28 L29 30 L31 25" stroke={color} strokeWidth="2" strokeLinejoin="round" fill="none" />
      <path d="M19 30 V34 M29 30 V34" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <ellipse cx="24" cy="38" rx="6" ry="4.5" fill={color} fillOpacity="0.4" stroke={color} strokeWidth="1.5" />
      <circle cx="13" cy="39" r="3.5" fill="#F472B6" fillOpacity="0.55" stroke="#F472B6" strokeWidth="1" />
      <circle cx="35" cy="39" r="3" fill="#FBBF24" fillOpacity="0.55" stroke="#FBBF24" strokeWidth="1" />
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
