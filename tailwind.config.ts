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
        iv: "878px",
      },
      fontSize: {
        "7": "clamp(6px, 17px, 100vw * 7 / 375)",
        "8": "clamp(8px, 18px, 100vw * 8 / 375)",
        "12": "clamp(10px, 12px, 100vw * 10 / 375)",
        "14": "clamp(10px, 14px, 100vw * 14 / 420)",
        "16": "clamp(14px, 16px, 100vw * 14 / 375)",
        "18": "clamp(16px, 18px, 100vw * 16 / 375)",
        "20": "clamp(10px, 100vw * 20 / 768, 20px)",
        "14md": "clamp(10px, 100vw * 14 / 768, 14px)",
        "16md": "clamp(12px, 100vw * 16 / 768, 16px)",
        "18md": "clamp(12px, 18px, 100vw * 18 / 1280)",
        "20md": "clamp(14px, 100vw * 20 / 768, 20px)",
        "24md": "clamp(16px, 100vw * 24 / 1280, 24px)",
        "30md": "clamp(20px, 100vw * 30 / 1280, 30px)",
        "14lg": "var(--font-14lg)",
        "16lg": "var(--font-16lg)",
        "18lg": "var(--font-18lg)",
        "20lg": "var(--font-20lg)",
        "21lg": "var(--font-21lg)",
        "23lg": "var(--font-23lg)",
        "24lg": "var(--font-24lg)",
        "25lg": "var(--font-25lg)",
        "26lg": "clamp(20px, 26px, 100vw * 26 / 1024)",
        "30lg": "var(--font-30lg)",
        "36lg": "var(--font-36lg)",
        "62lg": "clamp(48px, 100vw * 62 / 1024, 62px)",
        "16xl": "clamp(12px, 100vw * 16 / 1280, 16px)",
        "36iv": "clamp(18px, 100vw * 36 / 878, 36px)",
        "26iv": "clamp(15.6px, 100vw * 26 / 878, 26px)",
        "18iv": "clamp(12px, 100vw * 18 / 878, 18px)",
      },
    },
  },
  plugins: [],
};
export default config;
