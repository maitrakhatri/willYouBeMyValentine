/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "light-pink": "#FF7BAC",
        "dark-pink": "#D05E91",
        "purple": "#BD97CA",
        "gray": "#333745",
        "white": "#FFFCF9"
      }
    },
  },
  plugins: [],
}
