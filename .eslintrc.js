module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
  },
  plugins: ["babel"],
  extends: ["airbnb-base"],
  env: {
    browser: true,
    node: true,
  },
};
