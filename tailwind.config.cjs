/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: { primary: "#2250f4", secondary: "#112caf" },
      fontFamily: {
        display: ["Coda", "cursive"],
        body: ["Quicksand", "sans-serif"],
        cta: ["Mukta", "sans-serif"],
      },
    },
  },
  plugins: [],
};
