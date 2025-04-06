/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // serif: ['"PT Serif Caption"', 'serif'],
        // raleway: ['"Raleway"', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
    },
  },
  },
  plugins: [],
}