module.exports = {
	entry: {
		// Output multiple files
		main: './app/main.js',	
		Shared: './app/shared/shared.js'
	},
	output: {
		path: __dirname + '/build',
		filename: '[name].js'
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
			},
			{ 
				 // inline base64 URLs for <=8k images, direct URLs for the rest
				test: /\.(png|jpg)$/, 
				loader: 'url-loader?limit=8192' 
			}
		]
	},
	resolve: {
    	// you can now require('file') instead of require('file.js')
    	extensions: ['', '.js', '.json'] 
  	}
}