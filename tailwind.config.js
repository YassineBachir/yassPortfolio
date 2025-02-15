/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'scroll-text': 'scrollText 4s linear infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'move-right': 'moveRight 10s ease-in-out forwards', // Animation vers la droite
        'move-left': 'moveLeft 2s ease-in-out forwards',   // Animation vers la gauche
      },
      keyframes: {
        // scrollText: {
        //   '0%': { transform: 'translateY(0)' },
        //   '25%': { transform: 'translateY(-100%)' },
        //   '50%': { transform: 'translateY(-200%)' },
        //   '75%': { transform: 'translateY(-300%)' },
        //   '100%': { transform: 'translateY(0)' },
        // },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        moveRight: {
          '0%': { opacity: '0.7', transform: 'translateX(0)' },  // Début immobile
          '100%': { opacity: '1', transform: 'translateX(100px)' }, // Pousse vers la droite
        },
        moveLeft: {
          '0%': { opacity: '0.7', transform: 'translateX(0)' },  // Début immobile
          '100%': { opacity: '1', transform: 'translateX(-100px)' }, // Pousse vers la gauche
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
