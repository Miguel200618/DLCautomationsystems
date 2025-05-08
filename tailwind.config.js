/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D0D0D', // Dark mode base
          light: '#1A1A1A',
          dark: '#080808',
        },
        accent: {
          neutral: '#8C888A', // Futuristic neutral
          green: '#7B8C3B',  // Tech green
          highlight: '#B1BF49', // Energetic call-to-action
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(177, 191, 73, 0.3)',
        'glow-sm': '0 0 8px rgba(177, 191, 73, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};