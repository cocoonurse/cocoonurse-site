/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './script.js',
    './translations.js',
    './components/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        champagne: {
          50: '#fcf9f5',
          100: '#f8f1e6',
          200: '#f0e0c5',
          300: '#e6c99c',
          400: '#d9a969',
          500: '#d19c5a',
          600: '#c2874b',
          700: '#a16c3e',
          800: '#825836',
          900: '#6a4730',
        },
        sand: {
          50: '#faf9f6',
          100: '#f4f2ea',
          200: '#e8e2d3',
          300: '#d8cdb0',
          400: '#c4b386',
          500: '#b5a16d',
          600: '#9f8a5a',
          700: '#806e47',
          800: '#6a5b3d',
          900: '#584c34',
        }
      }
    }
  },
  plugins: [],
}
