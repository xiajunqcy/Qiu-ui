'use strick'

const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')

const webpackConfig = merge({}, {
	context: path.resolve(__dirname, '../'),
	entry: {
		vui: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, '../lib'),
		filename: utils.assetsPath('./lib/[name].js'),
		library: 'qui',
		libraryTarget: 'umd',
	},
	module: {
		rules: utils.styleLoaders({
			sourceMap: config.build.productionSourceMap,
			extract: true,
			usePostCSS: true
		})
	},
	devtool: false,
	externals: {
		vue: {
			root: 'Vue',
			commonjs: 'vue',
			commonjs2: 'vue',
			amd: 'vue'
		}
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': resolve('src'),
			//   'src': resolve('src'),
			//   'packages': resolve('packages'),
			//   'lib': resolve('lib'),
			//   'components': resolve('examples/src/components')
		}
	},


})

config.entry = {
	'vui': './src/index.js'
}

config.output = {
	filename: './lib/[name].js',
	library: 'vui',
	libraryTarget: 'umd'
}
config.resolve = {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': resolve('src'),
			//   'src': resolve('src'),
			//   'packages': resolve('packages'),
			//   'lib': resolve('lib'),
			//   'components': resolve('examples/src/components')
		}
	},
	config.externals = {
		vue: {
			root: 'Vue',
			commonjs: 'vue',
			commonjs2: 'vue',
			amd: 'vue'
		}
	}

config.plugins = [
	new webpack.DefinePlugin({
		'process.env': require('../config/prod.env')
	})
]

module.exports = config
