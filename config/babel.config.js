exports.get = () => {
	return {
		presets: [
			['@babel/preset-env']
		],
		plugins: [
			['transform-vue-jsx'],
			['@babel/plugin-syntax-jsx'],
			['@babel/plugin-syntax-dynamic-import'],
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
