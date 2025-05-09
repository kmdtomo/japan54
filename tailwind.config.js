/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'adobe': ['"futura-pt"', '"futura-pt-bold"', 'sans-serif'],
        'adobe-heavy': ['"futura-pt"', 'sans-serif'],
        'adobe-bold': ['"futura-pt-bold"', 'sans-serif'],
      },
      animation: {
        "slide-right": "slide-right 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "fade-in-left": "fade-in-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "fade-in-right": "fade-in-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
      },
      keyframes: {
        "slide-right": {
          "0%": {
            transform: "translateX(-100px)",
            opacity: "0"
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1"
          }
        },
        "fade-in-up": {
          "0%": {
            transform: "translateY(30px)",
            opacity: "0"
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1"
          }
        },
        "fade-in-left": {
          "0%": {
            transform: "translateX(-50px)",
            opacity: "0"
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1"
          }
        },
        "fade-in-right": {
          "0%": {
            transform: "translateX(50px)",
            opacity: "0"
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1"
          }
        }
      }
    }
  },
  plugins: [],
  safelist: [
    'font-adobe',
    'font-adobe-heavy',
    'font-adobe-bold',
    'animate-slide-right',
    'animate-fade-in-up',
    'animate-fade-in-left',
    'animate-fade-in-right',
  ],
}