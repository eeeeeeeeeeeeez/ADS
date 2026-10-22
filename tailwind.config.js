/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9ecff',
          500: '#2f6fed',
          600: '#1f56c9',
          700: '#17409a',
        },
        mint: {
          50: '#eefaf3',
          100: '#d7f3e3',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', '"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
