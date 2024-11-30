import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",        // Added primary color
        secondary: "var(--secondary)",  // Added heading color
        border: "var(--border)",          // Added border color
        grid: "var(--grid-line-color)",  // Added grid line color
      },
    },
  },
  darkMode: "selector",
  plugins: [],
} satisfies Config;
