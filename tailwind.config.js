/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: "#141018",
        cream: "#fbf7ef",
        sand: "#eee5d7",
        primary: "#211a18",
        secondary: "#65584f",
        tertiary: "#958579",
        accent: "#b5642f",
        "accent-hover": "#8f4322",
        highlight: "#df5b48",
        warm: "#d9cfc0",
        ember: "#b45309",
        porcelain: "#fffdf8"
      },
      boxShadow: {
        card: "0 1px 1px rgba(24,34,53,0.04), 0 14px 36px rgba(24,34,53,0.08)",
        "card-hover": "0 10px 22px rgba(24,34,53,0.10), 0 24px 54px rgba(24,34,53,0.12)",
        glow: "0 18px 50px rgba(181,100,47,0.24)"
      }
    }
  },
  plugins: []
};

module.exports = config;
