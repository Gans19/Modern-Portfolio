/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./src/Scenes/**/*.{html,js,jsx}"
  ],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        'border-spin': {
          '100%': { transform: 'rotate(-360deg)' },
        },
        'beat': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        'border-spin': 'border-spin 7s linear infinite',
        'beat': 'beat 1.5s infinite ease-in-out',
      },
      colors: {
        blue: "#2cbce9",
        red: "#dc4492",
        yellow: "#fdcc49",
        grey: "#ededed",
        "deep-blue": "#010026",
        "dark-gray": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: theme => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00b5ee 7.21%, #ff45a4 45.04%, #ffba00 78.07%)",
        "gradient-rainblue":
          "linear-gradient(90deg, #24cbff 43.53%, #fc59ff 69.36%, #ffbd03 117.73%)",
      }),
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  screens: {
    xs: "480px",
    sm: "768px",
    md: "1060px",
  },
  plugins: [],
};
