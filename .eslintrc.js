module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
  },
  plugins: ["babel"],
  extends: [
    "airbnb-base",
    "eslint:recommended",
    "plugin:vue/recommended",
    // "plugin:prettier/recommended",
   "@vue/prettier"
  ],
  env: {
    browser: true,
    node: true,
  },
  rules:{
    "no-console":process.env.NODE_ENV='production' ? 'warn' : 'off',
    "no-debugger":process.env.NODE_ENV='production' ? 1 : 0,
  }
};
