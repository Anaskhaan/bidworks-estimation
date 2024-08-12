/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
      color: {
        customBlue: "#265077",
        blueTwo: "022140",
      },
    },
  },
  plugins: [],
};
