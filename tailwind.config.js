/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        playFairDisplay: ["Playfair Display", "serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        primary_color: "#E9B903",
        primary_color_white: "#fff",
        secondary_color: "#031023",
        text_color: "#1E2E45",
        text_color_black: "#1E1E1E",
        text_color_blackII: "#3A3A38",
        text_color_white: "#FFFFFF",
      },
      backgroundImage: (theme) => ({
        "gradient-skyDark": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "hero-lg": "url('./assets/img/hero.png')",
      }),
    },
  },
  plugins: [],
};
