/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    screens: {
      'sm': '300px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'dodger-blue': {
          '50': '#edfcff',
          '100': '#d6f7ff',
          '200': '#b5f3ff',
          '300': '#83eeff',
          '400': '#48e1ff',
          '500': '#1ec7ff',
          '600': '#06acff',
          '700': '#0099ff',
          '800': '#0874c5',
          '900': '#0d629b',
          '950': '#0e3b5d',
        },

      }
    },
  },
  plugins: [],
}

