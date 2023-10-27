const path = require("path");
const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  entry: {
    frontend: "./frontend/src/index",
  },
  output: {
    path: path.resolve("./frontend/static/frontend/"),
    filename: "[name]-[fullhash].js",
    publicPath: "static/frontend/",
    clean: true
  },
  plugins: [
    new BundleTracker({
      path: __dirname,
      filename: "./webpack-stats.json",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};