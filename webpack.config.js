var webpack = require('webpack');

module.exports = {
  entry: "./client.js",

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"] }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],


  output: {
    filename: "build.js",
    path: __dirname + "/public"
  }
}
