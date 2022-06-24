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
      }
    }
  },
  plugins: [],
}
