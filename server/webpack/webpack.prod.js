const baseConfig = require('./webpack.base')(true);
const commonProdConfig = require('../../config/webpack/webpack.prod');

module.exports = {
  ...baseConfig,
  ...commonProdConfig
};
