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
    screens: {
      sm: "375px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    plugins: [],
  },
};
