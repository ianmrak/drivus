const webpack = require('webpack');
const path = require('path');
const hotReload = 'webpack-hot-middleware/client';

module.exports = {
  devtool: "inline-source-map",
  entry: [
    hotReload,
    path.join(__dirname, 'src/js/index.jsx')
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js",
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"],
      include: path.join(__dirname, 'src')
    },
    {
      // Doesn't work :(
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader:'file'
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015', 'react-hmre']
      },
    }]
  },
  externals: {
    "react/lib/ExecutionEnvironment": true,
    "react/lib/ReactContext": "window"
  }
};
