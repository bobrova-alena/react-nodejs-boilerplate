const appPath = require('./path');
const baseConfig = require('../../../baseConfig/webpack')

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
  }
};

if(isDebugMode) {
  console.log(config);
}

module.exports = config;