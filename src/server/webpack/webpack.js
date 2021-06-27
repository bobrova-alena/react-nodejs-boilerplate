const appPath = require('./path');
const baseConfig = require('../../../baseConfig/webpack');
const NodemonPlugin = require('nodemon-webpack-plugin');

const isDebugMode = process.env.DEBUG_ENV;

const config = {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    filename: '[name].js',
  },
  entry: {
    serverApp: appPath.serverAppTs,
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: [
          {
            loader: 'ts-loader'
          },
        ],
      }
    ]
  },
  plugins: baseConfig.plugins.concat([
    new NodemonPlugin({
      watch: appPath.dist
    })
  ])
};

if(isDebugMode) {
  console.log(config);
}

module.exports = config;