import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LocaleProvider } from '@/i18n/LocaleProvider';
import Starfield from '@/components/Starfield';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
});

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
      <body className={`${inter.variable} font-sans antialiased`}>
        <LocaleProvider>
          <Starfield />
          <main className="relative z-10">{children}</main>
        </LocaleProvider>
      </body>
    </html>
  );
}
