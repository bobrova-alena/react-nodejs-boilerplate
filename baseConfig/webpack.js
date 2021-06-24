const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const resolveRelativeAppRoot = require('./utils/resolvePath').resolveRelativeAppRoot;
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const appPath = require('./utils/path');
const devMode = process.env.MODE_ENV == 'development';

module.exports = {
  context: appPath.root,
  output: {
    path: appPath.dist,
    clean: true,
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.ts', '.tsx', '.js'],
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
      async: devMode,
      formatter: 'basic',
      eslint: {
        files: resolveRelativeAppRoot('src/**/*.{ts,tsx}'),
      },
    }),
    devMode && new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: true,
    })
  ].filter(Boolean)
};