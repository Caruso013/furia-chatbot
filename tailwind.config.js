/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        furiaBlack: '#000000', // Cor preta do time FURIA
        furiaWhite: '#F5F5F5', // Cor branca do time FURIA
        furiaGold: '#DAA520', // Cor dourada do time FURIA
      },
    },
  },
  plugins: [],
};