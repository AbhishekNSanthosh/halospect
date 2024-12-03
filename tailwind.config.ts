/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/common/**/*.{js,ts,jsx,tsx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      slk: {
        regular: "#133c25",
        light: "#239254",
        dark: "#d5e6dc",
        black: {
          100: "#161617",
          200: "#151515",
          300: "#0B0B0C"
        },
      },
      azure: {
        50: '#edf7ff',
        100: '#d8edff',
        200: '#b9dfff',
        300: '#89cdff',
        400: '#51b0ff',
        500: '#298eff',
        600: '#1f75fe',
        700: '#0b55ea',
        800: '#1046bd',
        900: '#143e94',
        950: '#11275a',
    },
      white: "#ffffff",
      black: {
        100: "#111111",
        200: "#222222",
        300: "#333333",
        400: "#444444",
        500: "#555555",
        600: "#666666",
        700: "#777777",
        800: "#888888",
        900: "#999999",
      },
      gray: {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c",
      },
    },
    extend: {},
  },
  plugins: [],
};
