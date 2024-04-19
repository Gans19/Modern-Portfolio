/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#2cbce9",
        red: "#dc4492",
        yellow: "#fdcc49",
        grey: "#ededed",
        "deep-blue": "#010026",
        "dark-gray": "#757575",
        "opaque-black": "#rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00b5ee 7.21%, #ff45a4 45.04% , #ffba00 78.07%)",
        "gradient-rainblue":
          "linear-gradient(90deg, #24cbff 43.53%, #fc59ff 69.36% , #ffbd03 117.73%)",
      }),
      fontFamily: {
        roboto: ["Helvetica Neue", "serif"],
        poppins: ["Helvetica Neue", "serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
