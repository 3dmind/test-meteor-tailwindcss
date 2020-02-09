const customTheme = require('./tailwind-custom-theme.config');

const { prefix, theme } = customTheme;
module.exports = {
  prefix,
  theme: {
    ...theme,
    extend: {},
  },
  variants: {},
  plugins: [],
};
