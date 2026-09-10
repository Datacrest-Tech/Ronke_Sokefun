/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0b132b",
        alabaster: "#f8f9fa",
        slate: {
          DEFAULT: "#1e293b",
          muted: "#64748b",
        },
        emerald: {
          DEFAULT: "#1b4332",
          light: "#2d6a4f",
        },
        terracotta: "#b45309",
        stroke: "#e2e8f0",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 25px -5px rgba(0, 0, 0, 0.05)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.25, 0.1, 0.25, 1.0)",
      },
    },
  },
  plugins: [],
};
