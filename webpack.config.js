module.exports = {
	entry: './main.js',
	output: {
		path: __dirname,
		filename: './bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style!css!'
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader'
			}
		]
	},
	resolve: {
    // you can now require('file') instead of require('file.js')
    	extensions: ['', '.js', '.json'] 
  	}
}