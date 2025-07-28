import type { Config } from "tailwindcss";

const headerVariants = Array.from({ length: 10 }, (_, i) => i + 1);

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          main: "#F8E6DD",
          heading: "#111C43"
        },

        secondary: {
          main: "#F8E6DD",
        },

        accent: {
          main: "#0D112666",
        },

        info: {
          main: "#FFD7C0",
        },
      },
      fontSize: {
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "40px",
        "6xl": "3rem",
        heading: ["50px", { lineHeight: "1.4" }],
      },
    },
  },
  plugins: [],
};
export default config;
