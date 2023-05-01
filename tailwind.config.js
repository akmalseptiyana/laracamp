/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#31B380",
        yellow: "#F3BF39",
        red: "#EB4132",
        navy: "#211B3D",
        purple: "#7839F3",
        grey: "#5B5575",
        "soft-green": "#DAFFF0",
        "soft-yellow": "#FFEBB9",
        "soft-red": "#FFEEED",
        "soft-grey": "#D2D1DA",
        "purple-soft-one": "#F5EFFF",
        "purple-soft-two": "#ECE3FE",
        "dark-purple": "#4D1CAB",
        "yellow-star": "#F3A939",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
