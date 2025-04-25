/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        furiaBlack: '#000000', // Cor preta do time FURIA
        furiaWhite: '#A9A9A9', // Cor branca do time FURIA
        furiaGold: '#DAA520', // Cor dourada do time FURIA
      },
    },
  },
  plugins: [],
};