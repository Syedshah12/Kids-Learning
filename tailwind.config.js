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
        'wordgame': "url('/games/wrodgame.jpg')",
        'patterngame': "url('/games/patterngame.jpeg')",
        'contact': "url('/Home/contact.png')",
      },
      fontFamily: {
        'mulish': ['Roboto', 'serif'],
        'atma': ['Atma', 'system-ui'],
        
      },
      colors:{
        'po':"#676767",
        'lo':"#F39361",
        "beige":"#F5F5DD"

      }
    },
  },
  plugins: [],
}

// font-family: "Atma", system-ui;