/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'tracking-in-expand': {
          '0%': {
            'letter-spacing': '-0.5em',
            opacity: '0',
          },
          '40%': {
            opacity: '0.6',
          },
          '100%': {
            opacity: '1',
          },
        },
        'slide-in-top': {
          '0%, 50%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'none',
          },
        },
      },
      animation: {
        'tracking-in-expand': 'tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both',
        'slide-in-top': 'slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
      },
    },
  },
  plugins: [],
}
