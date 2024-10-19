/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#2C2C2C",
        text: "#E0E0E0",
        "color-primary": "#34699A",
        "color-primary-hover": "#357ABD",
        "color-secondary": "#50C878",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      textColor: {
        DEFAULT: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
