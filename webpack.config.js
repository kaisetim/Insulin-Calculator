const path = require("path");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const outDirectory = ".dist";

module.exports = {
  entry: { app: "./packages/front/src/index.js" },
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, outDirectory)
  },
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  mode: "development",
  devtool: "inline-cheap-source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, outDirectory),
    compress: true,
    host: "0.0.0.0",
    port: 8080,
    proxy: {
      context: () => true,
      target: "http://0.0.0.0:3000"
    },
    disableHostCheck: true,
    writeToDisk: true,
    hot: false,
    inline: false
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  }
};
