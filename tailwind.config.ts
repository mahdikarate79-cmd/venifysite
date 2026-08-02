import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#3767FA',
        'deep-blue': '#0a0e27',
        'deep-blue-light': '#121a3a',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px rgba(55, 103, 250, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        'glass-hover': '0 12px 40px rgba(55, 103, 250, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
        glow: '0 0 20px rgba(55, 103, 250, 0.4)',
      },
      backdropBlur: {
        glass: '20px',
      },
      animation: {
        'star-pulse': 'star-pulse 4s ease-in-out infinite',
        'star-pulse-slow': 'star-pulse 6s ease-in-out infinite',
        'star-pulse-slower': 'star-pulse 8s ease-in-out infinite',
      },
      keyframes: {
        'star-pulse': {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
