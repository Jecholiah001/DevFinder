/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode:'class',
  theme: {
    extend: {
      colors: {
        'primaryBlue':'#0079FF',
        'gray-100':'#697C9A',
        'gray-200':'#4B6A9B',
        'gray-light':'#F6F8FF',
        'blueBlack':'#1E2A47',
        'tetiaryBlack': '#141D2F',
        'secondaryBlack':'#222731',
        'primaryBlack': '#2B3442',
        'white': '#ffffff'
      },

      typography:{
        h1: '26px',
        h2: '22px',
        h3: '16px',
        h4: '13px',
      },

      fontFamily:  {
        'spaceMono': ['Space Mono'],
      },
    },
  },
  plugins: [],
}

