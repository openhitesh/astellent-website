/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media', // or 'class' if you prefer manual toggling
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}