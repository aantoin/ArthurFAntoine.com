/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        manila: "rgb(var(--color-manila) / <alpha-value>)",
        "manila-shaded": "rgb(var(--color-manila-shaded) / <alpha-value>)",
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
      },
      animation: {
        "folder-toss": "folder-toss 1.5s cubic-bezier(0.190, 1.000, 0.220, 1.000) 0s 1 forwards"
      },
      keyframes: {
        "folder-toss": {
          "0%": {
            transform: "rotate(-360deg)",
            right: "-190%",
            top: "-90%",
          },
        }
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};