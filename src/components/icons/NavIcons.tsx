interface IconProps {
  className?: string;
  size?: number;
}

/** Minimal flat gamepad icon */
export function GamesIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M6 8.5h12c1.65 0 3 1.35 3 3v2c0 1.05-.7 1.95-1.7 2.1l-.85.1c-.5.05-.95-.2-1.2-.6l-.95-1.55H9.7l-.95 1.55c-.25.4-.7.65-1.2.6l-.85-.1C5.7 15.45 5 14.55 5 13.5v-2c0-1.65 1.35-3 3-3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M5 13.5c-.6.7-1.25 1.45-1.25 2.25 0 .9.7 1.5 1.45 1.5.55 0 1-.35 1.2-.9M19 13.5c.6.7 1.25 1.45 1.25 2.25 0 .9-.7 1.5-1.45 1.5-.55 0-1-.35-1.2-.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M12 15.25v2.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8.25 11.75v2.75M7.25 13.25h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="15.5" cy="11.75" r="0.8" fill="currentColor" />
      <circle cx="17.5" cy="11.75" r="0.8" fill="currentColor" />
      <circle cx="15.5" cy="13.75" r="0.8" fill="currentColor" />
      <circle cx="17.5" cy="13.75" r="0.8" fill="currentColor" />
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
