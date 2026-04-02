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
        navy: {
          DEFAULT: '#0C1220',
          light: '#141D2E',
          lighter: '#1C2840',
        },
        accent: {
          blue: '#4F8CFF',
          amber: '#F5A623',
          green: '#34D399',
        },
        teal: {
          DEFAULT: '#4F8CFF',
          dim: '#3A75E0',
          glow: 'rgba(79,140,255,0.15)',
        },
        danger: '#ff6b6b',
        warning: '#ffd93d',
        'text-primary': '#E8ECF1',
        'text-secondary': '#8B95A8',
        'text-muted': '#5C6578',
      },
      fontFamily: {
        sora: ['Sora', 'Inter', '-apple-system', 'sans-serif'],
        sans: ['DM Sans', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '12px',
        sm: '4px',
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
