/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "inset-light": "inset 0 0 10px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
