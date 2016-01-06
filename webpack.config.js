module.exports = {
	entry: "./app/main.js",
	output: {
		filename: "public/bundle.js"
	},
	devServer: {
		inline: true,
		port: 4444
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
}