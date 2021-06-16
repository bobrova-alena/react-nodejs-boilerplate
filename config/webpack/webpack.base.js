const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const resolveApp = require('../utils').resolveApp;

const appPath = require('./path');

module.exports = (isProd) => {
  return {
    context: appPath.root,
    output: {
      path: appPath.dist,
      clean: true
    },
    resolve: {
      extensions: ['.ts','.tsx', '.js'],
      alias: {
        'src': appPath.src
      }
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
          },
        },
      },
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        async: !isProd,
        formatter: 'basic',
        eslint: {
          files: resolveApp('src/**/*.{ts,tsx}'),
        }
      })      
    ]
  }
};