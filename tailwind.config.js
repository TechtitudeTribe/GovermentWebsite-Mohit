/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      primary : '#ff7723',
      secondary : '#15a319',
      mid_gray:"#dedede"
      },
      backgroundImage:{
        background_image_1 : "url('/background-image-1.jfif')"
      }
    },
  },
  plugins: [],
}