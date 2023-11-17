/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#D8E2EF',
          100: '#A3BEDA',
          200: '#6E9AC5',
          300: '#3A76B0',
          400: '#16529B',
          500: '#07294D',
          600: '#061F44',
          700: '#041534',
          800: '#030C23',
          900: '#020714',
          hover: '#16529B',
          active: '#020714'
        },
        secondary: {
          50: '#FFF2CC',
          100: '#FFE5A1',
          200: '#FFD878',
          300: '#FFCB4D',
          400: '#FFBF23',
          500: '#FFCC42',
          600: '#FFC533',
          700: '#FFB61A',
          800: '#FFA600',
          900: '#FF9800',
          hover: '#FFBF23',
          active: '#FF9800'
        },
        tertiary: {
          50: '#C9E8F3',
          100: '#9AD7EB',
          200: '#6AC6E3',
          300: '#3BB5DB',
          400: '#0CA5D3',
          500: '#72C4E6',
          600: '#62B9DF',
          700: '#51AED7',
          800: '#41A3CF',
          900: '#3199C7',
          hover: '#0CA5D3',
          active: '#3199C7'
        },
        default: '#f0f0f0'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        rancho: ['Rancho', 'cursive'],
      },
      fontSize: {
        '2xs': '.625rem',
      },
    },
  },
  plugins: [],
}
