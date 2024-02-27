/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#2978f6",
        "sicondary" : "#1a95ad",
        "three": "#a1d6e3",
        "fourth": "#f1f1f2",
      }
    },
    container:{
      center:true,
      padding:{
        default:'20px',
        md:'50px'
      }
    }
  },
  plugins: [],
}

