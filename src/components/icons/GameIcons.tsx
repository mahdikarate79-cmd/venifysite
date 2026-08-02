import { ReactNode } from 'react';

export interface GameIconProps {
  className?: string;
  size?: number;
  color?: string;
}

function Icon({ children, size = 48, className = '' }: { children: ReactNode; size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <circle cx="24" cy="24" r="21" fill="white" fillOpacity="0.04" />
      {children}
    </svg>
  );
}

/* ─── 1. XO ─── */
export function XOIcon({ size = 48, color = '#3767FA', className = '' }: GameIconProps) {
  return (
    <Icon size={size} className={className}>
      <rect x="7" y="7" width="34" height="34" rx="6" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1.8" />
      <line x1="13" y1="13" x2="21" y2="21" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="21" y1="13" x2="13" y2="21" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="33" cy="33" r="5.5" stroke={color} strokeWidth="2.5" />
    </Icon>
  );
}

/* ─── 2. Quiz ─── */
export function QuizIcon({ size = 48, color = '#7B5CFA', className = '' }: GameIconProps) {
  return (
    <Icon size={size} className={className}>
      <rect x="11" y="6" width="26" height="36" rx="4" fill={color} fillOpacity="0.14" stroke={color} strokeWidth="1.8" />
      <circle cx="24" cy="18" r="7" stroke={color} strokeWidth="1.8" />
      <text x="24" y="21.5" fill={color} fontSize="11" fontWeight="700" textAnchor="middle">?</text>
      <line x1="15" y1="30" x2="33" y2="30" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="15" y1="36" x2="28" y2="36" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </Icon>
  );
}

/* ─── 3. Chimoji ─── */
export function ChimojiIcon({ size = 48, color = '#FBBF24', className = '' }: GameIconProps) {
  return (
    <Icon size={size} className={className}>
      <circle cx="24" cy="24" r="16" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.8" />
      <circle cx="18" cy="20" r="2.2" fill={color} />
      <circle cx="30" cy="20" r="2.2" fill={color} />
      <path d="M17 30 Q24 37 31 30" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" />
    </Icon>
  );
}

/* ─── 4. Truth or Dare — spin bottle ─── */
export function TruthOrDareIcon({ size = 48, color = '#22C55E', className = '' }: GameIconProps) {
  return (
    <Icon size={size} className={className}>
      <path d="M30 10 C35 12 37 17 35 22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2" opacity="0.6" fill="none" />
      <g transform="rotate(-35 24 24)">
        <rect x="9" y="21" width="28" height="10" rx="5" fill={color} fillOpacity="0.35" stroke={color} strokeWidth="1.8" />
        <path d="M9 23 C9 18 12 14 17 13 H23 C28 14 31 18 31 23" fill={color} fillOpacity="0.5" stroke={color} strokeWidth="1.8" />
        <rect x="14" y="10" width="8" height="5" rx="2" fill={color} fillOpacity="0.7" stroke={color} strokeWidth="1.2" />
        <ellipse cx="27" cy="25" rx="3.5" ry="2" fill="white" fillOpacity="0.25" />
      </g>
    </Icon>
  );
}

/* ─── 5. Hot Seat — chair + flames ─── */
export function HotSeatIcon({ size = 48, color = '#FB7185', className = '' }: GameIconProps) {
  const f = '#F97316';
  return (
    <Icon size={size} className={className}>
      <path d="M10 36 C9 32 9 28 11 25" stroke={f} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M38 36 C39 32 39 28 37 25" stroke={f} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M19 38 C19 34 21 31 24 29 C27 31 29 34 29 38" fill={f} fillOpacity="0.45" stroke={f} strokeWidth="1.5" />
      <path d="M24 8 C21 13 19 15 19 17 C19 19 21 19 24 14 C27 19 29 19 29 17 C29 15 27 13 24 8Z" fill={f} fillOpacity="0.6" stroke={f} strokeWidth="1.2" />
      <path d="M14 20 L16 15 H32 L34 20 V28 C34 30 32 32 29 32 H19 C16 32 14 30 14 28Z" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      <rect x="17" y="28" width="3.5" height="7" rx="1" fill={color} fillOpacity="0.4" stroke={color} strokeWidth="1.2" />
      <rect x="27.5" y="28" width="3.5" height="7" rx="1" fill={color} fillOpacity="0.4" stroke={color} strokeWidth="1.2" />
    </Icon>
  );
}

