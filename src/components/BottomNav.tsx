'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/i18n/LocaleProvider';
import { GamesIcon, ChatIcon, HelpIcon, ProfileIcon } from '@/components/icons/NavIcons';

type NavItem = 'games' | 'chat' | 'help' | 'profile';

interface BottomNavProps {
  active: NavItem;
}

export default function BottomNav({ active }: BottomNavProps) {
  const { t } = useLocale();

  const centerItems: { id: NavItem; icon: typeof GamesIcon; label: string; disabled: boolean }[] = [
    { id: 'games', icon: GamesIcon, label: t.games, disabled: true },
    { id: 'chat', icon: ChatIcon, label: t.chat, disabled: true },
    { id: 'help', icon: HelpIcon, label: t.help, disabled: false },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-30 pb-safe">
      <div className="flex items-center justify-center gap-3 px-4 pb-6 pt-2">
        <div className="glass-nav-group flex items-center">
          {centerItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;

            return (
              <button
                key={item.id}
                disabled={item.disabled}
                aria-label={item.label}
                className={`nav-btn relative ${isActive ? 'nav-btn-active' : ''} ${
                  item.disabled ? 'nav-btn-disabled' : ''
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-glow"
                    className="absolute inset-1 rounded-2xl bg-accent/15"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon
                  className={`relative z-10 w-6 h-6 transition-colors duration-300 ${
                    isActive ? 'text-accent' : item.disabled ? 'text-white/30' : 'text-white/60'
                  }`}
                  size={24}
                />
              </button>
            );
          })}
        </div>

        <button
          disabled
          aria-label={t.profile}
          className="glass-nav-single nav-btn nav-btn-disabled"
        >
          <ProfileIcon className="w-6 h-6 text-white/30" size={24} />
        </button>
      </div>
    </nav>
  );
}
