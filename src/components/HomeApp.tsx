'use client';

import { useState } from 'react';
import HelpPage from '@/components/HelpPage';
import ChatPage from '@/components/ChatPage';
import BottomNav, { type NavItem } from '@/components/BottomNav';

export default function HomeApp() {
  const [active, setActive] = useState<NavItem>('help');

  return (
    <>
      {active === 'help' && <HelpPage />}
      {active === 'chat' && <ChatPage />}
      <BottomNav active={active} onNavigate={setActive} />
    </>
  );
}
