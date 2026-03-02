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
        cyan: '#8BE9FD',
      },
    },
  },
  plugins: [],
}
