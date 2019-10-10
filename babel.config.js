module.exports = {
	presets: [
		[
		 '@babel/preset-env',
			{
				"modules": false
			}
		]
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
