/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}","./build/main.js", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      animation: {
        slide: "slide 15.8s linear infinite",
        text: 'text 5s ease infinite',
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateY(100%)", opacity: 0.1 },
          "15%": { transform: "translateY(0)", opacity: 1 },
          "30%": { transform: "translateY(0)", opacity: 1 },
          "45%": { transform: "translateY(-100%)", opacity: 1 },
          "100%": { transform: "translateY(-100%)", opacity: 0.1 },
        },
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  variants:{
    backgroundColor:['responsive', 'hover','focus','active'],
    width: ["responsive", "hover", "focus"],
    height: ["responsive", "hover", "focus"] 
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

