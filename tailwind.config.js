/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      },
      animation: {
        fade: "fade .2s ease-in-out forwards",
      },
      colors: {
        slate: {
          DEFAULT: "#3d4958",
          light: "#405064",
        },
        "off-white": "#fff8f0",
        burnt: {
          DEFAULT: "#b2675e",
          dark: "#7e4741",
        },
      },
      fontFamily: {
        title: ["'Averia Serif Libre'", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
