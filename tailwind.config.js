/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#19202A',
        box: '#494150',
        brownBtn: '#865642',
        mainPink: '#A97A82',
        offWhite: '#E6DCDD',
        darkPink: '#453D4C',
        darkyellowBrown: '#CF7A37',
      },
      borderColor: {
        'borderGradient': 'linear-gradient(90deg, #6B3D2D 0%, #996043 17%, #D8803D 36%, #AD7D7D 53%, #7E5F6E 69%, #594B58 84%, #373542 100%)',
      },
      fontFamily: {
        judson: ['"Judson"', 'serif'],
        arima: ['"Arima"', 'system-ui'],
      },
      fontWeight: {
        regular: 400,
        bold: 700,
      },
      fontStyle: {
        italic: 'italic',
      },
      backgroundImage: {
        // 'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/src/assets/footer.svg')",
      }
    },
  },
  plugins: [],
}

