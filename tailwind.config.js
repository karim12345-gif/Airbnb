module.exports = {
  mode:'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode:false, //or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants:{
    extend:{}
  },
  // this is how we add additional plugins
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
