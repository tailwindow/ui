const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    colors: {
      body: "#F7F8FB",
      black: "#1F1F21",
      white: "#ffff",
      light: "#fbfbfd",
      //
      primary: {
        default: "#0a84ff",
        hover: "#409cff",
        alpha: "rgba(0, 122, 255, 0.1)",
        "alpha-hover": "rgba(0, 64, 221, 0.1)",
        //
        dark: "#007aff",
        "dark-hover": "#0040dd",
        "dark-alpha": "rgba(10, 132, 255, 0.1)",
        "dark-alpha-hover": "rgba(64, 156, 255, 0.1)"
      },
      secondary: {
        default: "#ffcc00",
        hover: "#a05a00",
        alpha: "rgba(160, 90, 0, 0.1)",
        "alpha-hover": "rgba(0, 64, 221, 0.1)",
        //
        dark: "#ffd60a",
        "dark-hover": "#ffd426",
        "dark-alpha": "rgba(255, 214, 10, 0.1)",
        "dark-alpha-hover": "rgba(255, 212, 38, 0.1)"
      },
      //
      blue: {
        ...colors.blue,
        default: "#0a84ff",
        hover: "#409cff",
        alpha: "rgba(0, 122, 255, 0.1)",
        "alpha-hover": "rgba(0, 64, 221, 0.1)",
        //
        dark: "#007aff",
        "dark-hover": "#0040dd",
        "dark-alpha": "rgba(10, 132, 255, 0.1)",
        "dark-alpha-hover": "rgba(64, 156, 255, 0.1)"
      },
      green: {
        ...colors.green,
        default: "#34C759",
        hover: "#248a3d",
        alpha: "rgba(52, 199, 89, 0.1)",
        "alpha-hover": "rgba(36, 138, 61, 0.1)",
        //
        dark: "#30D158",
        "dark-hover": "#30DB5B",
        "dark-alpha": "rgba(48, 209, 88, 0.1)",
        "dark-alpha-hover": "rgba(48, 219, 91, 0.1)"
      },
      indigo: {
        ...colors.indigo,
        default: "#5856d6",
        hover: "#3634a3",
        alpha: "rgba(88, 86, 214, 0.1)",
        "alpha-hover": "rgba(54, 52, 163, 0.1)",
        //
        dark: "#5e5ce6",
        "dark-hover": "#7d7aff",
        "dark-alpha": "rgba(94, 92, 230, 0.1)",
        "dark-alpha-hover": "rgba(125, 122, 255, 0.1)"
      },
      orange: {
        ...colors.orange,
        default: "#ff9500",
        hover: "#c93400",
        alpha: "rgba(255, 149, 0, 0.1)",
        "alpha-hover": "rgba(201, 52, 0, 0.1)",
        //
        dark: "#ff9f0a",
        "dark-hover": "#ffb340",
        "dark-alpha": "rgba(255, 159, 10, 0.1)",
        "dark-alpha-hover": "rgba(255, 179, 64, 0.1)"
      },
      pink: {
        ...colors.pink,
        default: "#ff2d55",
        hover: "#d30f45",
        alpha: "rgba(255, 45, 85, 0.1)",
        "alpha-hover": "rgba(211, 15, 69, 0.1)",
        //
        dark: "#ff375f",
        "dark-hover": "#ff6482",
        "dark-alpha": "rgba(255, 55, 95, 0.1)",
        "dark-alpha-hover": "rgba(211, 15, 69, 0.1)"
      },
      purple: {
        ...colors.purple,
        default: "#af52de",
        hover: "#8944ab",
        alpha: "rgba(175, 82, 222, 0.1)",
        "alpha-hover": "rgba(137, 68, 171, 0.1)",
        //
        dark: "#bf5af2",
        "dark-hover": "#da8fff",
        "dark-alpha": "rgba(191, 90, 242, 0.1)",
        "dark-alpha-hover": "rgba(218, 143, 255, 0.1)"
      },
      red: {
        ...colors.red,
        default: "#ff3b30",
        hover: "#d70015",
        alpha: "rgba(255, 59, 48, 0.1)",
        "alpha-hover": "rgba(215, 0, 21, 0.1)",
        //
        dark: "#ff453a",
        "dark-hover": "#ff6961",
        "dark-alpha": "rgba(255, 69, 58, 0.1)",
        "dark-alpha-hover": "rgba(255, 105, 97, 0.1)"
      },
      teal: {
        ...colors.teal,
        default: "#5ac8fa",
        hover: "#0071a4",
        alpha: "rgba(90, 200, 250, 0.1)",
        "alpha-hover": "rgba(0, 113, 164, 0.1)",
        //
        dark: "#64d2ff",
        "dark-hover": "#70d7ff",
        "dark-alpha": "rgba(100, 210, 255, 0.1)",
        "dark-alpha-hover": "rgba(112, 215, 255, 0.1)"
      },
      yellow: {
        ...colors.yellow,
        default: "#ffcc00",
        hover: "#a05a00",
        alpha: "rgba(160, 90, 0, 0.1)",
        "alpha-hover": "rgba(0, 64, 221, 0.1)",
        //
        dark: "#ffd60a",
        "dark-hover": "#ffd426",
        "dark-alpha": "rgba(255, 214, 10, 0.1)",
        "dark-alpha-hover": "rgba(255, 212, 38, 0.1)"
      },
      gray: {
        ...colors.gray,
        default: "#808291",
        hover: "#6C6C70",
        alpha: "rgba(0, 122, 255, 0.1)",
        "alpha-hover": "rgba(0, 64, 221, 0.1)",
        //
        dark: "#f2f2f7",
        "dark-hover": "#d1d1d6",
        "dark-alpha": "rgba(10, 132, 255, 0.1)",
        "dark-alpha-hover": "rgba(64, 156, 255, 0.1)"
      },
      grey: {
        default: "#9696A0",
        hover: "#9691A0",
        alpha: "rgba(0, 122, 255, 0.1)",
        "alpha-hover": "rgba(0, 64, 221, 0.1)",
        //
        dark: "#f2f2f7",
        "dark-hover": "#d1d1d6",
        "dark-alpha": "rgba(10, 132, 255, 0.1)",
        "dark-alpha-hover": "rgba(64, 156, 255, 0.1)"
      }
    },
    extend: {
      spacing: {
        72: "20rem",
        84: "24rem",
        96: "28rem",
        128: "32rem",
        140: "36rem",
        152: "40rem"
      },
      borderRadius: {
        10: "10px",
        20: "20px",
        30: "30px",
        40: "40px",
        50: "50px"
      },
      boxShadow: {
        // fully shadow
        10: "0px 0px 20px 2px rgba(0, 0, 0, 0.05)",
        20: "0px 0px 30px 4px rgba(0, 0, 0, 0.05)",
        30: "0px 0px 40px 6px rgba(0, 0, 0, 0.05)",
        40: "0px 0px 40px 8px rgba(0, 0, 0, 0.1)",
        50: "0px 0px 50px 10px rgba(0, 0, 0, 0.1)",
        60: "0px 0px 60px 10px rgba(0, 0, 0, 0.1)",
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
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont"],
        serif: ["Source Serif Pro", "Cambria"],
        mono: ["Source Code Pro", "Menlo"],
        // custom
        primary: [
          "Manrope",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont"
        ],
        secondary: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont"]
      },
      fontSize: {
        paragraph: "14px",
        description: "16px",
        //
        "display-1": "70px",
        "display-2": "65px",
        "display-3": "60px",
        "display-4": "50px",
        "display-5": "45px",
        "display-6": "40px",
        "heading-1": "36px",
        "heading-2": "32px",
        "heading-3": "28px",
        "heading-4": "24px",
        "heading-5": "20px",
        "heading-6": "16px",
        "title-1": "26px",
        "title-2": "24px",
        "title-3": "22px",
        "title-4": "20px",
        "title-5": "18px",
        "title-6": "16px",
        "subtitle-1": "18px",
        "subtitle-2": "16px",
        "subtitle-3": "14px",
        "subtitle-4": "12px",
        "subtitle-5": "10px",
        "subtitle-6": "8px",
        "label-1": "16px",
        "label-2": "14px",
        "label-3": "12px",
        "label-4": "10px",
        "label-5": "8px",
        "label-6": "6px"
      }
    }
  },
  variants: {},
  plugins: []
};
