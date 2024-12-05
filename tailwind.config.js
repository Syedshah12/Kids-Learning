import pic from './src/assets/3.png'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/Home/bg.png')",
        'custom-bg2': "url('/Home/bg2.png')",
      },
      fontFamily: {
        'mulish': ['Roboto', 'serif'],
        'atma': ['Atma', 'system-ui'],
        
      },
      colors:{
        'po':"#676767",
        'lo':"#F39361",

      }
    },
  },
  plugins: [],
}

// font-family: "Atma", system-ui;