const { Container } = require('postcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      'tanni': ['Georgia']
    },
    CSSContainerRule:{
      'container':['80%']
    },
    extend: {},
  },
  plugins: [],
}

