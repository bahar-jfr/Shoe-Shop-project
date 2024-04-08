/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "main.js"],
  theme: {
    extend: {
      colors: {
        tangaroa: "#152536",
        blue_charcoal: "#212529",
        light_gray: "#FAFAFA",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        md: ["16px", "24px"],
        xl: ["32px", "39px"],
      },
      margin: {
        68: "16.875rem",
      },
      borderRadius:{
        xxl : "30px",
      }
    },
  },
  plugins: [],
};
