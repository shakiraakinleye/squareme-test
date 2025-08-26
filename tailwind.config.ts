import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          100: "var(--background-100)",
          200: "var(--background-200)",
        },
        foreground: {
          100: "var(--foreground-100)",
          200: "var(--foreground-200)",
          300: "var(--foreground-300)",
          400: "var(--foreground-400)",
          500: "var(--foreground-500)",
          600: "var(--foreground-600)",
        },
        avatar: {
          100: "var(--avatar-100)",
        },
        muted: {
          100: "var(--muted-100)",
          200: "var(--muted-200)",
          300: "var(--muted-300)",
          400: "var(--muted-400)",
          500: "var(--muted-500)",
        },
        grey: {
          100: "var(--grey-100)",
        },
        accent: {
          100: "var(--accent-100)",
        },
        border: {
          100: "var(--border-100)",
          200: "var(--border-200)",
          300: "var(--border-300)",
          400: "var(--border-400)",
        },
        magenta: {
          100: "var(--magenta-100)",
        },
        success: {
          100: "var(--success-100)",
          200: "var(--success-200)",
          300: "var(--success-300)",
        },
        pending: {
          100: "var(--pending-100)",
          200: "var(--pending-200)",
          300: "var(--pending-300)",
        },
        error: {
          100: "var(--error-100)",
          200: "var(--error-200)",
          300: "var(--error-300)",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      fontSize: {
        xxs: "0.625rem",
      },
    },
  },
  plugins: [],
};
export default config;
