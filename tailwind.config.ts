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
        },
        avatar: {
          100: "var(--avatar-100)",
        },
        muted: {
          100: "var(--muted-100)",
        },
        grey: {
          100: "var(--grey-100)",
        },
        accent: {
          100: "var(--accent-100)",
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
