import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,md,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        // Light theme (Oct 2026 redesign). Token names kept from the dark theme so every page follows.
        navy: {
          DEFAULT: '#FFFFFF', // page background
          light: '#F6F7FB', // tinted section / card background
          lighter: '#EDEFF6', // inputs, chips
        },
        ink: '#0E1222',
        accent: {
          blue: '#2F6BF2',
          amber: '#E8920C',
          green: '#0F9F6E',
        },
        teal: {
          DEFAULT: '#2F6BF2',
          dim: '#2459D6',
          glow: 'rgba(47,107,242,0.10)',
        },
        danger: '#E5484D',
        warning: '#E8920C',
        'text-primary': '#0E1222',
        'text-secondary': '#4A5068',
        'text-muted': '#7B8199',
      },
      boxShadow: {
        card: '0 1px 2px rgba(14,18,34,.04), 0 8px 24px -12px rgba(14,18,34,.10)',
        pop: '0 30px 80px -30px rgba(47,107,242,.35)',
      },
      fontFamily: {
        sora: ['var(--font-sora)', '-apple-system', 'sans-serif'],
        sans: ['var(--font-dm-sans)', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '12px',
        sm: '8px',
        lg: '20px',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(79,140,255,0.4)' },
          '50%': { boxShadow: '0 0 20px 4px rgba(79,140,255,0.15)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
