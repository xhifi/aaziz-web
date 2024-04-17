/** @type {import('tailwindcss').Config} */
// const plugin = require("tailwindcss/plugin");
import plugin from "tailwindcss/plugin";

module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontSize: {
      sm: ["12px", "18px"],
      base: ["14px", "22px"],
      lg: ["22px", "30px"],
      xl: ["38px", "46px"],
      "2xl": ["62px", "70px"],
    },
    extend: {
      fontFamily: {
        raleway: ["var(--font-raleway)", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#9b0000",
        secondary: "#ecc94b",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    require("tw-neumorphism"),
  ],
};
