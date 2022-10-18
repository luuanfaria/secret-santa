/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('/public/images/logo.png')",
        'logosm': "url('/public/images/logo-pequeno.png')",
      },
      colors: {
        'theme-gray': '#FFF9EB',
        'gray-dark': '#c4c4c4',
        'text-alert': '#842029',
        'pink-light': '#f8d7da',
        'pink': '#f5c2c7',
        'orange': '#FE652B',
        'purple' :'#4B69FD'
      },
      screens: {
        'large': '800px'
      },
      boxShadow: {
        'input': '0px 2px 0px 1px #000000',
        'button': '2px 2px 0px 1px #000000'
      },
      borderRadius: {
        'input': '45px',
        'card': '65px',
      },
      width: {
        '48px': '48px',
        '220': '220px',
        '235': '235px',
        '350': '350px',
        '351': '351px',
        '07': '70%',
      },
      height: {
        '80': '80px',
        '82': '82px',
        '117': '117px',
        '199': '199px',
      },
      padding: {
        '60': '60px',
        '80': '80px',
        '120': '120px',
      },
      margin: {
        'negative': '32px'
      }
    },
  },
  plugins: [],
}
