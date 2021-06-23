const path = require('path');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const baseConfig = require('../../../baseConfig/webpack');
const appPath = require('./path');

function getName(filename)  {
  const { name, ext } = path.parse(filename);
  return !ext ? name : getName(name);
};
  
const styledComponentsTransformer = createStyledComponentsTransformer({
  getDisplayName: (filename, bindingName) => getName(filename) + '-' + bindingName,
});

const port = process.env.PORT_ENV || 8080;
const platform = process.env.PLATFORM_ENV;
const devMode = process.env.MODE_ENV == 'development';

module.exports = {
  ...baseConfig,
  entry: {
    mobileApp: appPath.mobileAppTsx,
    webApp: appPath.webAppTsx,
  },
  output: {
    ...baseConfig.output,
    publicPath: "/",
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js'
  },
  devServer: {
    clientLogLevel: 'warn',
    stats: 'errors-only',
    host: '127.0.0.1',
    hot: true,
    port,
    historyApiFallback: {
      index: `/${platform}.html`,
    },
    proxy: { 
      "/api/**": { 
        target: 'http://localhost:3080', 
        secure: false
      }
    }
  },
  optimization: {
    ...baseConfig.optimization,
    minimizer: [!devMode && new CssMinimizerPlugin(), !devMode && '...'].filter(Boolean)
  },
  devtool: devMode ? 'inline-source-map' : 'source-map',
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              getCustomTransformers: () => ({
                before: [styledComponentsTransformer],
              }),
            },
          },
          'stylelint-custom-processor-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|svg|ttf)$/i,
        loader: 'file-loader',
      },
    ]
  },
  plugins: baseConfig.plugins.concat([
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: appPath.htmlTemplate,
      chunks: ['vendor', 'mobileApp'],
      filename: 'mobile.html',
    }),
    new HtmlWebpackPlugin({
      template: appPath.htmlTemplate,
      chunks: ['vendor', 'webApp'],
      filename: 'web.html',
    }),
  ])
};