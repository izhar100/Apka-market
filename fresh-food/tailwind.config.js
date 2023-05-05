/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        clifford: "#da373d",
      },
      screens: {
        xs: { max: "639px" },
      },
    },
  },
  plugins: [],
};
