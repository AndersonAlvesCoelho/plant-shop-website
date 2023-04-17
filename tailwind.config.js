/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        ziggurat: {
          50: "#fcfdfd",
          100: "#f9fcfc",
          200: "#f0f6f6",
          300: "#e6f1f1",
          400: "#d4e7e7",
          500: "#c1dcdc",
          600: "#aec6c6",
          700: "#91a5a5",
          800: "#748484",
          900: "#5f6c6c",
        },
      },
    },
  },
  plugins: [],
};
