/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        light: "var(--light-color)",
        dark: "var(--dark-color)",
        small_bg: "var(--small-bg-color)",
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class",
};
