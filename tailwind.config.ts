import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "luga-dark": "#0D1B4B",
        "luga-royal": "#1565C0",
        "luga-medium": "#1976D2",
        "luga-light": "#42A5F5",
        "luga-accent": "#2196F3",
        "luga-bg": "#F8FAFC",
        "luga-text-secondary": "#64748B",
        "luga-text-tertiary": "#94A3B8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "luga-gradient": "linear-gradient(135deg, #1565C0, #42A5F5)",
        "luga-hero": "linear-gradient(135deg, #0D1B4B 0%, #1565C0 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
