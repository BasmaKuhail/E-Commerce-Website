/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FAFAFA",
        lightGray: "#F5F5F5",
        red: "#DB4444",
        green: "#00FF66",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xsm: "10px",
        sm: "12px",
        md: "16px",
        lg: "18px",
        xl: "30px",
        "2xl": "48px",
      },
    },
  },
  plugins: [],
}
