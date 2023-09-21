/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Add custom colors
        primary: '#903AFF',
        purplePink: '#D434FE',
        bgColor: '#150E28',
      },

      fontFamily: {
        timerFont: 'Roboto Condensed'
      }
    },
  },
  plugins: [],
}