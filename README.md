- Create a new folder.
- run cmd `git init`.
- create `.gitignore` file.
- create `src` & `build` folder.
- run cmd `npm init --y`.
- create `index.html` file.
- run cmd `yarn add react react-dom`.
- run cmd `yarn add -D typescript @types/react @types/react-dom`.
- Configuration for typescript compiler.
- Add tsconfig.json file in root.
- create `App.tsx` & `index.tsx` (entry-point) file in src.
- run cmd `yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript.`
- At root create .babelrc file.
- run cmd `yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin`.
- run cmd `yarn add -D babel-loader`.
- In root folder create webpack folder. Inside webpack folder create webpack.config.ts (can also be js) file.

```
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
```

- In package.json inside scripts write start script. **`"start" : "webpack serve --config webpack/webpack.config.js --open"`**
- create `App.css` file inside src folder
- run cmd `yarn add -D css-loader style-loader`.
- in src folder create declaration.d.ts file.
- add contents `declare module "*.png/jpg/svg`...etc"
- run cmd `yarn add -D file-loader`.
