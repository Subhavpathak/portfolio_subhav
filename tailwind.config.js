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
        ink: "#141414",
        graphite: "#202421",
        mint: "#28d7a2",
        aqua: "#3cc7c8",
        coral: "#ff6f61",
        amber: "#f2b84b",
        paper: "#f7f4ec"
      },
      boxShadow: {
        glow: "0 24px 80px rgba(40, 215, 162, 0.18)",
        line: "inset 0 0 0 1px rgba(255,255,255,0.09)"
      },
      backgroundImage: {
        "lab-grid":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

module.exports = config;
