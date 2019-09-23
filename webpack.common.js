const path = require("path");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const postcssPresetEnv = require("postcss-preset-env");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  entry: {
    front: "./packages/front/src/index.jsx"
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
              sourceMap: false,
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [
                postcssPresetEnv({ autoprefixer: { grid: true } })
              ]
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()]
};
