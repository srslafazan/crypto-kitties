const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.common')
   

module.exports = {
   ...commonConfig,
   	
   	entry: path.resolve(__dirname, './src/main.js'),
    
    optimization : {
    	minimize: true,
    },
    
    plugins: [
    	new HtmlWebpackPlugin({ template: path.resolve(__dirname, './src/index.html'), inject: true }),
  	],

}
