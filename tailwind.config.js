/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'gold': '#d4af37',
          'dark-wood': '#2b2b2b',
          'nautical-chart': '#f9e8b1',
          'dark-ocean': '#1c2528',
          'brass': '#a67c52',

        },
        fontFamily: {
          'pirata': ['Pirata One', 'serif'],
          'unifraktur': ['UnifrakturCook', 'serif'],
          'cinzel': ['Cinzel', 'serif'],
          'blackletter': ['Blackletter', 'serif'],
        },
      },
    },
    plugins: [],
}