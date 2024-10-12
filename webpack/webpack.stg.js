// This file contains the configuration specific to the STAGE environment

const webpack = require("webpack");

module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.mode": JSON.stringify("Stage Mode"),
    }),
  ],
  stats: {
    modules: false, // Hide module information
    assets: false, // Hide asset information
  },
};
