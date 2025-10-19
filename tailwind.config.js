module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        accent: {
          normal: 'var(--color-accent-normal)',
          dark: 'var(--color-accent-dark)',
          contrast: 'var(--color-accent-contrast)',
        },
      },
      backgroundColor: {
        primary: 'var(--color-primary)',
        accent: {
          normal: 'var(--color-accent-normal)',
          dark: 'var(--color-accent-dark)',
          contrast: 'var(--color-accent-contrast)',
        },
      },
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
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
