const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const baseConfig = require('./webpack.base')(true);

module.exports = {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    publicPath: "/"
  },
  optimization: {
    ...baseConfig.optimization,
    minimizer: [new CssMinimizerPlugin(), '...']
  }
};
