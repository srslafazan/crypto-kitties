const path = require('path')

const config = {
   mode: process.env.NODE_ENV || 'development',
   output: {
      path: path.join(__dirname, 'dist'),
      filename: 'build.js',
   },

   module: {
      rules: [{
         test: /\.(css|scss|sass|less)$/,
         loader: 'style-loader!css-loader',
      }, {
         test: /\.(js|jsx)?$/,
         loader: 'babel-loader',
         exclude: /node_modules/,
         query: {
            presets: ['es2015', 'react', 'stage-2']
         }
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      }, {
        test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader',
      }]
   },

   resolve: {
      extensions: ['.js', '.jsx', '.css', '.scss', '.sass', '.less'],
      alias: {
        	'@': path.resolve('src'),
      },
   },
}

module.exports = config
