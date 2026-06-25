import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F7FAFF",
        porcelain: "#ECF3FF",
        ink: "#17213B",
        muted: "#6F7D98",
        mint: "#DCE7FF",
        accent: "#3B6FE7",
        deep: "#2749A7",
      },
      boxShadow: {
        premium: "0 24px 70px rgba(59, 111, 231, 0.16)",
        soft: "0 16px 45px rgba(23, 33, 59, 0.08)",
      },
      fontFamily: {
        sans: ["Aptos", "Segoe UI Variable", "Segoe UI", "ui-sans-serif", "system-ui"],
        mono: ["Cascadia Code", "JetBrains Mono", "ui-monospace", "SFMono-Regular"],
        heading: ['"Iowan Old Style"', '"Palatino Linotype"', "Georgia", "serif"],
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(59, 111, 231, 0)" },
          "50%": { boxShadow: "0 0 34px rgba(59, 111, 231, 0.28)" },
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" },
        },
        gradientMove: {
          "0%, 100%": { transform: "translate3d(-2%, -1%, 0) scale(1)" },
          "50%": { transform: "translate3d(2%, 2%, 0) scale(1.04)" },
        },
      },
      animation: {
        glow: "glow 3.2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        gradientMove: "gradientMove 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
