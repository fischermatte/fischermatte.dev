const {colors} = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      primary: 'var(--color-primary)',
      accent: {
        front: 'var(--color-accent-front)',
        back: 'var(--color-accent-back)',
      },
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: 'var(--color-primary)',
      accent: {
        front: 'var(--color-accent-front)',
        back: 'var(--color-accent-back)',
      },
    }),
    fontFamily: {
      mono: ['Fira Code', '"Courier New"', 'monospace'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
