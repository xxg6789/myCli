const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

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
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(js|jsx)$/,
        loader: "eslint-loader",
        exclude: /node_modules/,
        enforce: "pre",
        options: {
          fix: true,
        },
      },
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.styl(us)?$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "stylus-loader",
        ],
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
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
    new VueLoaderPlugin(),
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
    alias: {
      "@": path.join(__dirname, "../src"),
    },
    extensions: [".js", ".css", ".jsx"],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
