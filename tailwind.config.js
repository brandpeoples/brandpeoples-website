/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '960px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        brand: {
          black: '#000000',
          obsidian: '#0A0B0E',
          dark: '#0E1014',
          surface: '#13151A',
          card: '#181A20',
          'card-hover': '#1F222A',
          zinc: '#262933',
          muted: '#8E929E',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-light': 'rgba(255, 255, 255, 0.14)',
          light: '#F4F5F8',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 20px 40px -15px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.06)',
        'card-hover': '0 30px 60px -15px rgba(0, 0, 0, 0.8), inset 0 1px 0 0 rgba(255, 255, 255, 0.12)',
        'float': '0 30px 60px -12px rgba(0, 0, 0, 0.7)',
        'bw': '0 10px 30px -5px rgba(255, 255, 255, 0.15)',
        'studio-glow': '0 0 80px 10px rgba(255, 255, 255, 0.07)',
        'rim-light': 'inset 0 0 0 1px rgba(255, 255, 255, 0.1), 0 12px 35px -8px rgba(0, 0, 0, 0.8)',
      }
    },
  },
  plugins: [],
}