/* ─── 6. Connect 4 ─── */
export function Connect4Icon({ size = 48, className = '' }: GameIconProps) {
  const b = '#3B82F6', r = '#EF4444';
  return (
    <Icon size={size} className={className}>
      <rect x="7" y="7" width="34" height="34" rx="4" fill="#0f2040" fillOpacity="0.5" stroke={b} strokeWidth="1.8" />
      {[0,1,2,3].map(c => [0,1,2,3].map(row => (
        <circle key={`${c}${row}`} cx={13+c*7.5} cy={13+row*7.5} r="2.8" fill="none" stroke="white" strokeOpacity="0.15" strokeWidth="0.8" />
      )))}
      <circle cx="13" cy="28.5" r="2.8" fill={r} /><circle cx="20.5" cy="20.5" r="2.8" fill={b} />
      <circle cx="28" cy="28.5" r="2.8" fill={r} /><circle cx="35.5" cy="20.5" r="2.8" fill={b} />
      <circle cx="20.5" cy="35.5" r="2.8" fill={r} /><circle cx="28" cy="35.5" r="2.8" fill={b} />
    </Icon>
  );
}

/* ─── 7. Ludo ─── */
export function LudoIcon({ size = 48, color = '#2DD4BF', className = '' }: GameIconProps) {
  return (
    <Icon size={size} className={className}>
      <rect x="7" y="7" width="34" height="34" rx="4" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1.8" />
      <circle cx="15" cy="15" r="5" fill={color} fillOpacity="0.5" />
      <circle cx="33" cy="15" r="5" fill="#EF4444" fillOpacity="0.5" />
      <circle cx="15" cy="33" r="5" fill="#FBBF24" fillOpacity="0.5" />
      <circle cx="33" cy="33" r="5" fill="#3B82F6" fillOpacity="0.5" />
      <rect x="19" y="19" width="10" height="10" fill="white" fillOpacity="0.08" stroke={color} strokeWidth="1" />
    </Icon>
  );
}

/* ─── 8. Rock Paper Scissors — ✌️ ─── */
export function RockPaperScissorsIcon({ size = 48, color = '#A78BFA', className = '' }: GameIconProps) {
  return (
    <Icon size={size} className={className}>
      <path d="M13 37 C10 37 8 34 8 30 C8 26 10 22 13 20 C15 18 17 18 18 19 C19 20 19 22 18 25 L16 37Z" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M18 19 C19 15 21 11 24 9 C26 8 28 9 29 12 C30 15 29 19 27 23 L24 31" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M24 9 C26 7 29 7 31 9 C33 11 33 15 31 19 L28 27" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="15" cy="19" r="4" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.8" />
    </Icon>
  );
}

/* ─── 9. Duel Dice ─── */
export function DuelDiceIcon({ size = 48, color = '#3767FA', className = '' }: GameIconProps) {
  return (
    <Icon size={size} className={className}>
      <rect x="10" y="10" width="28" height="28" rx="6" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.8" />
      {[[17,17],[31,17],[24,24],[17,31],[31,31]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="2.5" fill={color} />
      ))}
    </Icon>
  );
}

/* ─── 10. Duel Bowling 🎳 ─── */
export function DuelBowlingIcon({ size = 48, color = '#F97316', className = '' }: GameIconProps) {
  const pin = (cx: number) => (
    <g key={cx}>
      <ellipse cx={cx} cy="11" rx="3" ry="2" fill={color} fillOpacity="0.5" />
      <path d={`M${cx-3} 13 L${cx-2} 26 L${cx+2} 26 L${cx+3} 13 Z`} fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <rect x={cx-2} y="13" width="4" height="3" rx="0.5" fill={color} fillOpacity="0.6" />
    </g>
  );
  return (
    <Icon size={size} className={className}>
      <line x1="6" y1="40" x2="42" y2="40" stroke={color} strokeOpacity="0.3" strokeWidth="1.5" />
      {pin(17)}{pin(24)}{pin(31)}
      <circle cx="36" cy="34" r="6.5" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="1.8" />
      <circle cx="34.5" cy="33" r="1" fill={color} /><circle cx="37.5" cy="33" r="1" fill={color} /><circle cx="36" cy="35.5" r="1" fill={color} />
    </Icon>
  );
}

