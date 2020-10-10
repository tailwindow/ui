const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    extend: {
      borderRadius: {
        10: "10px",
        20: "20px",
        30: "30px",
        40: "40px",
        50: "50px"
      },
      boxShadow: {
        // fully shadow
        "10": "0px 0px 20px 2px rgba(0, 0, 0, 0.05)",
        "20": "0px 0px 30px 4px rgba(0, 0, 0, 0.05)",
        "30": "0px 0px 40px 6px rgba(0, 0, 0, 0.05)",
        "40": "0px 0px 40px 8px rgba(0, 0, 0, 0.1)",
        "50": "0px 0px 50px 10px rgba(0, 0, 0, 0.1)",
        "60": "0px 0px 60px 10px rgba(0, 0, 0, 0.1)",
        // bottom shadow
        "b-10": "0px 10px 20px rgba(0, 0, 0, 0.05)",
        "b-20": "0px 20px 30px rgba(0, 0, 0, 0.05)",
        "b-30": "0px 30px 40px rgba(0, 0, 0, 0.05)",
        "b-40": "0px 20px 40px rgba(0, 0, 0, 0.1)",
        "b-50": "0px 30px 50px rgba(0, 0, 0, 0.1)",
        "b-60": "0px 40px 60px rgba(0, 0, 0, 0.1)"
      },
      fontFamily: {
        // default tailwind
        sans: ["-apple-system", "BlinkMacSystemFont", "Inter"],
        serif: ["Source Serif Pro", "Cambria"],
        mono: ["Source Code Pro", "Menlo"],
        // custom
        primary: ["Manrope", "sans-serif"],
        secondary: ["Inter", "sans-serif"]
      },
      fontSize: {
        paragraph: "12px",
        description: "10px",
        //
        "display-1": "100px",
        "display-2": "80px",
        "display-3": "60px",
        "display-4": "40px",
        "display-5": "20px",
        "display-6": "10px",
        "heading-1": "28px",
        "heading-2": "24px",
        "heading-3": "20px",
        "heading-4": "16px",
        "title-1": "22px",
        "title-2": "20px",
        "title-3": "18px",
        "title-4": "16px",
        "subtitle-1": "16px",
        "subtitle-2": "14px",
        "subtitle-3": "12px",
        "subtitle-4": "10px",
        "label-1": "12px",
        "label-2": "10px",
        "label-3": "8px",
        "label-4": "6px"
      },
      colors: {
        primary: {
          light: "#0a84ff",
          "light-hover": "#409cff",
          "light-alpha": "rgba(0, 122, 255, 0.1)",
          "light-alpha-hover": "rgba(0, 64, 221, 0.1)",
          "light-gradient":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #0040DD",
          "light-gradient-hover":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #0040DD",
          //
          dark: "#007aff",
          "dark-hover": "#0040dd",
          "dark-alpha": "rgba(10, 132, 255, 0.1)",
          "dark-alpha-hover": "rgba(64, 156, 255, 0.1)",
          "dark-gradient":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #0A84FF",
          "dark-gradient-hover":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #409CFF"
        },
        secondary: {
          light: "#636366",
          "light-hover": "#6C6C70",
          "light-alpha": "rgba(0, 122, 255, 0.1)",
          "light-alpha-hover": "rgba(0, 64, 221, 0.1)",
          "light-gradient":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #636366",
          "light-gradient-hover":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #6C6C70",
          //
          dark: "#f2f2f7",
          "dark-hover": "#d1d1d6",
          "dark-alpha": "rgba(10, 132, 255, 0.1)",
          "dark-alpha-hover": "rgba(64, 156, 255, 0.1)",
          "dark-gradient":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #f2f2f7",
          "dark-gradient-hover":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #d1d1d6"
        },
        body: "#F7F8FB",
        black: "#1D1D1F",
        white: "#ffff",
        grey: "#96979C",
        light: "#E5E5EA",
        //
        blue: {
          ...colors.blue,
          light: "#0a84ff",
          "light-hover": "#409cff",
          "light-alpha": "rgba(0, 122, 255, 0.1)",
          "light-alpha-hover": "rgba(0, 64, 221, 0.1)",
          "light-gradient":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #0040DD",
          "light-gradient-hover":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #0040DD",
          //
          dark: "#007aff",
          "dark-hover": "#0040dd",
          "dark-alpha": "rgba(10, 132, 255, 0.1)",
          "dark-alpha-hover": "rgba(64, 156, 255, 0.1)",
          "dark-gradient":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #0A84FF",
          "dark-gradient-hover":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #409CFF"
        },
        green: {
          ...colors.green,
          light: "##34C759",
          "light-hover": "#248a3d",
          "light-alpha": "rgba(52, 199, 89, 0.1)",
          "light-alpha-hover": "rgba(36, 138, 61, 0.1)",
          "light-gradient":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #34C759",
          "light-gradient-hover":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #248A3D",
          //
          dark: "#30D158",
          "dark-hover": "##30DB5B",
          "dark-alpha": "rgba(48, 209, 88, 0.1)",
          "dark-alpha-hover": "rgba(48, 219, 91, 0.1)",
          "dark-gradient":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #30DB5B",
          "dark-gradient-hover":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #30DB5B"
        },
        indigo: {
          ...colors.indigo,
          light: "#5856d6",
          "light-hover": "#3634a3",
          "light-alpha": "rgba(88, 86, 214, 0.1)",
          "light-alpha-hover": "rgba(54, 52, 163, 0.1)",
          "light-gradient":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #5856d6",
          "light-gradient-hover":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #3634a3",
          //
          dark: "#5e5ce6",
          "dark-hover": "#7d7aff",
          "dark-alpha": "rgba(94, 92, 230, 0.1)",
          "dark-alpha-hover": "rgba(125, 122, 255, 0.1)",
          "dark-gradient":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #5e5ce6",
          "dark-gradient-hover":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #7d7aff"
        },
        orange: {
          ...colors.orange,
          light: "#ff9500",
          "light-hover": "#c93400",
          "light-alpha": "rgba(255, 149, 0, 0.1)",
          "light-alpha-hover": "rgba(201, 52, 0, 0.1)",
          "light-gradient":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #ff9500",
          "light-gradient-hover":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #c93400",
          //
          dark: "#ff9f0a",
          "dark-hover": "#ffb340",
          "dark-alpha": "rgba(255, 159, 10, 0.1)",
          "dark-alpha-hover": "rgba(255, 179, 64, 0.1)",
          "dark-gradient":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #ff9f0a",
          "dark-gradient-hover":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #ffb340"
        },
        pink: {
          ...colors.pink,
          light: "#ff2d55",
          "light-hover": "#d30f45",
          "light-alpha": "rgba(255, 45, 85, 0.1)",
          "light-alpha-hover": "rgba(211, 15, 69, 0.1)",
          "light-gradient":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #ff2d55",
          "light-gradient-hover":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #d30f45",
          //
          dark: "#ff375f",
          "dark-hover": "#ff6482",
          "dark-alpha": "rgba(255, 55, 95, 0.1)",
          "dark-alpha-hover": "rgba(211, 15, 69, 0.1)",
          "dark-gradient":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #ff375f",
          "dark-gradient-hover":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #ff6482"
        },
        purple: {
          ...colors.purple,
          light: "#af52de",
          "light-hover": "#8944ab",
          "light-alpha": "rgba(175, 82, 222, 0.1)",
          "light-alpha-hover": "rgba(137, 68, 171, 0.1)",
          "light-gradient":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #af52de",
          "light-gradient-hover":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #8944ab",
          //
          dark: "#bf5af2",
          "dark-hover": "#da8fff",
          "dark-alpha": "rgba(191, 90, 242, 0.1)",
          "dark-alpha-hover": "rgba(218, 143, 255, 0.1)",
          "dark-gradient":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #bf5af2",
          "dark-gradient-hover":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #da8fff"
        },
        red: {
          ...colors.red,
          light: "#ff3b30",
          "light-hover": "#d70015",
          "light-alpha": "rgba(255, 59, 48, 0.1)",
          "light-alpha-hover": "rgba(215, 0, 21, 0.1)",
          "light-gradient":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #ff3b30",
          "light-gradient-hover":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #d70015",
          //
          dark: "#ff453a",
          "dark-hover": "#ff6961",
          "dark-alpha": "rgba(255, 69, 58, 0.1)",
          "dark-alpha-hover": "rgba(255, 105, 97, 0.1)",
          "dark-gradient":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #ff453a",
          "dark-gradient-hover":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #ff6961"
        },
        teal: {
          ...colors.teal,
          light: "#5ac8fa",
          "light-hover": "#0071a4",
          "light-alpha": "rgba(90, 200, 250, 0.1)",
          "light-alpha-hover": "rgba(0, 113, 164, 0.1)",
          "light-gradient":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #5ac8fa",
          "light-gradient-hover":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #0071a4",
          //
          dark: "#64d2ff",
          "dark-hover": "#70d7ff",
          "dark-alpha": "rgba(100, 210, 255, 0.1)",
          "dark-alpha-hover": "rgba(112, 215, 255, 0.1)",
          "dark-gradient":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #64d2ff",
          "dark-gradient-hover":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #70d7ff"
        },
        yellow: {
          ...colors.yellow,
          light: "#ffcc00",
          "light-hover": "#a05a00",
          "light-alpha": "rgba(160, 90, 0, 0.1)",
          "light-alpha-hover": "rgba(0, 64, 221, 0.1)",
          "light-gradient":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #ffcc00",
          "light-gradient-hover":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #a05a00",
          //
          dark: "#ffd60a",
          "dark-hover": "#ffd426",
          "dark-alpha": "rgba(255, 214, 10, 0.1)",
          "dark-alpha-hover": "rgba(255, 212, 38, 0.1)",
          "dark-gradient":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #ffd60a",
          "dark-gradient-hover":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #ffd426"
        },
        gray: {
          ...colors.gray,
          light: "#636366",
          "light-hover": "#6C6C70",
          "light-alpha": "rgba(0, 122, 255, 0.1)",
          "light-alpha-hover": "rgba(0, 64, 221, 0.1)",
          "light-gradient":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #636366",
          "light-gradient-hover":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #6C6C70",
          //
          dark: "#f2f2f7",
          "dark-hover": "#d1d1d6",
          "dark-alpha": "rgba(10, 132, 255, 0.1)",
          "dark-alpha-hover": "rgba(64, 156, 255, 0.1)",
          "dark-gradient":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #f2f2f7",
          "dark-gradient-hover":
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0001) 100%), #d1d1d6"
        }
      }
    }
  },
  variants: {},
  plugins: []
};
