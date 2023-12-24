// this will merge the commom config file with either DEV or PROD config file

const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = (envMode) => {
	const { env } = envMode;
	const envConfig = require(`./webpack.${env}.js`);
	const config = merge(commonConfig, envConfig);
	return config;
};
