var HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    library: "[name].js",
    libraryTarget: "umd",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
    }),
  ],
};
