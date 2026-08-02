interface IconProps {
  className?: string;
  size?: number;
}

/** PS5 DualSense controller — monochrome nav icon */
export function GamesIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      {/* Body */}
      <path
        d="M6.5 9.5 H17.5 A2.5 2.5 0 0 1 20 12 V13.5 A3.5 3.5 0 0 1 16.5 17 H7.5 A3.5 3.5 0 0 1 4 13.5 V12 A2.5 2.5 0 0 1 6.5 9.5 Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Left handle */}
      <path d="M4 13.5 V16.5 C4 18 5 19 6.5 19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      {/* Right handle */}
      <path d="M20 13.5 V16.5 C20 18 19 19 17.5 19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      {/* Touchpad */}
      <rect x="9" y="10.5" width="6" height="3" rx="1" stroke="currentColor" strokeWidth="1.2" />
      {/* Left stick */}
      <circle cx="8.5" cy="14.5" r="1.6" stroke="currentColor" strokeWidth="1.2" />
      {/* D-pad */}
      <path d="M13.5 13.5 H14.5 M14 13 V14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* Face buttons (△○□× simplified) */}
      <circle cx="16.5" cy="13" r="0.7" fill="currentColor" />
      <circle cx="18" cy="14.5" r="0.7" fill="currentColor" />
      <circle cx="16.5" cy="16" r="0.7" fill="currentColor" />
      <circle cx="15" cy="14.5" r="0.7" fill="currentColor" />
    </svg>
  );
}

export function ChatIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="12" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="15" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

export function HelpIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9.5 9.5a2.5 2.5 0 1 1 4.2 1.8c-.8.6-1.2 1.1-1.2 2.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="17" r="0.75" fill="currentColor" />
    </svg>
  );
}

export function ProfileIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5 20c0-3.314 3.134-6 7-6s7 2.686 7 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GlobeIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 12h18M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9M12 3c-2.5 2.5-4 5.5-4 9s1.5 6.5 4 9" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
