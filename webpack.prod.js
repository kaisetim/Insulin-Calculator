const merge = require("webpack-merge");
const common = require("./webpack.common.js");

exports = merge(common, {
  mode: "production"
});
