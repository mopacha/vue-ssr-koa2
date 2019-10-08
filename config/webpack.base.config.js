const path = require('path')
const webpack = require('webpack')
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'
const appVersion = new Date().getTime()
const favicon = path.join(process.cwd(), 'favicon.ico')

function resolve(dir) {
  return path.resolve(process.cwd(), dir)
}

let plugins = [
	new CaseSensitivePathsPlugin(),
	new HtmlWebpackPlugin({
		appVersion,
		favicon,
		filename: 'index.html',
		template: path.join(process.cwd(), 'src/index.template.ejs'),
		inject: !isProd,
	}),
	new VueLoaderPlugin(),
	new webpack.optimize.LimitChunkCountPlugin({
		maxChunks: 1
	})
]

if(isProd) {
	plugins = plugins.concat([
		 // 分离css文件
		new ExtractCssChunks({
			filename: '[name].[chunkhash:8].css',
			chunkFilename: '[id].[chunkhash:8].css',
		}),
		 // 限制文件最小KB
		new webpack.optimize.MinChunkSizePlugin({
			minChunkSize: 20000
		}),
		
		new webpack.optimize.ModuleConcatenationPlugin(),
		new OptimizeCssAssetsPlugin(
			{
				cssProcessor: require('cssnano'),
				cssProcessorOptions: {
					// postcss那边已经处理过autoprefixer了，这里把它关掉，否则会导致浏览器前缀兼容范围问题
					autoprefixer: false,
					discardComments: { removeAll: true }
				},
			}
		)
	])
} else {
	plugins = plugins.concat([
		new FriendlyErrorsPlugin(),
	])
}

module.exports = {
	mode: process.env.NODE_ENV,
  devtool: isProd
    ? false
		: '#cheap-module-source-map',
		  // 输出模块配置
  output: {
		// 输出到这个目录下
		path: resolve('dist'),
    // 生成的文件名, [name] 即为entry配置中的key
		filename: '[name].[chunkhash:8].js',
		// 异步模块文件名
    chunkFilename: '[id].js',
		publicPath: '/dist/'
	},
  // 寻找模块时的一些缺省设置
  resolve: {
		// 补充扩展名
    extensions: ['.js', '.vue', '.json'],
    alias: {
			'vue': 'vue/dist/vue.esm.js',
			'public':resolve('public'),
			'@': resolve('src'),
    }
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
       // js,jsx 转译
			{
				test: /\.(js|jsx)$/,
				use: ['babel-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [isProd ? ExtractCssChunks.loader : 'vue-style-loader', 'css-loader', 'postcss-loader']
			},
			{
				test: /\.(styl|stylus)$/,
				use: [isProd ? ExtractCssChunks.loader : 'vue-style-loader', 'css-loader', 'postcss-loader',
					{
						loader: 'stylus-loader',
						options: isProd ? {} : { sourceMap: 'inline' }
					}
				]
			},
			{
				test: /\.scss$/,
				use: [isProd ? ExtractCssChunks.loader : 'vue-style-loader', 'css-loader', 'postcss-loader',
					{
						loader: 'sass-loader',
						options: isProd ? {} : { sourceMap: 'inline' }
					}
				]
			},
			{
				test: /\.json$/,
				use: 'json-loader',
			},
      {
        test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[hash:8].[ext]'
        }
      },

		  {
				test: /\.(woff|woff2|eot|ttf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
						limit: 10000,
						name: 'fonts/[name].[hash:8].[ext]'
				}
		  }
    ]
  },
  performance: {
		maxEntrypointSize: 300000,
		hints: false
  },
  plugins
}
