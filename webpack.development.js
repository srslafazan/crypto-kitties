const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.common')
   

module.exports = {
   ...commonConfig,
   
   entry: [
      'webpack-dev-server/client?http://0.0.0.0:8080/',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, './src/main.js'),
   ],
   
   plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, './src/index.html'), inject: true }),
      new webpack.HotModuleReplacementPlugin(),
   ],

   devServer: {
      contentBase: path.resolve(__dirname, "dist"),
      port: 8080,
   },
   
   devtool: '#eval-source-map',
}
