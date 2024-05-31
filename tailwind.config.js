/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        xx :"background: radial-gradient(64.18% 64.18% at 71.16% 35.69%, #dbeafe 0.89%, #60a5fa 17.23%,#2563eb 42.04%,#9333ea 55.12%,#7e22ce 71.54%,#581c87 100%)"
      },
      dropShadow :{
        'droptx':'7px 5px 77px #6b21a8'
      }
    },
  },
  plugins: [],
}

