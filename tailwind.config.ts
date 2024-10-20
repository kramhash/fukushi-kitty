import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        notosans: "var(--font-notosans)",
        mplus1c: "var(--font-mplus)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        kitty_red: "var(--kittyred)",
        kitty_blue: "var(--kittyblue)",
        kitty_gray: "var(--grey)",
        border_color: "rgba(0,0,0,0.5)",
      },
      screens: {
        s: "460px",
      },
      fontSize: {
        "7": "clamp(6px, 17px, 100vw * 7 / 375)",
        "8": "clamp(8px, 18px, 100vw * 8 / 375)",
        "12": "clamp(10px, 12px, 100vw * 10 / 375)",
        "14": "clamp(10px, 14px, 100vw * 14 / 420)",
        "16": "clamp(14px, 16px, 100vw * 14 / 375)",
        "18": "clamp(16px, 18px, 100vw * 16 / 375)",
        "20": "clamp(18px, 20px, 100vw * 18 / 375)",
        "14md": "clamp(12px, 14px, 100vw * 14 / 1280)",
        "16md": "clamp(12px, 16px, 100vw * 16 / 1280)",
        "18md": "clamp(12px, 18px, 100vw * 18 / 1280)",
        "20md": "clamp(12px, 20px, 100vw * 20 / 1440)",
        "18lg": "clamp(16px, 18px, 100vw * 18 / 1280)",
        "26lg": "clamp(20px, 26px, 100vw * 26 / 1280)",
      },
    },
  },
  plugins: [],
};
export default config;
