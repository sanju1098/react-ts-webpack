const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: path.resolve(__dirname, "..", "./src/index.tsx"),
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
					},
				],
			},

			//Webpack to support CSS files.
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},

			//Webpack to support Images/SVG/GIF.
			//STEP A:
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				use: "file-loader",
			},
			//STEP B: for Image & Icons
			// {
			// 	test: /\.(?:ico|png|jpg|jpeg|gif)$/i,
			// 	type: "asset/resource",
			// },
			// {
			// 	test: /\.(woff(2)?|eot|ttf|otf|svg)$/i,
			// 	type: "asset/inline",
			// },
		],
	},
	output: {
		path: path.resolve(__dirname, "..", "./build"),
		filename: "bundle.js",
	},
	mode: "development",
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "..", "./public/index.html"),
		}),
	],
};
