import { heroui, navbar } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0",
        sm: "1rem",
      },
      screens: {
        sm: "358px",
        md: "672px",
        lg: "928px",
        xl: "1200px",
        "2xl": "1200px",
      },
    },
    screens: {
      sm: "390px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#008558",
          50: "#e6f5ef",
          100: "#ccebdf",
          200: "#99d7bf",
          300: "#66c39f",
          400: "#33af7f",
          500: "#008558",
          600: "#006a46",
          700: "#005035",
          800: "#003523",
          900: "#001b12",
        },
        border: {
          primary: "#001166",
        },
        text: {
          primary: "#1A1C21",
          secondary: "#343741",
          muted: "#000626",
          subtle: "#000933A6",
        },
        background: {
          yellow: "#FFEBD6",
          white: "#F5F6FA",
        },
        surface: {
          white: "#FFFFFF",
          light: "#F8F9FA",
          dark: "#1A1C21",
        },
      },

      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1.2" }],
        "6xl": ["3.5rem", { lineHeight: "1.1" }],
      },

      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },

      spacing: {
        section: "5rem",
        sm: "1rem",
        "section-sm": "3rem",
        18: "4.5rem",
        100: "27.5rem",
        "logo-spacer": "10.5rem",
      },
      maxWidth: {
        "6xl": "34.75rem",
        "7xl": "40rem",
        "hero-text": "85%",
      },
      translate: {
        "hero-mobile": "15%",
        "hero-desktop": "10%",
        "hero-desktop-mobile": "30%",
      },

      borderRadius: {
        card: "0.75rem",
        button: "0.5rem",
      },

      boxShadow: {
        card: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        "card-hover":
          "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {},
    }),
  ],
};

export default config;
