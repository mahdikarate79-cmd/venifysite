interface GameIconProps {
  className?: string;
  size?: number;
  color?: string;
}

export function DiceIcon({ className = '', size = 48, color = '#3767FA' }: GameIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect x="8" y="8" width="32" height="32" rx="6" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5" />
      <circle cx="18" cy="18" r="2.5" fill={color} />
      <circle cx="30" cy="18" r="2.5" fill={color} />
      <circle cx="24" cy="24" r="2.5" fill={color} />
      <circle cx="18" cy="30" r="2.5" fill={color} />
      <circle cx="30" cy="30" r="2.5" fill={color} />
    </svg>
  );
}

export function SlotsIcon({ className = '', size = 48, color = '#7B5CFA' }: GameIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect x="6" y="12" width="36" height="24" rx="4" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5" />
      <rect x="10" y="16" width="8" height="16" rx="2" fill={color} fillOpacity="0.3" />
      <rect x="20" y="16" width="8" height="16" rx="2" fill={color} fillOpacity="0.3" />
      <rect x="30" y="16" width="8" height="16" rx="2" fill={color} fillOpacity="0.3" />
      <text x="14" y="28" fill={color} fontSize="10" fontWeight="bold" textAnchor="middle">7</text>
      <text x="24" y="28" fill={color} fontSize="10" fontWeight="bold" textAnchor="middle">7</text>
      <text x="34" y="28" fill={color} fontSize="10" fontWeight="bold" textAnchor="middle">7</text>
      <rect x="18" y="38" width="12" height="4" rx="2" fill={color} fillOpacity="0.5" />
    </svg>
  );
}

export function BlackjackIcon({ className = '', size = 48, color = '#2DD4BF' }: GameIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect x="10" y="6" width="20" height="28" rx="3" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5" transform="rotate(-8 20 20)" />
      <rect x="18" y="10" width="20" height="28" rx="3" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="1.5" transform="rotate(5 28 24)" />
      <text x="16" y="26" fill={color} fontSize="12" fontWeight="bold" transform="rotate(-8 20 20)">A</text>
      <text x="28" y="30" fill={color} fontSize="12" fontWeight="bold" transform="rotate(5 28 24)">K</text>
    </svg>
  );
}

export function RouletteIcon({ className = '', size = 48, color = '#F472B6' }: GameIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="24" r="18" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5" />
      <circle cx="24" cy="24" r="12" stroke={color} strokeWidth="1" strokeOpacity="0.5" />
      <circle cx="24" cy="24" r="4" fill={color} fillOpacity="0.4" />
      <circle cx="24" cy="10" r="2" fill={color} />
      <circle cx="36" cy="30" r="2" fill={color} fillOpacity="0.6" />
      <circle cx="12" cy="30" r="2" fill={color} fillOpacity="0.6" />
    </svg>
  );
}

export function PokerIcon({ className = '', size = 48, color = '#FBBF24' }: GameIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect x="8" y="12" width="16" height="22" rx="2" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5" />
      <rect x="16" y="8" width="16" height="22" rx="2" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="1.5" />
      <rect x="24" y="14" width="16" height="22" rx="2" fill={color} fillOpacity="0.35" stroke={color} strokeWidth="1.5" />
      <path d="M14 20h4M14 24h4M14 28h4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <text x="24" y="24" fill={color} fontSize="10" fontWeight="bold">♠</text>
      <text x="32" y="28" fill={color} fontSize="10" fontWeight="bold">♥</text>
    </svg>
  );
}

export function CrashIcon({ className = '', size = 48, color = '#FB7185' }: GameIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M6 40 L42 40" stroke={color} strokeWidth="1.5" strokeOpacity="0.3" />
      <path
        d="M6 38 Q 12 36, 18 28 T 30 12 L 36 8"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="36" cy="8" r="4" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.5" />
      <text x="28" y="22" fill={color} fontSize="8" fontWeight="bold">2.5x</text>
      <path d="M32 8 L38 4 M36 8 L40 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export const gameIconMap = {
  dice: DiceIcon,
  slots: SlotsIcon,
  blackjack: BlackjackIcon,
  roulette: RouletteIcon,
  poker: PokerIcon,
  crash: CrashIcon,
} as const;
