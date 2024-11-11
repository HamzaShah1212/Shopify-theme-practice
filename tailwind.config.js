/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/**/*.liquid',  // All .liquid files in the layout folder
    './src/**/*.html',       // All HTML files in src folder
    './src/**/*.liquid',     // All Liquid files in src folder
    './assets/**/*.js',      // All JS files in assets folder
    './components/**/*.liquid',  // Additional folders if you have other Liquid files
    './**/*.liquid',  
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

