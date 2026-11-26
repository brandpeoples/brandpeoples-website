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
          dark: '#111827',
          surface: '#FFFFFF',
          card: '#FFFFFF',
          'card-hover': '#F9FAFB',
          zinc: '#F3F4F6',
          muted: '#6B7280',
          border: '#E5E7EB',
          'border-light': '#F3F4F6',
          light: '#FAFAFA',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 8px -1px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 12px 28px -4px rgba(0, 0, 0, 0.08), 0 4px 8px -2px rgba(0, 0, 0, 0.03)',
        'float': '0 20px 40px -12px rgba(0, 0, 0, 0.1)',
        'bw': '0 10px 30px -5px rgba(0, 0, 0, 0.08)',
        'studio-glow': '0 0 80px 10px rgba(0, 0, 0, 0.04)',
        'rim-light': 'inset 0 0 0 1px rgba(0, 0, 0, 0.06), 0 8px 25px -4px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
