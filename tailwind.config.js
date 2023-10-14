/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          primary: "#868e96",
          secondary: "#f1f3f5",
          darker: "#343a40",
        },
        red: {
          primary: "#fa5252",
          secondary: "#ffe3e3",
        },
        pink: {
          primary: "#e64980",
          secondary: "#ffdeeb",
        },
        grape: {
          primary: "#be4bdb",
          secondary: "#f3d9fa",
        },
        violet: {
          primary: "#7950f2",
          secondary: "#e5dbff",
        },
        indigo: {
          primary: "#4c6ef5",
          secondary: "#dbe4ff",
        },
        blue: {
          primary: "#228be6",
          secondary: "#d0ebff",
        },
        cyan: {
          primary: "#15aabf",
          secondary: "#c5f6fa",
        },
        teal: {
          primary: "#12b886",
          secondary: "#c3fae8",
        },
        brand: {
          primary: "#208d8e",
          secondary: "#c2f7fa",
        },
        green: {
          primary: "#40c057",
          secondary: "#d3f9d8",
        },
        yellow: {
          primary: "#FAB005",
          secondary: "#FFF3BF",
        },
        lime: {
          primary: "#82c91e",
          secondary: "#e9fac8",
        },
        orange: {
          primary: "#fd7e14",
          secondary: "#ffe8cc",
        },
      },
    },
  },
  plugins: [],
};
