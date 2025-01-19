/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screen: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1240px",
    },
    extend: {
      fontFamily: {
        popin: '"Poppins", serif',
        dm: '"Nunito", serif',
      },
      colors: {
        primary: {
          1: "#2FB574",
          2: "#0d1f11",
        },
        n: {
          1: "#0f3b21",
          2: "#173422",
          3: "#093015",
          4: "#05582e",
        },
      },
    },
  },
  plugins: [
    plugin(({ addBase, addComponents, addUtilities }) => {
      addBase({}),
        addComponents({
          ".container": {
            "@apply max-w-[77.5rem] mx-auto px-3 md:px-5 md:px-10  xl:max-w-[87.5rem]":
              {},
          },
          ".h1": {
            "@apply text-[2.375rem] md:text-[3rem] lg:text-[3.75rem] ": {},
          },
          ".h2": {
            "@apply text-[2rem] md:text-[2.5rem] lg:text-[3rem] ": {},
          },
          ".h3": {
            "@apply text-[1.75rem] md:text-[2.25rem] lg:text-[2.625rem]": {},
          },
          ".h4": {
            "@apply text-[1.625rem] md:text-[1.875rem] lg:text-[2.1875rem]": {},
          },
          ".h5": {
            "@apply text-[1.5rem] md:text-[1.75rem] lg:text-[2rem]": {},
          },
          ".body1": {
            "@apply text-[1.125rem] md:text-[1.3125rem] lg:text-[1.5rem]": {},
          },
          ".body2": {
            "@apply text-[1rem] md:text-[1.0625rem] lg:text-[1.125rem]": {},
          },
          ".body3": {
            "@apply text-[0.875rem] md:text-[0.9375rem] lg:text-[1rem]": {},
          },
        });
    }),
  ],
};
