const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  target: "web",
  entry: path.join(__dirname, "../src/main.js"),
  output: {
    filename: "[name].[chunkhash:8].js",
    path: path.join(__dirname, "../dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/,
        enforce: "pre",
        options: {
          fix: true,
        },
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(jpeg|jpg|png|svg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8 * 1024,
              name: "resources/[path][name].[hash:8].[ext]",
              // outputPath: "images",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public/index.html"),
      minify: true,
    }),
    new MiniCssExtractPlugin({
      filename: "style/[name].[contenthash:8].css",
    }),
    new CssMinimizerWebpackPlugin(),
  ],
  resolve: {
    extensions: [".js", ".css", ".jsx"],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
