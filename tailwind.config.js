/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        fbg: ["#F4511E"],
        fbd: ["#E6E6E6"],
        fph: ["#737373"],
      },
    },
  },
  plugins: [],
};
