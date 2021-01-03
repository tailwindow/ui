const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  presets: [require("tailwindcss/defaultConfig")],
  theme: {
    colors: {
      ...colors,
      primary: "#f1f123"
    }
  },
  plugins: [
    // ...
  ]
};
