const path = require('path');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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

module.exports = (isProd) => {
  return {
    context: appPath.root,
    entry: {
      mobileApp: appPath.mobileAppTsx,
      webApp: appPath.webAppTsx,
    },
    output: {
      path: appPath.dist,
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].chunk.js',
      clean: true
    },
    resolve: {
      extensions: ['.tsx', '.ts', ".js"],
      alias: {
          '~mobile': appPath.mobile,
          '~web': appPath.web,
          '~components': appPath.components
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
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        async: !isProd,
        formatter: 'basic',
        eslint: {
          files: './src/**/*.{ts,tsx}',
        },
      }),
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
    ],
    devServer: {
      clientLogLevel: 'warn',
      stats: 'errors-only',
      host: '127.0.0.1',
      hot: true,
      port,
      historyApiFallback: {
        index: `/${platform}.html`,
      },
    },
  }
};