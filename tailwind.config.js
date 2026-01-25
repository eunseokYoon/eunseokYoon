/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode
        cream: '#FAF9F6',
        'dark-brown': '#1A1512',
        'mid-brown': '#4A443E',
        // Dark mode
        'navy-black': '#0A0E27',
        'soft-white': '#F5F3F0',
        // Accent colors
        terracotta: '#C84B31',
        burgundy: '#8B3A3A',
        'warm-orange': '#D4704D',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'], // Elegant variable serif
        sans: ['Manrope', 'sans-serif'], // Friendly modern sans
        mono: ['JetBrains Mono', 'monospace'], // Technical monospace
      },
      fontSize: {
        'display-xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-lg': ['6rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-md': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.7s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
