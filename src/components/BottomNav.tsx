'use client';

import { useLocale } from '@/i18n/LocaleProvider';
import { GamesIcon, ChatIcon, HelpIcon, ProfileIcon } from '@/components/icons/NavIcons';

export type NavItem = 'games' | 'chat' | 'help' | 'profile';

interface BottomNavProps {
  active: NavItem;
  onNavigate: (item: NavItem) => void;
}

export default function BottomNav({ active, onNavigate }: BottomNavProps) {
  const { t } = useLocale();

  const centerItems: { id: NavItem; icon: typeof GamesIcon; label: string; disabled: boolean }[] = [
    { id: 'games', icon: GamesIcon, label: t.games, disabled: true },
    { id: 'chat', icon: ChatIcon, label: t.chat, disabled: false },
    { id: 'help', icon: HelpIcon, label: t.help, disabled: false },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-30 pb-safe">
      <div className="flex items-center justify-center gap-3 px-4 pb-6 pt-2">
        <div className="surface-nav-group flex items-center">
          {centerItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;

            return (
              <button
                key={item.id}
                type="button"
                disabled={item.disabled}
                aria-label={item.label}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => !item.disabled && onNavigate(item.id)}
                className={`nav-btn ${isActive ? 'nav-btn-active' : ''} ${
                  item.disabled ? 'nav-btn-disabled' : ''
                }`}
              >
                <Icon
                  className={`w-6 h-6 transition-opacity duration-150 ${
                    isActive ? 'text-accent' : item.disabled ? 'text-white/30' : 'text-white/60'
                  }`}
                  size={24}
                />
              </button>
            );
          })}
        </div>

        <button
          type="button"
          disabled
          aria-label={t.profile}
          className="surface-nav-single nav-btn nav-btn-disabled"
        >
          <ProfileIcon className="w-6 h-6 text-white/30" size={24} />
        </button>
      </div>
    </nav>
  );
}
