// This file contains the configuration specific to the QA environment

const webpack = require("webpack");

module.exports = {
	mode: "development",
	devtool: "cheap-module-source-map",
	plugins: [
		new webpack.DefinePlugin({
			"process.env.mode": JSON.stringify("QA Mode"),
		}),
	],
};
