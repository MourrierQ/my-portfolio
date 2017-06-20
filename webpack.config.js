var webpack = require('webpack');
var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");




module.exports = {
  entry: {
    bundle: './src/assets/scripts/index.js'

  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module : {
    rules : [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,

      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
             fallback : 'style-loader',
             use :['css-loader', 'sass-loader']

           })
      }
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new ExtractTextPlugin("styles.css"),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist']}
    })
  ]
};
