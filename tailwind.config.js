/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        back: "url('/public/back.jpg')",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("daisyui"),
    require("@tailwindcss/typography"),
  ],
};
