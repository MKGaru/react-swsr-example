const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
	context: path.resolve(__dirname, './src'),
	entry: {
		'service.body': './service/index.ts',
		client: './client/index.ts',
		pages: glob.sync('./src/service/**/*.tsx').map(file=>'./'+file.substr('./src'.length)),
		vendor: ['tslib','sugar','sugar/locales/ja','react','react-dom','react-dom/server','react-router','semantic-ui-react']
	},
	output: {
		jsonpFunction:'_w_e_b_p_a_c_k_',
		libraryTarget: "umd",
		library:'$$[name]',
		umdNamedDefine: true,
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.html']
	},
	module: {
		exprContextCritical:false,
		rules: [
			{	test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: [
					'ts-loader',
				]
			},
			{
				test: /\.css$/,
				use: [ {loader:'style-loader',options:{useable:true,insertAt:'top'}}, 'css-loader' ]
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader'
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin(['pages','vendor']),
		new CleanWebpackPlugin(['dist']),
		new CopyWebpackPlugin([
			{ from: 'client/index.html' },
			{ from: 'client/setup.js' }
		],{
			copyUnmodified: false
		}),
		new webpack.ProvidePlugin({
			'self.window': 'self.window || self',
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		}),
		function(){
			this.plugin("done", function(stats) {
				const compilation = stats.compilation;
				const fs = compilation.compiler.outputFileSystem;
				const filepath = path.join(compilation.options.output.path,'./service.js');
				fs.writeFile(filepath,[
					`self.window = self;`,
					`importScripts('vendor.js');`,
					`importScripts('pages.js');`,
					`importScripts('service.body.js');`,
					`/* ${stats.hash} */`
				].join('\n'),{flag:'w'},()=>{});
			})
		}
	],
	devServer: {
		contentBase: 'dist',
		port: 4153
	},
	performance: {
		maxAssetSize: 5242880
	}
};
