
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0A2342",
          50: "#E8EFFA",
          100: "#D1DEF4",
          200: "#A4BDE4",
          300: "#789DD5",
          400: "#4C7CC5",
          500: "#2C5D92",
          600: "#234A75",
          700: "#1A3858",
          800: "#11253B",
          900: "#0A2342",
          950: "#05121F",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#2C5D92",
          50: "#F1F6FC",
          100: "#E3ECF9",
          200: "#C7D9F3",
          300: "#ABC6ED",
          400: "#8FB3E7",
          500: "#73A0E1",
          600: "#4C7CC5",
          700: "#3A5F99",
          800: "#2C5D92",
          900: "#234A75",
          950: "#1A3858",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "#A4BDE4",
          50: "#F8FAFD",
          100: "#F1F5FB",
          200: "#E3ECF7",
          300: "#D5E2F3",
          400: "#C7D9EF",
          500: "#B9CFEB",
          600: "#A4BDE4",
          700: "#8FAADE",
          800: "#7B97D8",
          900: "#6684D2",
          950: "#5271CC",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "#F8F9FA",
          foreground: "#343A40",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          from: { opacity: "0", transform: "translateX(-30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
      },
      fontFamily: {
        'serif': ['Merriweather', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
