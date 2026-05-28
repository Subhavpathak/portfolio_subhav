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
        dark: "#111827",
        cream: "#faf8f4",
        sand: "#f3efe6",
        primary: "#1e293b",
        secondary: "#64748b",
        tertiary: "#94a3b8",
        accent: "#0d9488",
        "accent-hover": "#0f766e",
        highlight: "#f97066",
        warm: "#e5e1d8"
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 6px 16px rgba(0,0,0,0.04)",
        "card-hover": "0 4px 12px rgba(0,0,0,0.08), 0 12px 28px rgba(0,0,0,0.06)"
      }
    }
  },
  plugins: []
};

module.exports = config;
