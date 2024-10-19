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
        sadness: "#4A5568", // Gris azulado oscuro
        danger: "#B34040", // Rojo apagado
        introspection: "#6B5B95", // Morado apagado
        melancholy: "#2C3E50",
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
