// C:\Users\Melody\Documents\haliberrycake\frontend\tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          DEFAULT: '#957158',
          light: '#C5A68C',
          dark: '#7A5B41',
        },
        apricot: '#D8B9A4',
        blush: {
          DEFAULT: '#E7C9B8',
          light: '#F4E6DC',
          dark: '#D4B49E',
        },
        golden: {
          DEFAULT: '#B39A7F',
          dark: '#8F785F',
        },
        cream: {
          DEFAULT: '#F5EFE8',
          dark: '#DED3CA',
        },
        brand: {
          50:  '#F9F6F1',
          100: '#F5EFE8',
          200: '#E9E0D8',
          300: '#D8B9A4',
          400: '#C5A68C',
          500: '#957158',
          600: '#7A5B41',
          700: '#6A4F3B',
          800: '#58463A',
          900: '#3F3126',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 7vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.75rem, 3.5vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.35rem, 2.5vw, 2rem)', { lineHeight: '1.2' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
      boxShadow: {
        'luxury': '0 8px 40px rgba(149, 113, 88, 0.16), 0 2px 10px rgba(42, 34, 28, 0.06)',
        'luxury-lg': '0 20px 60px rgba(149, 113, 88, 0.2), 0 4px 20px rgba(42, 34, 28, 0.08)',
        'luxury-sm': '0 4px 20px rgba(149, 113, 88, 0.12), 0 1px 6px rgba(42, 34, 28, 0.05)',
        'blush': '0 8px 40px rgba(231, 201, 184, 0.2)',
        'inner-soft': 'inset 0 2px 8px rgba(0,0,0,0.04)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #F9F6F1 0%, #E9E0D8 40%, #D8B9A4 100%)',
        'gradient-peach': 'linear-gradient(180deg, #F9F6F1 0%, #E9E0D8 100%)',
        'gradient-warm': 'linear-gradient(135deg, #F5EFE8 0%, #D8B9A4 50%, #B39A7F 100%)',
        'gradient-cream': 'linear-gradient(180deg, #F9F6F1 0%, #F5EFE8 100%)',
        'gradient-dark-overlay': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(42, 34, 28, 0.55) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}

export default config