const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {},
    container: {
      screens: {
        md: "768px",
        lg: "992px",
        xl: "1200px",
      }
    },
  },
  plugins: [
    plugin(function({ addBase }) {
      addBase({
        'html': { fontSize: "14px" },
      })
    }),
    require('preline/plugin')
  ],
  "css.validate": false,
  "tailwindCSS.includeLanguages": {
    "vue": "html",
    "vue-html": "html"
  },
  "editor.quickSuggestions": {
    "strings": true
  }
}