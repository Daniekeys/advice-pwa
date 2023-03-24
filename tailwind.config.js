/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        blackText: "#0E0F0F",
        blackA: "#737A8E",
        blackB: "#464A4D",
        blackC: "#393939",
        blackD: "#151515",
        blackE: " #2E2D2E",
        blue: "#2F80EC",
        lightGrey: "#EAF2FD",
        borderGrey: "#E3E5E5",
        placeholderLight: " #8D9091",
        lightPurple: "#F4F1FD",
      },
    },
  },
  plugins: [],
};
