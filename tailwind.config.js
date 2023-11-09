module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        "primary-color": "#0BAB7C",
        "dark-1": "#24252D",
        "white-1": "#FFFFFF",
        "natural-grey": "#92929D",
        "sc-1": "#C7F4C2",
        "sc-2": "#D7D0FF",
        "sc-3": "#FDDD8C",
        "sc-4": "#FFBBD7",
        "black-light": "#44444F",
        "natural-2": "#F1F1F5",
        "black-1": "#171725",
        "natural-3": "#696974",
        "natural-4": "#FAFAFB",
        "natural-5": "#F5F5F8",
        "natural-color": "#44444F",
        "natural-color-6": "#E2E2EA",
        "black-dark": "#000700",
        "black-bg": "#13131A",
        "black-bg-2": "#1C1C24",
        "black-bg-3": "#21212B",
        "natural-1": "#F4F4F4",
        "file-active": "#2196f3",
        "file-accept": "#00e676",
        "file-reject": "#ff1744",
        "overlay-black": "rgba(0, 0, 0, 0.8)",
      },
      width: {
        215: "215px",
        357: "357px",
        557: "557px",
      },
      minWidth: {
        155: "155px",
        190: "190px",
        215: "215px",
        240: "240px",
        256: "256px",
        327: "327px",
      },
      height: {
        300: "300px",
        557: "557px",
      },
      inset: {
        45: "45%",
        65: "65px",
      },
      spacing: {
        65: "65px",
      },
      flex: {
        2: "2 2 0%",
      },
      lineHeight: {
        70: "70px",
      },
      zIndex: {
        "-5": "-5",
        0: "0",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};