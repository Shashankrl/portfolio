/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#ff00ff',
          blue: '#00ffff',
          green: '#00ff00',
          yellow: '#ffff00',
          purple: '#9900ff',
        },
        dark: '#0a0a0a',
      },
      animation: {
        'glitch': 'glitch 1s infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-5px, 5px)' },
          '40%': { transform: 'translate(-5px, -5px)' },
          '60%': { transform: 'translate(5px, 5px)' },
          '80%': { transform: 'translate(5px, -5px)' },
        },
        'neon-pulse': {
          '0%, 100%': { 
            textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #00ffff, 0 0 20px #00ffff, 0 0 25px #00ffff, 0 0 30px #00ffff, 0 0 35px #00ffff'
          },
          '50%': { 
            textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #00ffff, 0 0 40px #00ffff, 0 0 50px #00ffff, 0 0 60px #00ffff, 0 0 70px #00ffff'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
    },
  },
  plugins: [],
} 