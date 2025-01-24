import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '300px',
      },
      fontFamily: {
        main: ["Josefin Sans", "serif"],
      },
      colors: {
      },
    },
  },
  plugins: [],
} satisfies Config;
