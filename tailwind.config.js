/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        "paper-deep": "rgb(var(--paper-deep) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        mid: "rgb(var(--mid) / <alpha-value>)",
        mark: "rgb(var(--mark) / <alpha-value>)",
      },
      fontFamily: {
        display: ['"Barlow Condensed"', "sans-serif"],
        sans: ["Barlow", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
