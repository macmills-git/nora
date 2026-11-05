/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nora: {
          burgundy: '#781430',
          pink: '#FFD3EE',
          wine: '#6E081E',
          dusty: '#9E4052',
          blush: '#FCEAF3',
          cream: '#FFF8FA',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'serif'],
        display: ['"Italiana"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(120, 20, 48, 0.07)',
        'luxury-hover': '0 30px 60px -12px rgba(120, 20, 48, 0.14)',
        'glow-pink': '0 0 35px rgba(255, 211, 238, 0.5)',
      }
    },
  },
  plugins: [],
}

