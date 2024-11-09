import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '375px',
      'lg': '1440px',
    },
    extend: {
      colors: {
        primary: {
          'soft-blue': 'hsl(215, 51%, 70%)',
          'cyan': 'hsl(178, 100%, 50%)',
        },
        neutral: {
          'very-dark-blue-bg': 'hsl(217, 54%, 11%)',
          'very-dark-blue-card': 'hsl(216, 50%, 16%)',
          'very-dark-blue-line': 'hsl(215, 32%, 27%)',
          'white': 'hsl(0, 0%, 100%)',
        },
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        body: '18px',
      },
      fontWeight: {
        light: '300',
        normal: '400',
        semiBold: '600',
      },
    },
  },
  plugins: [],
} satisfies Config;
