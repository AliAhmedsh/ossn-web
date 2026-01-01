/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f1f6ff',
          100: '#dbe8ff',
          200: '#b9d1ff',
          300: '#8bb1ff',
          400: '#5f90ff',
          500: '#3c70ff',
          600: '#2857d8',
          700: '#1f46ae',
          800: '#1c3b8b',
          900: '#1a3472',
        },
      },
    },
  },
  plugins: [],
};
