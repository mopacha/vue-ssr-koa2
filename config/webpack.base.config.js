const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const appConfig = require('./../app.config')
const isProd = process.env.NODE_ENV === 'production'
// 版本号
const appVersion = new Date().getTime()
const favicon = path.join(process.cwd(), 'favicon.ico')

function resolve(dir) {
  return path.resolve(process.cwd(), dir)
}


module.exports = function() {
	const config = {
		devtool: isProd ? false : '#cheap-module-source-map',
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
			// 别名，可以直接使用别名来代表设定的路径以及其他
			alias: Object.assign({}, appConfig.webpack.resolveAlias, {
				'vue': 'vue/dist/vue.esm.js',
				'@': resolve('src'),
			})
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
						},
						loaders: {
							css: [isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader', 'css-loader', 'postcss-loader'],
							stylus: [isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader', 'css-loader', 'postcss-loader',
								{ loader: 'stylus-loader', options: isProd ? {} : { sourceMap: 'inline' } },
							],
						}
					}
				},
				 // js,jsx 转译
				{
					test: /\.(js|jsx)$/,
					use:{
						loader: 'babel-loader'
					},
					exclude: /node_modules/,
				},
				{
					test: /\.css$/,
					use: [isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader', 'css-loader', 'postcss-loader']
				},
				{
					test: /\.(styl|stylus)$/,
					use: [isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader', 'css-loader', 'postcss-loader',
						{
							loader: 'stylus-loader',
							options: isProd ? {} : { sourceMap: 'inline' }
						}
					]
				},
				{
					test: /\.scss$/,
					use: [isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader', 'css-loader', 'postcss-loader',
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
						name: 'images/[name].[hash:8].[ext]'
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

		plugins: [
      // 由于mac不区分大小写，linux区分大小写，可能导致mac上正常，在部署时出错，所以强制区分大小写
      new CaseSensitivePathsPlugin(),
      // 读取HTML模板文件，并输出HTML文件，开发环境实际输出到内存中
      new HtmlWebpackPlugin({
        appVersion,
        favicon,
        filename: 'index.html',
				template: path.join(process.cwd(), 'src/index.template.ejs'),
        inject: !isProd,
      }),
      new FriendlyErrorsPlugin(),
      new VueLoaderPlugin(),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ],
	}

	if (isProd) {
    config.plugins = (config.plugins || []).concat([
      // 分离css文件
      new MiniCssExtractPlugin({
        filename: '[name].[chunkhash:8].css',
        chunkFilename: '[id].[chunkhash:8].css',
      }),
      // 限制文件最小KB
      new webpack.optimize.MinChunkSizePlugin({
        minChunkSize: 20000
      }),
      new OptimizeCssAssetsPlugin(
        {
          cssProcessor: require('cssnano'),
          cssProcessorOptions: {
            // postcss那边已经处理过autoprefixer了，这里把它关掉，否则会导致浏览器前缀兼容范围问题
            autoprefixer: false,
            discardComments: { removeAll: true }
          },
        }
      ),
    ])
	}
	return config
}