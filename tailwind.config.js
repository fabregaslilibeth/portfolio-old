/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '.625rem',
        '3xs': '.5rem',
      },
      colors: {
        button: '#ddd',
        background: '#EBECF0',
        text: '#BABECC',
        gray: {
          darkest: '#61677C',
          darker: '#626f81',
          dark: '#a8bfdb',
          DEFAULT: '#c0ccda',
          light: '#9CA3AF',
          lighter: '#e0e6ed',
          lightest: '#E5E5E5',
        },
        primary: {
          darkest: '#1ab0fc',
          dark: '#38befc',
          DEFAULT: '#51C8FF',
          light: '#6fd0fd',
          lightest: '#79d2fc',
        },
        youtube: '#FF0000',
        linkedin: '#0072b1',
        github: '#171515',
        gitlab: '#fca326'
      },
      fontFamily: {
        'sans': ['Raleway', 'sans-serif'],
        'serif': ['Roboto Slab', 'serif'],
        'cursive': ['Arizonia', 'cursive'],
        'display': ['Frijole', 'cursive'],
      },
      outline: {
        blue: '2px solid #0F7BCC',
      },
      borderRadius: {
        'custom': '0 4px 4px 0',
      },
      cursor: {
        'grab': 'grab',
        'grabbing': 'grabbing',
      },
      boxShadow: {
        'buttonNormal': '-5px -5px 20px #FFF, 5px 5px 20px #BABECC',
        'buttonHover': '-2px -2px 5px #FFF, 2px 2px 5px #BABECC',
        'buttonDark': 'inset -6px -6px 9px 0px rgba(255,255,255,0.4), inset 6px 6px 9px rgba(0, 0, 0, 0.4)',
        'normal': 'inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF',
        'active': 'inset 1px 1px 2px #BABECC, inset -1px -1px 2px #fff',
        'input': '0 3px 5px rgba(8, 129, 163, 0.3)',
        'smallBtn': '0 1px 2px #1d6464',
      },
      spacing: {
        88: '22rem', //standard = 22rem * 4 = 88
        100: '25rem', //standard = 25rem * 4 = 100
        128: '32rem', //standard = 32rem * 4 = 128
        136: '32rem', //standard = 34rem * 4 = 136
        144: '36rem', //standard = 36rem * 4 = 144
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
}
