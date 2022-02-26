module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      colors: {
        primary: {
          500: "#856D4D",
        },
        secondary: {
          800: "3D2B1F",
        },
        menu: {
          900: "#19241A",
        },
        black: "130802",
        background: "#f9f9f9",
      },
      aspectRatio: {
        square: [1, 1],
        "21/9": [21, 9],
        "16/9": [16, 9],
        "4/3": [4, 3],
        "3/2": [3, 2],
        "4/5": [4, 5],
        "1/2": [1, 2],
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      textColor: ["group-hover"],
    },
  },
  plugins: [require("tailwindcss-aspect-ratio")],
};
