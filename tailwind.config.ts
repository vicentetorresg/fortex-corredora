import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef1f7",
          100: "#d5dbe8",
          200: "#a8b4cf",
          300: "#7b8db6",
          400: "#4e669d",
          500: "#2d4170",
          600: "#253660",
          700: "#1B2A4E",
          800: "#141f3a",
          900: "#0d1426",
          950: "#080c17",
        },
        gold: {
          50: "#fdf8ed",
          100: "#f9edcf",
          200: "#F3E1A6",
          300: "#E4C77E",
          400: "#D4AD56",
          500: "#B8903F",
          600: "#9A7535",
          700: "#8E6B2C",
          800: "#6B5021",
          900: "#483616",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
