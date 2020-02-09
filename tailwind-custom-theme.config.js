const { colors: { teal, orange, pink, ...colors } } = require('tailwindcss/defaultTheme');

module.exports = {
  prefix: '3dmind-',
  theme: {
    colors: {
      ...colors,
      primary: {
        'light': '#a9d3ff',
        'dark': '#6e8eaf',
      },
    },
  },
};
