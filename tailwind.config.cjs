/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
        clashDisplay: ['clash display'],
        satoshi: ['satoshi'],
        stix: ['STIX Two Text'],
        rubik: ['Rubik'],

      },
  },
  plugins: [],
};
