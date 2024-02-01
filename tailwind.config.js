/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'rooms': 'repeat(auto-fit, minmax(250px, 1fr))',
        'create-gamer': 'repeat(1, minmax(250px, 300px))'
      },
      gridTemplateRows: {
        'rooms': 'repeat(auto-fit, minmax(300px, 1fr))',
        'create-gamer': 'repeat(1, minmax(300px, 300px))'
      },
      gridAutoRows: {
        'rooms': 'minmax(300px, 1fr)',
      },
      minHeight: {
        'wrapped-menu': 'calc(100vh - 56px)'
      }
    },
  },
  plugins: [],
}

