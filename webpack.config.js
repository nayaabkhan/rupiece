module.exports = {
  entry: "./client.js",

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"] }
    ]
  },

  output: {
    filename: "build.js",
    path: __dirname + "/public"
  }
}
