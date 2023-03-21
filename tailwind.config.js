/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      backgroundImage: {
        circuit: "url('/circuit-board.svg')",
        black_circuit: "url('/dark-circuit-board.svg')",
        sand: "url('/sand.svg')",
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
      },
      colors: {
        ocean: {
          10: "#475dc8",
          900: "#010312fd",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
