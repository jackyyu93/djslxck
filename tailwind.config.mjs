/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        surface: "#111111",
        "surface-2": "#1A1A1A",
        accent: "#FF006E",
        "accent-soft": "#FF006E1A",
        text: "#F5F5F5",
        muted: "#8A8A8A",
        border: "#262626",
      },
      fontFamily: {
        display: ["Anton", "Impact", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wider: "0.08em",
        widest: "0.16em",
      },
      boxShadow: {
        glow: "0 0 24px rgba(255, 0, 110, 0.45)",
        "glow-lg": "0 0 48px rgba(255, 0, 110, 0.6)",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "fade-up": "fadeUp 0.7s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
