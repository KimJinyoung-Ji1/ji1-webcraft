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
        surface: {
          DEFAULT: "#0e0929",
          low: "#130e31",
          container: "#19143a",
          high: "#1f1943",
          highest: "#261f4d",
          bright: "#2c2556",
        },
        primary: {
          DEFAULT: "#a9a4ff",
          dim: "#675bff",
          container: "#9a94ff",
        },
        secondary: {
          DEFAULT: "#00e3fd",
          dim: "#00d4ec",
          container: "#006875",
        },
        tertiary: {
          DEFAULT: "#a68cff",
          container: "#7c4dff",
        },
        "on-surface": {
          DEFAULT: "#e8e2ff",
          variant: "#ada6ce",
        },
        outline: {
          DEFAULT: "#777196",
          variant: "#484466",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
        display: ["var(--font-manrope)", "Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
