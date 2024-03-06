import daisyUi from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xxs: { max: "340px" },
      xs: "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      xl2: { max: "1535px" }, // Custom breakpoint
    },
    // colors: {
    //   'almostblack':'#141B24',
    //   'seablue':'#00A8E1',
    //   'almostwhite':'#EEF3F9',
    //   'orangee':'#FF9900',
    //   'yello':'#FFB700'
    // },
  },

  plugins: [daisyUi],
};
