/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': 'rgb(30, 29, 29)',
        'light-gray' : 'rgb(60, 58, 58)',
      },
    },
  },
  plugins: [],
}