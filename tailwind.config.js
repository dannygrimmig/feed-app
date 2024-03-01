/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: ["Paytone One", "sans-serif"],
        body: ["Outfit", "sans-serif"],
      },
      colors: {
        brand: {
          0: "#EEF2E6",
          25: "#FFF3CF",
          50: "#3D8361",
          75: "#1C6758",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
