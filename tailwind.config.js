/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#726EFF',
        secondary: '#5AFFE7',
        accent: '#08C6AB',
        dark: '#37465B',
        success: '#08C6AB',
        warning: '#F59E0B',
        danger: '#EF4444',
      },
      backgroundColor: {
        'dark-bg': '#37465B',
      },
      textColor: {
        'dark': '#37465B',
      }
    },
  },
  plugins: [],
}