const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },

    extend: {},
  },
  plugins: [],
};
