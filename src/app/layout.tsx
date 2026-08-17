import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LocaleProvider } from '@/i18n/LocaleProvider';

export const metadata: Metadata = {
  title: 'VeniFy — Telegram Gaming Bot',
  description: 'Premium Telegram gaming bot mini-app. Play dice, slots, blackjack, roulette, poker, and crash.',
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#050810',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <LocaleProvider>
          <main className="relative z-10">{children}</main>
        </LocaleProvider>
      </body>
    </html>
  );
}
