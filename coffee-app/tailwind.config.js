/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Obviously': ['obviously', 'sans-serif'],
        'ObviouslyCondensed': ['obviously-condensed', 'sans-serif'],
        'ObviouslyNarrow': ['obviously-narrow', 'sans-serif'],
        'Futura': ['futura-pt', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
