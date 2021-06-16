const appPath = require('./path');

module.exports = (isProd) => {
  const baseConfig = require('../../config/webpack/webpack.base')(isProd);

  return {
    ...baseConfig,
    output: {
      ...baseConfig.output,
      filename: '[name].js',
    },
    entry: {
      serverApp: appPath.serverAppTs,
    },
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
    target: 'node'
  }
};