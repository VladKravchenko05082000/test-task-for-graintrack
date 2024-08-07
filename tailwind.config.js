/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobileS: "320px",
      mobileM: "375px",
      mobileL: "425px",
      tablet: "768px",
      laptop: "1024px",
      laptopL: "1440px",
    },
    fontSize: {
      inputLabel: [
        "0.9375rem",
        {
          lineHeight: "2.1875rem",
          fontWeight: "500",
        },
      ],
      heading: [
        "1.5rem",
        {
          lineHeight: "2.1875rem",
          fontWeight: "700",
        },
      ],
    },
    colors: {
      inputBackgroundColor: "rgba(0, 0, 0, 0.1)",
      white: "white",
      purple: "rgb(101, 80, 185)",
      red: "red",
    },
    boxShadow: {
      outFocus: "0 0 0 1px rgba(0,0,0,0.4)",
      inFocus: "0 0 0 2px rgba(0,0,0,0.4)",
    },
    extend: {},
  },
  plugins: [],
};
