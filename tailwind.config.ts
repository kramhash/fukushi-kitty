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
      },
      screens: {
        s: "460px",
      },
    },
  },
  plugins: [],
};
export default config;
