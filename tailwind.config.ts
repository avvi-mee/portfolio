import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "Syne", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      colors: {
        cream: {
          50: "#FDFCFB",
          100: "#FAF8F5",
          200: "#F5F0EA",
          300: "#EDE5DA",
        },
        ink: {
          900: "#0A0908",
          800: "#1A1816",
          700: "#2D2A27",
          600: "#4A4540",
          500: "#6B6460",
          400: "#8C8480",
          300: "#ADA8A5",
          200: "#CEC9C6",
          100: "#E8E4E1",
        },
        accent: {
          DEFAULT: "#C8A97E",
          light: "#E8D5B5",
          dark: "#A08050",
        },
        indigo: {
          500: "#6366F1",
          600: "#4F46E5",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "noise-texture":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        "premium-sm": "0 2px 8px rgba(10,9,8,0.06), 0 1px 2px rgba(10,9,8,0.04)",
        "premium-md": "0 8px 24px rgba(10,9,8,0.08), 0 2px 6px rgba(10,9,8,0.04)",
        "premium-lg": "0 20px 60px rgba(10,9,8,0.12), 0 8px 20px rgba(10,9,8,0.06)",
        "premium-xl": "0 32px 80px rgba(10,9,8,0.15), 0 12px 30px rgba(10,9,8,0.08)",
        "glow-accent": "0 0 40px rgba(200,169,126,0.25), 0 0 80px rgba(200,169,126,0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
