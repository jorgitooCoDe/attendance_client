/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mto_gray: "#101B37",
        mto_gray_light: "#37415B",
        mto_red: "#E41476",
        mto_red_light: "#EC458D",
        mto_blue: "#02C8ED",
        mto_blue_light: "#4BD5F1",
        mto_blue_dark: "#2094AA",
        mto_dark_gray: "#05090C",
      },
      fontFamily: {
        main_sans: ["Lemon Milk", "sans-serif"],
      },
      boxShadow: {
        'custom-gray': '0px 10px 15px -3px rgba(16, 27, 55, 0.5), 0 8px 8px -2px rgba(16, 27, 55, 0.25)',
        'custom-red': '0 10px 15px -3px rgba(228, 20, 118, 0.5), 0 4px 6px -2px rgba(228, 20, 118, 0.25)',
        'custom-hover': '0 10px 15px -3px rgba(16, 27, 55, 0.5), 0 4px 6px -2px rgba(228, 20, 118, 0.4), 0 2px 4px -1px rgba(2, 200, 237, 0.3)',
      },
    },
  },
  plugins: [],
}