/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark':'#2d3944',
        'light':'#d4e9ff',
        'soft':'#97b3d8',
        'normal':'#336699',
        'hard':'#253759',
        'black':'#1a2740',
      }
    }
  },
  plugins: [],
}