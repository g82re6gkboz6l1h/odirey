import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          50: "#f1f6f4",
          100: "#dce9e3",
          200: "#bad3c7",
          300: "#91b5a6",
          400: "#6a9685",
          500: "#4c7a69",
          600: "#3a6052",
          700: "#28473c",
          800: "#192f27",
          900: "#0d1b17",
          950: "#050c0a",
        },
        nebula: {
          50: "#fff9ef",
          100: "#ffe9cc",
          200: "#ffd096",
          300: "#ffb15c",
          400: "#ff9240",
          500: "#ff6d2d",
          600: "#db4720",
          700: "#b7351f",
          800: "#7d2318",
          900: "#42100c",
        },
        pulse: {
          50: "#fff1f7",
          100: "#ffd8e8",
          200: "#ffafd1",
          300: "#ff82b7",
          400: "#ff5a9c",
          500: "#f03286",
          600: "#cc1f72",
          700: "#a01458",
          800: "#6b0b3b",
          900: "#3b051f",
        },
        ember: {
          50: "#f2fbf8",
          100: "#d5f5eb",
          200: "#a7ebd4",
          300: "#74dbbb",
          400: "#47c7a2",
          500: "#2ba687",
          600: "#1f836c",
          700: "#196754",
          800: "#104338",
          900: "#09241f",
        },
        graphite: {
          50: "#f6f5f3",
          100: "#ece8e2",
          200: "#d3cfc4",
          300: "#b7b09f",
          400: "#988d78",
          500: "#7c715d",
          600: "#625848",
          700: "#4a4135",
          800: "#312a23",
          900: "#1b160f",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
        "orb-gradient":
          "radial-gradient(circle at top, rgba(255,109,45,0.28), transparent 55%), radial-gradient(circle at 20% 20%, rgba(47,205,160,0.3), transparent 45%)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
        "6xl": "3.5rem",
      },
      boxShadow: {
        aurora: "0 20px 70px rgba(1, 7, 4, 0.65)",
        grid: "inset 0 0 0 1px rgba(255,255,255,0.08)",
        glow: "0 0 35px rgba(255, 109, 45, 0.4)",
      },
      spacing: {
        18: "4.5rem",
        28: "7rem",
      },
      letterSpacing: {
        mega: ".4em",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "float-slow": "floatSlow 12s ease-in-out infinite",
        pulseGlow: "pulseGlow 3.5s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 40px rgba(240,50,134,0.25)",
          },
          "50%": {
            boxShadow: "0 0 65px rgba(255,109,45,0.45)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
