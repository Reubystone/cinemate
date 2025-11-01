const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{js,jsx,ts,tsx}", ".flowbite-react/class-list.json"],
  theme: {
    extend: {
      screens: {
        others: { min: " 340px", max: "1200px" },
      },
      colors: {
        darkbg: "#1E293B",
      },
    },
  },
  plugins: [flowbiteReact],
};