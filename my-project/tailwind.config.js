/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blind-man' : "url('/src/assets/blind.png')",
        'smartStick-Logo' : "url('/src/assets/smartStickLogo.png')"
      },
      colors: {
        darkBlue : "#1E2446",
        headerColor : "#171C36",
        cardColor : "#1A1826"
      }
    },
  },
  plugins: [],
}
