const path = require("path");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  entry: {
    front: "sindex.jsx"
  },
  mode: isProduction ? "production" : "development",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, ".dist")
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()],
  mode: "development",
  devtool: "inline-cheap-source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, ".dist"),
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
