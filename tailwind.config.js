/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'hand-wave': {
          '0%, 60%': {
            transform: 'rotate(0.0deg)',
          },
          '10%, 30%': {
            transform: 'rotate(14.0deg)',
          },
          '20%': {
            transform: 'rotate(-8.0deg)',
          },
          '40%': {
            transform: 'rotate(-4.0deg)',
          },
          '50%': {
            transform: 'rotate(10.0deg)',
          },
        },
      },
      animation: {
        'hand-wave': 'hand-wave 2.5s',
      },
    },
  },
  plugins: [],
}
