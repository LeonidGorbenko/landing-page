import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "640px",
        lg: "1280px",
      },
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "120px",
      },
    },
    extend: {
      colors: {
        green: "#9DFF3A",
        white: "#E5E5E5",
        gray1: "#999999",
        gray2: "#4D4D4D",
        gray3: "#2E2E2E",
        black: "#0F0F0F",
        background: "#000000",
        "gradient-from": "#75A941",
        "gradient-to": "#3A7500",
      },

      fontFamily: {
        base: ["Alexandria", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const typographyClasses = {
        ".font-title-1": {
          fontSize: "40px",
          lineHeight: "1.1",
          letterSpacing: "0",
          fontWeight: "700",
          "@media (min-width: 1024px)": {
            fontSize: "64px",
          },
        },
        ".font-title-2": {
          fontSize: "28px",
          lineHeight: "1",
          letterSpacing: "0",
          fontWeight: "400",
          "@media (min-width: 1024px)": {
            fontSize: "48px",
          },
        },
        ".font-title-3": {
          fontSize: "40px",
          lineHeight: "18px",
          letterSpacing: "1",
          fontWeight: "400",
        },
        ".font-subtitle": {
          fontSize: "20px",
          lineHeight: "1.4",
          letterSpacing: "0",
          fontWeight: "400",
        },
        ".font-button": {
          fontSize: "18px",
          lineHeight: "1",
          letterSpacing: "0",
          fontWeight: "400",
        },
        ".font-text-1": {
          fontSize: "16px",
          lineHeight: "1",
          letterSpacing: "0",
          fontWeight: "400",
        },
        ".font-text-2": {
          fontSize: "14px",
          lineHeight: "1",
          letterSpacing: "0",
          fontWeight: "400",
        },
        ".font-caption": {
          fontSize: "12px",
          lineHeight: "1",
          letterSpacing: "0",
          fontWeight: "400",
        },
      };

      addComponents(typographyClasses, ["responsive"]);
    }),
  ],
};
