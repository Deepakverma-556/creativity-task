/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        md: '770px',
        lg:'1025px'
      },
      fontFamily: {
        macondo: ["Macondo", "serif"]
      }
    },
  },
  plugins: [],
}