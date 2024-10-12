const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    historyApiFallback: true, // This ensures all routes are served by index.html
    compress: true, // delivery of your static files by reducing their size
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

      // Webpack to support CSS files.
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      // Webpack to support Images/SVG/GIF.
      // STEP A:
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: "file-loader",
      },
      // STEP B.1: for Image & Icons
      // {
      // 	test: /\.(?:ico|png|jpg|jpeg|gif)$/i,
      // 	type: "asset/resource",
      // },

      // STEP B.2: for SVG
      // {
      // 	test: /\.(woff(2)?|eot|ttf|otf|svg)$/i,
      // 	type: "asset/inline",
      // },

      // Webpack to support SASS/SCSS.
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      // Webpack to support LESS.
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "..", `./dist_${process.env.NODE_ENV}`),
    filename: "bundle.js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./public/index.html"),
    }),
    new Dotenv({
      path: `.env.${process.env.NODE_ENV}`, // Load the appropriate .env file
    }),
  ],
};
