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
          dark: '#0a0a0a',
          surface: '#121212',
          zinc: '#18181b',
          muted: '#71717a',
          border: '#27272a',
          light: '#f4f4f5',
          white: '#ffffff',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 20px 40px -15px rgba(0, 0, 0, 0.4)',
        'float': '0 30px 60px -12px rgba(0, 0, 0, 0.5)',
        'bw': '0 10px 30px -5px rgba(255, 255, 255, 0.1)',
        'bw-dark': '0 20px 40px -10px rgba(0, 0, 0, 0.8)',
      }
    },
  },
  plugins: [],
}
