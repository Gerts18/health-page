import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");


export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        button: "#547EED",
      },
      backgroundImage: {
        'authImage': "url('/assets/bg.svg')",
        adn: "url('/assets/adn.png')",
        rose: "url('/assets/fondo-medio.jpg')",
        fondo_blu: "url(/assets/fondo.png)"
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
} satisfies Config;
