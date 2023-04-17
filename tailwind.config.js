/** @type {import('tailwindcss').Config} */
export default {
  purge: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors : {
      "blue" : {
        100 : "hsl(236, 100%, 87%)",
        200 : "hsl(195, 74%, 62%)",
        300 : "hsl(235, 45%, 61%)",
        400 : "hsl(246, 80%, 60%)",
        500 : "hsl(235, 46%, 20%)",
        600 : "hsl(226, 43%, 10%)"
      },
      "red" : {
        "work" : "hsl(15, 100%, 70%)",
        "study" : "hsl(348, 100%, 68%)"
      },
      "violet" : "hsl(264, 64%, 52%)",
      "orange" : "hsl(43, 84%, 65%)",
      "green" : "hsl(145, 58%, 55%)"
    },
    extend: {},
  },
  plugins: [],
}
