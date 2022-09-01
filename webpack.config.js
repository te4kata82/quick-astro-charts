const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");
const pkg = require("./package.json");

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
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
      version: pkg.version,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
