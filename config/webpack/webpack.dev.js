const CircularDependencyPlugin = require('circular-dependency-plugin');
const baseConfig = require('./webpack.base')(false);

module.exports = {
  ...baseConfig,
  devtool: 'inline-source-map',
  plugins: baseConfig.plugins.concat( [
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: true,
    })
  ]),
}
