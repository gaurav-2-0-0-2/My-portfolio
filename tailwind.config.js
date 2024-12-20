/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     screens:{
      'sm':'288px',
      'md': '1300px',
      'lg': '1920px',
      'llg':  '3840px'
      
     },
    extend: {
      fontFamily:{
       poppins: ["var(--font-poppins)"]
      },

    },
    
  },
  plugins: [],
}


