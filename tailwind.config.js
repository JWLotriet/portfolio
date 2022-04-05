module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#00f260",
        },
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    plugins: [],
  },
};
