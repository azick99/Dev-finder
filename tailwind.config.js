/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Codec Pro', 'sans-serif'],
        'mono': ['Anonymous Pro', 'monospace'],
      },
      colors: {
        //for dark
        'pramiry': '#101728',
        'secondary': '#CCD4E0',
        'dark-blue': '#260E69',
        'almost-white': '#F2F2F2',
        'light-blue': '#5CE1E6',
        'light-brawn': '#4A4553',

        /*for white
        primary:'#CCD4E0'
        'secondary': '#260E69',
        */
        'dark-pink': '#B2B5D8',
      },
      boxShadow: {
        cardDark: ' 3px 8px 45px 0px rgba(98,85,75,0.75), 1px 13px 78px 6px rgba(38,14,105,0.75);',
        cardLgiht: ' 3px 8px 45px 0px rgba(178,181,216,0.75), 1px 13px 78px 6px rgba(115,115,115,0.75);',
      },

    },
  },
  plugins: [],
}

//main fonts text-base text-lg text-xl text-5xl text-4xl text-3xl
//rgba(115,115,115,0.75)