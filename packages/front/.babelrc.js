const rootBabelrc = require('../../.babelrc.js');

module.exports = {
  ...rootBabelrc,
  presets: [...rootBabelrc.presets],
  sourceMaps: true,
  ignore: [/node_modules/]
};