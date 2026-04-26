/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#040816",
          900: "#071022",
          800: "#0b1730",
          700: "#13203d",
        },
        accent: {
          cyan: "#67e3ff",
          blue: "#7da3ff",
          violet: "#9b7dff",
        },
      },
      boxShadow: {
        glow: "0 24px 70px rgba(9, 18, 38, 0.45)",
        card: "0 24px 80px rgba(4, 8, 20, 0.45)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(125,163,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(125,163,255,0.08) 1px, transparent 1px)",
        "accent-radial":
          "radial-gradient(circle at top left, rgba(103,227,255,0.18), transparent 28%), radial-gradient(circle at top right, rgba(155,125,255,0.15), transparent 24%)",
        "button-premium":
          "linear-gradient(135deg, rgba(103,227,255,0.98), rgba(125,163,255,0.96))",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float-slow": {
          "0%": { transform: "scale(1.02) translateY(0)" },
          "100%": { transform: "scale(1.05) translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 700ms ease both",
        "fade-up-delayed": "fade-up 1000ms ease both",
        "float-slow": "float-slow 10s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
