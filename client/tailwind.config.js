/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        Nav: "rgb(25, 118, 210)",
        DarkNav: "#1e1e1e",
        navText: "#aaaaaa",
        newNav: "#1B262C",
        newDarkBlue: "#0F4C75",
        newLightBlue: "#3282B8",
        newLightestBlue: "#BBE1FA",
      },
      fontFamily: {
        sans: ["Verdana", "sans-serif"],
      },
      height: {
        41: "41rem",
        half: "2px",
      },
      width: {
        29: "28rem",
      },
    },
  },
  plugins: [],
};
