import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F8FBFA",
        porcelain: "#EDF5F3",
        ink: "#10211F",
        muted: "#60736F",
        mint: "#D7EEE7",
        accent: "#0D8A7A",
        deep: "#06473F",
      },
      boxShadow: {
        premium: "0 24px 70px rgba(13, 138, 122, 0.14)",
        soft: "0 16px 45px rgba(16, 33, 31, 0.08)",
      },
      fontFamily: {
        sans: ["Aptos", "Segoe UI Variable", "Segoe UI", "ui-sans-serif", "system-ui"],
        mono: ["Cascadia Code", "JetBrains Mono", "ui-monospace", "SFMono-Regular"],
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(13, 138, 122, 0)" },
          "50%": { boxShadow: "0 0 34px rgba(13, 138, 122, 0.28)" },
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
