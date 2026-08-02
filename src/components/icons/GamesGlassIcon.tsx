export type GamesIconState = 'normal' | 'hover' | 'active' | 'disabled';

interface GamesGlassIconProps {
  className?: string;
  size?: number;
  state?: GamesIconState;
}

const glowOpacity: Record<GamesIconState, number> = {
  normal: 0.42,
  hover: 0.58,
  active: 0.78,
  disabled: 0.28,
};

const bodyOpacity: Record<GamesIconState, number> = {
  normal: 0.88,
  hover: 0.95,
  active: 1,
  disabled: 0.62,
};

/** Premium liquid-glass PS5-style gamepad for bottom navigation */
export default function GamesGlassIcon({
  className = '',
  size = 24,
  state = 'normal',
}: GamesGlassIconProps) {
  const glow = glowOpacity[state];
  const bodyAlpha = bodyOpacity[state];
  const uid = 'venify-games-glass';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={`games-glass-icon games-glass-icon--${state} ${className}`.trim()}
      aria-hidden
    >
      <defs>
        <linearGradient id={`${uid}-body`} x1="24" y1="4" x2="24" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.92 * bodyAlpha} />
          <stop offset="45%" stopColor="#E8EEFF" stopOpacity={0.55 * bodyAlpha} />
          <stop offset="100%" stopColor="#9BB4FF" stopOpacity={0.22 * bodyAlpha} />
        </linearGradient>

        <linearGradient id={`${uid}-shine`} x1="14" y1="8" x2="34" y2="18" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.7 * bodyAlpha} />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        <radialGradient id={`${uid}-glow`} cx="24" cy="22" r="18" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3767FA" stopOpacity={glow} />
          <stop offset="70%" stopColor="#3767FA" stopOpacity={glow * 0.35} />
          <stop offset="100%" stopColor="#3767FA" stopOpacity="0" />
        </radialGradient>

        <filter id={`${uid}-blur`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2.2" />
        </filter>

        <filter id={`${uid}-soft`} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="0" stdDeviation="1.2" floodColor="#3767FA" floodOpacity={glow * 0.85} />
          <feDropShadow dx="0" dy="1" stdDeviation="0.6" floodColor="#FFFFFF" floodOpacity={0.18 * bodyAlpha} />
        </filter>
      </defs>

      {/* Outer blue glow */}
      <ellipse cx="24" cy="22" rx="17" ry="14" fill={`url(#${uid}-glow)`} filter={`url(#${uid}-blur)`} />

      {/* Controller body */}
      <g filter={`url(#${uid}-soft)`}>
        <path
          fill={`url(#${uid}-body)`}
          stroke="rgba(255,255,255,0.38)"
          strokeWidth="0.75"
          strokeLinejoin="round"
          d="M24 5.25c-6.85 0-12.2 2.55-14.65 6.55-1.35 2.15-2.05 4.55-2.05 7.05v2.35c0 1.85.65 3.65 1.75 5.05l1.1 1.35c.75.9 1.65 1.55 2.75 1.85l1.35.4c.75.2 1.55.05 2.15-.45l1.1-1 1.45-1.3L24 26.5l1.95 1.75 1.45 1.3 1.1 1c.6.5 1.4.65 2.15.45l1.35-.4c1.1-.3 2-0.95 2.75-1.85l1.1-1.35c1.1-1.4 1.75-3.2 1.75-5.05v-2.35c0-2.5-0.7-4.9-2.05-7.05C36.2 7.8 30.85 5.25 24 5.25zm-12.85 21.1-2.55 4.05c-1.15 1.85-.7 3.95 1.05 4.75 1.35.6 2.75-.05 3.55-1.85l1.65-3.35c-1.35-.55-2.45-1.2-3.7-1.6zm25.7 0c-1.25.4-2.35 1.05-3.7 1.6l1.65 3.35c.8 1.8 2.2 2.45 3.55 1.85 1.75-.8 2.2-2.9 1.05-4.75l-2.55-4.05z"
        />

        {/* Glass shine overlay */}
        <path
          fill={`url(#${uid}-shine)`}
          d="M15.5 9.5c2.2-1.35 4.85-2 8.5-2s6.3.65 8.5 2c1.45.9 2.5 2.1 3.1 3.45-1.35-.75-3.15-1.2-5.2-1.2h-12.6c-2.05 0-3.85.45-5.2 1.2.6-1.35 1.65-2.55 3.1-3.45z"
        />

        {/* Touchpad */}
        <rect x="16.25" y="10.75" width="15.5" height="6.25" rx="2.2" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.22)" strokeWidth="0.5" />

        {/* Analog sticks */}
        <circle cx="14.25" cy="24.75" r="2.65" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.42)" strokeWidth="0.65" />
        <circle cx="33.75" cy="24.75" r="2.65" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.42)" strokeWidth="0.65" />

        {/* D-pad */}
        <rect x="18.9" y="21.35" width="1.35" height="4.2" rx="0.45" fill="rgba(255,255,255,0.75)" />
        <rect x="17.55" y="22.7" width="4.2" height="1.35" rx="0.45" fill="rgba(255,255,255,0.75)" />

        {/* Face buttons */}
        <circle cx="35.15" cy="20.15" r="0.95" fill="rgba(255,255,255,0.82)" />
        <circle cx="37.35" cy="22.35" r="0.95" fill="rgba(255,255,255,0.82)" />
        <circle cx="35.15" cy="24.55" r="0.95" fill="rgba(255,255,255,0.82)" />
        <circle cx="32.95" cy="22.35" r="0.95" fill="rgba(255,255,255,0.82)" />
      </g>
    </svg>
  );
}
