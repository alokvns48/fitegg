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
        lora: ["Lora", "serif"],
        acme: ["Acme", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient-1":
          "linear-gradient(180.33deg, #FFFFFF -6.69%, #FBFF28 203.31%)",
        "custom-gradient-2": "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
        "custom-gradient-3":
          "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
        "custom-gradient-4":
          "linear-gradient(-20deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)",
        "custom-gradient-5":
          "linear-gradient(-60deg, #16a085 0%, #f4d03f 100%)",
        "custom-gradient-6":
          "linear-gradient(to bottom, #9be15d 0%, #00e3ae 100%)",
        "custom-gradient-7":
          "linear-gradient(to bottom, #00e3ae 0%, #9be15d 100%)",
      },
    },
  },
  plugins: [],
};
