/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#eeecea',
        surface: '#e4e1dd',
        ink: '#333231',
        muted: '#625f5b',
        moss: '#5c6b54',
        hair: 'rgba(51, 50, 49, 0.16)',
        'hair-inverse': 'rgba(238, 236, 234, 0.2)',
      },
      fontFamily: {
        display: ['"Literata Variable"', 'Literata', 'Georgia', 'serif'],
        sans: ['"Figtree Variable"', 'Figtree', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        soft: '10px',
      },
      transitionTimingFunction: {
        calm: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
