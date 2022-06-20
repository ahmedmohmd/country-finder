/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      darkMode: "media",
      colors: {
        "whale-dark": "#10141f",
        "elephant-dark": "#161d2f",
        "whale-light": "#fff",
        "elephant-light": "#f8f6f6",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