/* ─── 11. Duel Football ⚽ ─── */
export function DuelFootballIcon({ size = 48, className = '' }: GameIconProps) {
  const k = '#111';
  return (
    <Icon size={size} className={className}>
      <circle cx="24" cy="24" r="16" fill="white" stroke={k} strokeWidth="1.8" />
      <polygon points="24,10 29.5,16 28,24 20,24 18.5,16" fill={k} fillOpacity="0.9" />
      <line x1="24" y1="10" x2="18.5" y2="16" stroke={k} strokeWidth="0.8" opacity="0.4" />
      <line x1="24" y1="10" x2="29.5" y2="16" stroke={k} strokeWidth="0.8" opacity="0.4" />
      <line x1="18.5" y1="16" x2="13" y2="19" stroke={k} strokeWidth="0.8" opacity="0.4" />
      <line x1="29.5" y1="16" x2="35" y2="19" stroke={k} strokeWidth="0.8" opacity="0.4" />
      <line x1="13" y1="19" x2="15.5" y2="26" stroke={k} strokeWidth="0.8" opacity="0.4" />
      <line x1="35" y1="19" x2="32.5" y2="26" stroke={k} strokeWidth="0.8" opacity="0.4" />
      <line x1="15.5" y1="26" x2="20" y2="24" stroke={k} strokeWidth="0.8" opacity="0.4" />
      <line x1="32.5" y1="26" x2="28" y2="24" stroke={k} strokeWidth="0.8" opacity="0.4" />
      <line x1="15.5" y1="26" x2="18.5" y2="33" stroke={k} strokeWidth="0.8" opacity="0.4" />
      <line x1="32.5" y1="26" x2="29.5" y2="33" stroke={k} strokeWidth="0.8" opacity="0.4" />
      <line x1="18.5" y1="33" x2="24" y2="38" stroke={k} strokeWidth="0.8" opacity="0.4" />
      <line x1="29.5" y1="33" x2="24" y2="38" stroke={k} strokeWidth="0.8" opacity="0.4" />
    </Icon>
  );
}

/* ─── 12. Duel Basketball ─── */
export function DuelBasketballIcon({ size = 48, color = '#F59E0B', className = '' }: GameIconProps) {
  return (
    <Icon size={size} className={className}>
      <circle cx="24" cy="25" r="15" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.8" />
      <line x1="9" y1="25" x2="39" y2="25" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <line x1="24" y1="10" x2="24" y2="40" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <path d="M13 13 Q24 25 13 37" stroke={color} strokeWidth="1.5" opacity="0.5" fill="none" />
      <path d="M35 13 Q24 25 35 37" stroke={color} strokeWidth="1.5" opacity="0.5" fill="none" />
    </Icon>
  );
}

/* ─── 13. Duel Dart ─── */
export function DuelDartIcon({ size = 48, color = '#EC4899', className = '' }: GameIconProps) {
  return (
    <Icon size={size} className={className}>
      <circle cx="24" cy="24" r="16" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1.8" />
      <circle cx="24" cy="24" r="10" stroke={color} strokeWidth="1.2" opacity="0.4" />
      <circle cx="24" cy="24" r="4.5" fill="#EF4444" fillOpacity="0.7" />
      <circle cx="24" cy="24" r="1.5" fill="white" />
      <path d="M24 6 L26.5 19 L24 24 L21.5 19 Z" fill={color} stroke={color} strokeWidth="0.8" />
    </Icon>
  );
}

/* ─── 14. Russian Roulette — revolver ─── */
export function RussianRouletteIcon({ size = 48, color = '#DC2626', className = '' }: GameIconProps) {
  return (
    <Icon size={size} className={className}>
      <rect x="20" y="14" width="12" height="10" rx="2" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.5" />
      <path d="M32 14 H36 C38 14 39 16 39 18 V22 H32 Z" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="24" cy="27" r="7" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1.8" />
      <circle cx="24" cy="27" r="2.5" fill={color} />
      <rect x="12" y="25" width="8" height="12" rx="2" fill={color} fillOpacity="0.35" stroke={color} strokeWidth="1.5" transform="rotate(-6 16 31)" />
      <line x1="11" y1="25" x2="7" y2="23" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="39" y1="20" x2="42" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </Icon>
  );
}

