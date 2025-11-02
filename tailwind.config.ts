import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blush: {
          50: "#fff8fb",
          100: "#ffeef5",
          200: "#ffd9e7",
          300: "#ffc2d9",
          400: "#ff9cbc",
          500: "#ff7aa2",
          600: "#ff4f82",
          700: "#e12269",
          800: "#b11552",
          900: "#880e3f"
        },
        cream: {
          50: "#fffdf8",
          100: "#fff9ed",
          200: "#fff0d1",
          300: "#ffe4ad",
          400: "#ffd07a",
          500: "#ffb94b",
          600: "#ea9420",
          700: "#c26f11",
          800: "#99550f",
          900: "#7c4511"
        }
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "'Inter'", "system-ui", "sans-serif"],
        display: ["'Playfair Display'", "serif"]
      },
      boxShadow: {
        soft: "0 20px 45px -25px rgba(255, 122, 162, 0.5)",
        card: "0 15px 40px -20px rgba(40, 29, 45, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
