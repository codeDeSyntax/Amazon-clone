 import daisyUi from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },

  colors: {
    'almostblack':'#141B24',
    'seablue':'#00A8E1',
    'almostwhite':'#E'
  },
  plugins: [daisyUi],
};
