var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname);

var config = {
  entry: APP_DIR + '/index.jsx',

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.svelte']
  },

  module : {
    loaders : [
      {
        test : /\.(svelte|jsx?)/,
        include : APP_DIR,
        exclude: /node_modules/,
        loader : 'babel'
      },
      {
        test: /\.html$/,
        loader: "html"
      },
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        loader: 'svelte-loader'
      }
    ],

    noParse: /\.svelte$/
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;
