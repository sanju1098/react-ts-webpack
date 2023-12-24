// This file contain the configuration specific to the PROD environment

const webpack = require("webpack");

module.exports = {
	mode: "production",

	devtool: "source-map", // this is value create-react-app recommends for PROD env.
	// 👆🏻 this property is opt for PROD mode.

	//Optional
	plugins: [
		new webpack.DefinePlugin({
			"process.env.mode": JSON.stringify("Production"),
		}),
	],
};
