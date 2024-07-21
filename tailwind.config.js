/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bigshoulders: ["Big Shoulders Display", "sans-serif"],
        inconsolata: ["Inconsolata", "monospace"],
        ultra: ["Ultra", "serif"],
        slackey: ["Slackey", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
