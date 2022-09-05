/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          DEFAULT: "#FCC32B",
        },
        secondary: {
          DEFAULT: "#143793",
        }
      },
    },
  },
  plugins: [],
}