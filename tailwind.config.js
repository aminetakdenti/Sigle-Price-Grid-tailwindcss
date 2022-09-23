/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        Cyan: "hsl(179, 62%, 43%)",
        LightCyan: "hsl(179, 62%, 53%)",
        BrightYellow: "hsl(71, 73%, 54%)",
        LightGray: "hsl(204, 43%, 93%)",
        Gray: "hsl(204, 43%, 90%)",
        GrayishBlue: "hsl(218, 22%, 67%)",
      },
    },
  },
  plugins: [],
};
