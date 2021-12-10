const { override, addPostcssPlugins } = require('customize-cra');

module.exports = override([
  addPostcssPlugins([require('tailwindcss')]),
  function reset(config, env) {
    return config;
  },
]);