/* ─── 15. Roulette ─── */
export function RouletteIcon({ size = 48, color = '#10B981', className = '' }: GameIconProps) {
  return (
    <Icon size={size} className={className}>
      <circle cx="24" cy="24" r="17" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1.8" />
      <circle cx="24" cy="24" r="11" stroke={color} strokeWidth="1.2" opacity="0.4" />
      <circle cx="24" cy="24" r="4" fill={color} fillOpacity="0.5" />
      <circle cx="24" cy="9" r="2.5" fill="#EF4444" />
      <circle cx="36" cy="30" r="2.5" fill="#22C55E" />
      <circle cx="12" cy="30" r="2.5" fill="#9CA3AF" />
    </Icon>
  );
}

/* ─── 16. Slot Machine ─── */
export function SlotMachineIcon({ size = 48, color = '#7B5CFA', className = '' }: GameIconProps) {
  return (
    <Icon size={size} className={className}>
      <rect x="5" y="12" width="38" height="24" rx="4" fill={color} fillOpacity="0.14" stroke={color} strokeWidth="1.8" />
      {[10, 19.5, 29].map(x => <rect key={x} x={x} y="16" width="9" height="16" rx="2" fill={color} fillOpacity="0.25" />)}
      <text x="14.5" y="28" fill={color} fontSize="11" fontWeight="700" textAnchor="middle">7</text>
      <text x="24" y="28" fill={color} fontSize="11" fontWeight="700" textAnchor="middle">7</text>
      <text x="33.5" y="28" fill={color} fontSize="11" fontWeight="700" textAnchor="middle">7</text>
      <rect x="18" y="37" width="12" height="3" rx="1.5" fill={color} fillOpacity="0.4" />
    </Icon>
  );
}

/* ─── 17. Dice Bet ─── */
export function DiceBetIcon({ size = 48, color = '#3B82F6', className = '' }: GameIconProps) {
  return (
    <Icon size={size} className={className}>
      <rect x="8" y="8" width="30" height="30" rx="6" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.8" />
      {[[16,16],[30,16],[23,23],[16,30],[30,30]].map(([cx,cy],i) => <circle key={i} cx={cx} cy={cy} r="2.5" fill={color} />)}
      <circle cx="38" cy="38" r="6" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.5" />
      <text x="38" y="40.5" fill="white" fontSize="7" fontWeight="700" textAnchor="middle">$</text>
    </Icon>
  );
}

/* ─── 18. Fishing 🎣 ─── */
export function FishingIcon({ size = 48, color = '#06B6D4', className = '' }: GameIconProps) {
  return (
    <Icon size={size} className={className}>
      <path d="M6 7 L20 12 L36 7" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="36" y1="7" x2="32" y2="35" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M32 35 C29 39 24 40 20 36 C16 32 18 28 22 28 C24 28 26 30 27 32" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M27 32 L31 39 L28 41 L24 36 Z" fill={color} fillOpacity="0.45" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="6" cy="7" r="2.5" fill={color} fillOpacity="0.35" stroke={color} strokeWidth="1.2" />
    </Icon>
  );
}

/* ─── 19. Claw Machine ─── */
export function ClawMachineIcon({ size = 48, color = '#E879F9', className = '' }: GameIconProps) {
  return (
    <Icon size={size} className={className}>
      <rect x="5" y="5" width="38" height="38" rx="4" fill={color} fillOpacity="0.08" stroke={color} strokeWidth="1.8" />
      <rect x="5" y="5" width="38" height="8" rx="4" fill={color} fillOpacity="0.22" />
      <line x1="17" y1="13" x2="17" y2="18" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="31" y1="13" x2="31" y2="18" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="17" y1="18" x2="31" y2="18" stroke={color} strokeWidth="1.8" />
      <line x1="24" y1="18" x2="24" y2="24" stroke={color} strokeWidth="1.8" />
      <path d="M17 24 L19 29 L24 27 L29 29 L31 24" stroke={color} strokeWidth="1.8" strokeLinejoin="round" fill="none" />
      <line x1="19" y1="29" x2="19" y2="33" stroke={color} strokeWidth="1.5" />
      <line x1="29" y1="29" x2="29" y2="33" stroke={color} strokeWidth="1.5" />
      <ellipse cx="24" cy="37" rx="5.5" ry="4" fill="#F472B6" fillOpacity="0.5" stroke="#F472B6" strokeWidth="1.2" />
      <circle cx="24" cy="35" r="1.5" fill="white" fillOpacity="0.5" />
    </Icon>
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
