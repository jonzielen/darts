const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = [{
  entry: {
    main: './src/sass/main.scss'
  },
  output: {
    path: path.resolve(__dirname, 'public/css')
  },
  devtool: "source-map",
  module: {
    rules: [{
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              minimize: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ],
      }, {
      test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
      use: [{
        loader: "file-loader"
      }]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],
  mode: 'production'
}, {
    entry: './src/js/index.js',
    output: {
      filename: 'darts.js',
      path: path.resolve(__dirname, 'public/js')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [/(node_modules)/, /(sass)/],
          use: "babel-loader"
        }
      ]
    },
    mode: 'production'
  }, {
    entry: {
      index: [
        './src/html/index.html'
      ]
    },
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: '[name].html'
    },
    module: {
      rules: [{
        test: /\.html$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'html-loader',
            options: {
              minimize: true,
              removeComments: true,
              collapseWhitespace: true
            }
          }]
        })
      }]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: "[name].html"
      })
    ]
  }
];

module.exports = config;
