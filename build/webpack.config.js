const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config.base");
const devConfig = require("./webpack.config.dev");
const prodConfig = require("./webpack.config.prod");

const config = process.env.NODE_ENV === "development" ? devConfig : prodConfig;

module.exports = merge(baseConfig, config);
