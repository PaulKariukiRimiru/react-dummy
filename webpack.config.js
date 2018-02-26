var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['react-html-attrs', 
          "transform-decorators-legacy",
          "transform-class-properties",
          "transform-decorators",
          "transform-es2015-destructuring", 
          "transform-object-rest-spread"]
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: /flexboxgrid/
      }
    ]
  },
};