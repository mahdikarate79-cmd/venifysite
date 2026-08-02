interface IconProps {
  className?: string;
  size?: number;
}

/** PS5 DualSense — filled silhouette, transparent background, inherits nav color via currentColor */
export function GamesIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <defs>
        <mask id="venify-ps5-cutouts">
          <rect width="24" height="24" fill="white" />
          <rect x="8.2" y="5.55" width="7.6" height="3.55" rx="0.8" fill="black" />
          <rect x="6.15" y="4.85" width="1.6" height="0.95" rx="0.48" fill="black" />
          <rect x="16.25" y="4.85" width="1.6" height="0.95" rx="0.48" fill="black" />
          <rect x="6.35" y="10.35" width="1.1" height="3.25" rx="0.25" fill="black" />
          <rect x="5.65" y="11.05" width="2.5" height="1.1" rx="0.25" fill="black" />
          <circle cx="8.05" cy="13.75" r="1.7" fill="black" />
          <circle cx="15.95" cy="13.75" r="1.7" fill="black" />
          <circle cx="17.05" cy="10.45" r="0.65" fill="black" />
          <circle cx="18.55" cy="11.75" r="0.65" fill="black" />
          <circle cx="17.05" cy="13.05" r="0.65" fill="black" />
          <circle cx="15.55" cy="11.75" r="0.65" fill="black" />
        </mask>
      </defs>
      <path
        fill="currentColor"
        mask="url(#venify-ps5-cutouts)"
        d="M12 2.45c4.05 0 7.2 1.4 8.95 3.85.9 1.3 1.35 2.75 1.35 4.25v1.25c0 1.4-.55 2.75-1.55 3.8l-1.15 1.3c-.45.5-.85.95-1.35 1.25l-.65.35c-.4.2-.85.3-1.3.25l-1.1-.2-.85-.55-.55-.75H9.5l-.55.75-.85.55-1.1.2c-.45.05-.9-.05-1.3-.25l-.65-.35c-.5-.3-.9-.75-1.35-1.25l-1.15-1.3C2.55 14.35 2 13 2 11.6v-1.25c0-1.5.45-2.95 1.35-4.25C5.1 3.85 8.25 2.45 12 2.45zM4.85 17.5L3.1 20.45c-.55.9-.2 1.8.75 2.05.95.25 1.8-.35 2.25-1.4l1.25-2.75c-1-.3-1.85-.55-2.5-.85zM19.15 17.5c-.65.3-1.5.55-2.5.85l1.25 2.75c.45 1.05 1.3 1.65 2.25 1.4.95-.25 1.3-1.15.75-2.05l-1.75-2.95z"
      />
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
