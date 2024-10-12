// This file contain the configuration specific to the DEV environment

const webpack = require("webpack");

module.exports = {
  mode: "development",

  devtool: "cheap-module-source-map", // this is value create-react-app recommends for DEV env.
  // 👆🏻 this property basically controls generation of sorce maps for our code.

  //Optional
  plugins: [
    new webpack.DefinePlugin({
      "process.env.mode": JSON.stringify("Development Mode"),
    }),
  ],
  stats: {
    modules: false, // Hide module information
    assets: false, // Hide asset information
  },
};
