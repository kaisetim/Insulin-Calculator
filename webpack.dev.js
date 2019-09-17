const merge = require("webpack-merge");
const common = require("./webpack.common.js");

exports = merge(common, {
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
    inline: false,
    watch: true,
    watchOptions: {
      ignored: /node_modules/
    }
  }
});
