/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      hol: {
        blue: {
          light: "#8DC8E8",
          DEFAULT: "#4FB1D8",
          dark: "#3E6991",
        },
        grey: {
          light: "#BEBEBE",
          DEFAULT: "#575257",
        },
        green: "77C19A",
        orange: "#EB7B39",
        purple: {
          light: "#B1A2CA",
          dark: "#492E86",
        },
        red: {
          pale: "#F2716F",
          DEFAULT: "#CE504A",
        },
        yellow: "#FECE00",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
