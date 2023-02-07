/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "top-other": "0 0 3px 0 rgb(0,0,0,0.3)",
        "top-week": "0 0 10px 0 rgb(0,0,0,0.3)",
        "top-week-user": "0 0 5px 0 rgb(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
