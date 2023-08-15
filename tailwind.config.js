/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens:{
      xs:"600px",
      md:"768px",
      lg:"1024px",
      xl:"1280px"
    },
    extend: {
      colors:{
          primary:"#CF4830",
          transparent:"#ffffff33"
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(100%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform:"translateX(0%)",
          },
        },
        "bounce": {
          "100%": {
              transform: "translateY(-25%)",
              animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
          },
          "50% ":{
              transform: "none",
              animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
          }
        }
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-in-out",
        "bounce":"bounce 0.5s ease-in-out"
      },
    },
  },
  plugins: [],
};
