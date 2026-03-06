import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#F8F8F2',
        foreground: '#282A36',
        section: '#44475A',
        comment: '#6272A4',
        pink: '#FF79C6',
        green: '#50FA7B',
        yellow: '#F1FA8C',
        blue: '#BD93F9',
        orange: '#FFB86C',
        cyan: '#8BE9FD'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.foreground'),
            a: {
              color: theme('colors.blue'),
              '&:hover': {
                color: theme('colors.cyan'),
              },
            },
            h1: { color: theme('colors.pink') },
            h2: { color: theme('colors.green') },
            h3: { color: theme('colors.yellow') },
            h4: { color: theme('colors.orange') },
            strong: { color: theme('colors.foreground') },
            code: {
              color: theme('colors.pink'),
              backgroundColor: theme('colors.section'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            pre: {
              backgroundColor: theme('colors.foreground'),
              color: theme('colors.background'),
            },
            blockquote: {
              color: theme('colors.comment'),
              borderLeftColor: theme('colors.blue'),
            },
            img: {
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            },
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
              lineHeight: '1.75',
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.background'),
            a: {
              color: theme('colors.blue'),
              '&:hover': {
                color: theme('colors.cyan'),
              },
            },
            h1: { color: theme('colors.pink') },
            h2: { color: theme('colors.green') },
            h3: { color: theme('colors.yellow') },
            h4: { color: theme('colors.orange') },
            strong: { color: theme('colors.background') },
            code: {
              color: theme('colors.pink'),
              backgroundColor: theme('colors.foreground'),
            },
            pre: {
              backgroundColor: '#1E1E2E',
              color: theme('colors.background'),
            },
            blockquote: {
              color: theme('colors.comment'),
              borderLeftColor: theme('colors.blue'),
            },
            hr: { borderColor: theme('colors.section') },
          },
        },
      }),
    },
  },
  plugins: [typography],
}
