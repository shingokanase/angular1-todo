'use strict'

const webpack = require("webpack");

let config = {
  entry: {
    app:'./src/entry.ts',
    library:'./src/library.ts',
  },
  output: {
    filename: '[name].js',
    publicPath: '/js'
  },

  devtool: '#source-map',

  resolve: {
    extensions: ['', '.ts', '.webpack.js', '.web.js', '.js', '.html']
  },

  module: {
    loaders: [
      { test: /\.ts$/,
        exclude:/node_modules/,
        loader: 'awesome-typescript-loader'
      }
      ,
      { test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ],

  // Configuration for dev server
  // TODO not working HMR
  devServer: {
    contentBase: 'assets',
    port: 8080
  }

}

module.exports = config;