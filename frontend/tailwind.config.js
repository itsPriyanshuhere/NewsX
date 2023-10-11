/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#191816",
          2: "#D2B590", 
          3: "#4E4333", 
          4: "#ABA294", 
          5: "#B69568", 
          6: "#8D785F",
        },
        custom: "#191919",
      },
      fontFamily: {
        robotoMono: ['Roboto Mono', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
