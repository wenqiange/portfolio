/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pulseDot: {
          "0%, 80%, 100%": { transform: "scale(0.85)", opacity: "0.45" },
          "40%": { transform: "scale(1)", opacity: "1" },
        },
        slideUp: {
          from: { transform: "translateY(8px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "pulse-dot": "pulseDot 1.2s infinite",
        "slide-up": "slideUp 0.26s ease",
      },
    },
  },
  plugins: [],
}

