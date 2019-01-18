const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  mode: 'production',
  entry: './src/js/darts.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'darts.bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../../public/css/main.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../public/css'
          }
        },
        'css-loader',
        'sass-loader']
      }
    ]
  }
};

module.exports = config;
