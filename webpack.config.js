const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const compass = require('compass');

const config = {
  mode: 'production',
  entry: './src/js/darts.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'darts.bundle.js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        exclude: /node_modules/
      }),
      new OptimizeCSSAssetsPlugin({
        filename: path.resolve(__dirname, 'public/css/main.css'),
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/main.css'
    }),
    new HtmlWebpackPlugin({
      filename: '../../public/index.html',
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: compass.compile({ cwd: '../public/css' }, function(err, stdout, stderr) {
                console.log('done');
            })
          }
        },
        'css-loader',
        'sass-loader']
      }
    ]
  }
};

module.exports = config;
