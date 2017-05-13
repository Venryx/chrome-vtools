var webpack = require("webpack");

module.exports = {
	entry: ["./Source/Main.ts"],
	output: {
		path: __dirname + "/dist",
		publicPath: "http://localhost:8080/",
		filename: "Main.js",
		libraryTarget: "umd",
	},
	resolve: {
		root: "Source",
		extensions: ["", ".js", ".jsx", ".ts", ".tsx"],
	},
	module: {
		loaders: [
			{
				test: /\.(jsx?|tsx?)$/,
				loader: "babel",
				exclude: /node_modules/,
				query: {
					presets: ["es2015", "react"]
				}
			},
			{test: /\.tsx?$/, loader: "ts-loader"}
		]
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
	]
};