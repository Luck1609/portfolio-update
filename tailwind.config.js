/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        default: "#040b14",
        primary: "#149ddd",
        basic: "#173b6c",
        danger: "#e11d48",
        success: "#10b981"
      },
      backgroundImage: {
        code: "url('/img/code.jpg')",
        about: "url('/img/about.jpg')",
        hero: "url('/img/hero.jpg')",
      }
    },
  },
  plugins: [],
}

