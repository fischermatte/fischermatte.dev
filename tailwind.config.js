// eslint-disable-next-line @typescript-eslint/no-var-requires
const {colors} = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      primary: 'var(--color-primary)',
      accent: {
        light: 'var(--color-accent-light)',
        normal: 'var(--color-accent-normal)',
        dark: 'var(--color-accent-dark)',
      },
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: 'var(--color-primary)',
      accent: {
        light: 'var(--color-accent-light)',
        normal: 'var(--color-accent-normal)',
        dark: 'var(--color-accent-dark)',
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
