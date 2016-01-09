module.exports = {
  entry: "./app/app.js",

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"] }
    ]
  },

  output: {
    filename: "app.js",
    path: __dirname + "/public"
  }
}
