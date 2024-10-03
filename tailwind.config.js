/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        agnos_theme: {
          "primary": "#0586de",
          "secondary": "#338b85",
          "accent": "#5dc1d9",
          "neutral": "#9ce0db",
          "base-100": "#ffffff",
          "base-200": "#d5ffff",
        }
      }
    ],
  },
}

