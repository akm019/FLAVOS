/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkmode:"class",
  theme: {
    extend: {
      colors:{
        primary:"#ffc001",
        secondary:"#ff9c01",
        dark:"#1e1e1e",
        light:"#f5f5f5",

      },
    },
    container:{
      center:true,
      padding:{
        DEFAULT:"1rem",
        sm:"3rem",
      },
    },
  },
  plugins: [],
}

