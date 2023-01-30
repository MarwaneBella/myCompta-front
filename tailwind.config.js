/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'white':{
        1:"#ffffff",
        2: '#f4f4f4',
      },
      'black':{
        1: '#222223',
        2: '#3a3a3a'
      },
      'gray' :{
        1: '#f6f6f6',
        2: '#636363',
        3: '#dbdbdb',
      },
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      popping: ['Poppins'],
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    screens: {
      'sm': ' 660px',
      // 'tablet': '660px',
      'md': '1024px',
      'lg': '1280px',
    }
  },
  plugins: [],
}
