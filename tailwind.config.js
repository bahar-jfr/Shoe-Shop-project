/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "main.js"],
  theme: {
    extend: {
      colors: {
        blue_tangaroa: "#152536",
        blue_charcoal: "#212529",
        dark_gray : "#757475",
        light_gray: "#FAFAFA",
        medium_gray :"#F3F3F3",
        gray : "#ECECEC"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        xs:["10px","12.1px"],
        s:["12px","14px"],
        sm: ["14px","16.94px"],
        md: ["16px", "24px"],
        xmd:["18px","20px"],
        lg:["20px","24px"],
        slg:["24px","24px"],
        xlg:["26px","26px"],
        xl: ["32px", "39px"],
      },
      padding: {
        100: "24.5rem",
        76: "19.125rem",
        31 : "7.625rem",
        30 : "7.5rem",
        4: "0.938rem"
      },
      margin: {
        68: "16.875rem",
      },
      borderRadius: {
        xxl: "30px",
        '2xl': "21px",
        '4xl': "32px",
        '6xl': "50px"
      },
      height:{
        46:"11.375rem",
        34: "8.875rem",
        15 : "3.75rem",
        "2/6": "46%"
      },
      width:{
        46:"11.375rem",
        34: "8.875rem",
        15 : "3.75rem"
      },
      boxShadow:{
        'md':' 0px 3px 20px 0px rgba(240,235,240,2)',
        'lg':' 0px 3px 40px 0px rgba(240,235,240,1)',
        'xl': '0 18px 20px -5px rgb(0 0 0 / 0.1)'
      },
      spacing:{
        "15": "60px"
      }
    },
  },
  plugins: [],
};
