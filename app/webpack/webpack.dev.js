const baseConfig = require('./webpack.base')(false);
const commonDevConfig = require('../../config/webpack/webpack.dev');

module.exports = {
  ...baseConfig,
  ...commonDevConfig,
  devtool: 'inline-source-map'  
}
