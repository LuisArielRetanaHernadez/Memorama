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
        'create-gamer': 'repeat(1, minmax(250px, 300px))',
        'cards': 'repeat(auto-fit, minmax(25px, 150px))',
      },
      gridTemplateRows: {
        'rooms': 'repeat(auto-fit, minmax(300px, 1fr))',
        'create-gamer': 'repeat(1, minmax(300px, 300px))',
        'cards': 'repeat(auto-fit, minmax(80px, 1fr))',
      },
      gridAutoRows: {
        'rooms': 'minmax(300px, 1fr)',
        'cards': 'minmax(25px, 150px)'
      },
      height: {
        'wrapped-menu': 'calc(100vh - 56px)'

      },
      minHeight: {
        'wrapped-menu': 'calc(100vh - 56px)'
      }
    },
  },
  plugins: [],
}

