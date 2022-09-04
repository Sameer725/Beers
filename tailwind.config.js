/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      md: "640px",
      lg: "1024px",
      xl: "1500px",
    },
    colors: {
      // color scheme is defined in src/styles/app.css
      transparent: "transparent",
      current: "currentColor",
      white: "var(--color-white)",
      black: "var(--color-black)",
      yellow: "var(--color-yellow)",
      blue: "var(--color-blue)",
      gray: {
        primary: "var(--color-gray-primary)",
        secondary: "var(--color-gray-secondary)",
      },
    },

    extend: {
      fontFamily: { buzz: ["Buzz"], drunk: ["Drunk"], sober: ["Sober"] },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
