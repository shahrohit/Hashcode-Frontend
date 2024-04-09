import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        primarybg: "rgb(var(--background-primary-rgb))",
        secondaybg: "rgb(var(--background-secondary-rgb) / 0.4)",
      },
      colors: {
        primaryhead: "rgb(var(--foreground-heading-rgb))",
        primarypara: "rgb(var(--foreground-para-rgb))",
        primarycol: "rgb(var(--primary-color-rgb))",
        secondarycol: "rgb(var(--secondary-color-rgb))",
        easy: "rgb(var(--foreground-easy-rgb))",
        medium: "rgb(var(--foreground-medium-rgb))",
        hard: "rgb(var(--foreground-hard-rgb))",
      },
      boxShadow: {
        "my-primary": "rgba(102, 116, 204, 0.25) 0px 4px 10px",
        secondaysh: "rgba(102, 116, 204, 0.8) 0px 0px 8px",
        third: "rgba(0, 0, 0, 0.25) 0px 4px 10px",
      },
      borderColor: {
        primarybdr: "rgb(var(--border-color)/ var(--border-color-op))",
      },
      screens: {
        "2xl": "1536px",
        xl: "1280px",
        lg: "1024px",
        md: "880px",
        xmd: "670px",
        sm: "540px",
        xs: "450px",
        xxs: "350px",
        xxxs: "300px",
      },
    },
  },

  plugins: [],
};
export default config;
