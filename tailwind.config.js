/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          DEFAULT: "#3d4958",
          light: "#405064",
        },
        "off-white": "#fff8f0",
        burnt: "#b2675e",
      },
      fontFamily: {
        title: ["'Averia Serif Libre'", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
