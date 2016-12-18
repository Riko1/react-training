let webpack = require('webpack');
let browserSync = require('browser-sync');

let config = {
	server: {
		baseDir: "./",
		index: 'index.html'
	},
	files: ['./**/*.js', './**/*.css', './**/*.jsx'],
	host: 'localhost',
	port: 8888
}

module.exports = {
	/* "Entry point" - точка входа для webpack */
	entry: './src/js/app.js',
	/* Вывод */
	output: {
		path: './bin',
		filename: 'app.bundle.js'
	},
	resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },
	module: {
		loaders: [
			{
				/* Файлы - источники. */
				test: /\.jsx?$/,
				/* Исключение из поиска. (Необязательный параметр) */
				exclude: /node_modules/,
				/* Имя лоадера. */
				loader: 'babel-loader',
				/* ??? */
				query: {
					presets: ['es2015', 'react', 'stage-0']
				}
			}, {
				test: /\.css$/,
				loader: 'style!css'
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			React: 'react',
			ReactDOM: 'react-dom'
		}),
		() => browserSync(config)
	]
}