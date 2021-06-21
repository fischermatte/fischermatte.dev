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
        normal: 'var(--color-accent-normal)',
        dark: 'var(--color-accent-dark)',
        contrast: 'var(--color-accent-contrast)',
      },
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: 'var(--color-primary)',
      accent: {
        normal: 'var(--color-accent-normal)',
        dark: 'var(--color-accent-dark)',
        contrast: 'var(--color-accent-contrast)',
      },
    }),
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
    fontFamily: {
      mono: ['Fira Code', '"Courier New"', 'monospace'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
