exports.get = () => {
	return {
		presets: [
			[
				'@babel/preset-env',
				{
					modules: false
				}
			]
		],
		plugins: [
			['@babel/plugin-syntax-dynamic-import'],
			['@babel/plugin-syntax-jsx'],
			['transform-vue-jsx'],
			[
				'component',
				{
					libraryName: 'element-ui',
					styleLibraryName: 'theme-chalk'
				}
			]
		]
	}
}
