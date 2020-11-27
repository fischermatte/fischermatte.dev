const {colors} = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
