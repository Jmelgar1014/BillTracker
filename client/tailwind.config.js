/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        Nav: "rgb(25, 118, 210)",
        DarkNav: "#1e1e1e",
        navText: "#aaaaaa",
      },
      fontFamily: {
        sans: "Inter",
      },
    },
  },
  plugins: [],
};
