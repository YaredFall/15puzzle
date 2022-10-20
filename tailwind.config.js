//const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}", './public/index.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      transitionProperty: {
        'pos': 'top, right, bottom, left'
      },
      colors: {
        'accent': '#8d9cb9',
        'primary': '#f5f5f5',
        'secondary': '#76777f',
        'tertiary': '#474954',
        'quaternary': '#383942'
      }
    }
  },
  plugins: [],
}
