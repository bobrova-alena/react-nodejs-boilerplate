const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const baseConfig = require('./webpack.base')(true);

module.exports = {
  ...baseConfig,
  optimization: {
    ...baseConfig.optimization,
    minimizer: [new CssMinimizerPlugin(), '...']
  }
};
