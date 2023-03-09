/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'xxs': '0.85rem',
    },
    container:{
      center:true,
      padding: "1rem"
    },
    extend: {
      spacing:{
        "5px": "5px",
      },
      fontFamily:{
        sans:["IRANSanse"],
      }
    },
  },
  plugins: [],
}
