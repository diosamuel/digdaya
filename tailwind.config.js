/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vogue: ["Vogue", "sans-serif"], // Define your custom font family
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'red': '#DE0100',
      }
    },
  },
  plugins: [],
};
