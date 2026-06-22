/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lime': '#C8FF00',
        'lime-dark': '#B0E000',
        'navy': '#1A1A2E',
        'navy-light': '#16213E',
        'blue-accent': '#217DD1',
        'off-white': '#F5F5F0',
        'warm-gray': '#E8E8E3',
      },
      boxShadow: {
        'brutal': '4px 4px 0px #000000',
        'brutal-lg': '6px 6px 0px #000000',
        'brutal-xl': '8px 8px 0px #000000',
        'brutal-sm': '2px 2px 0px #000000',
      },
      fontFamily: {
        'sans': ['"PingFang SC"', '"Microsoft YaHei"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
