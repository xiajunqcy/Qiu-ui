'use strick'

const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const webpackConfig = merge(baseWebpackConfig, {
	entry: {
		'qui': './src/index.js'
	},
	output: {
		// path: path.resolve(__dirname, '../lib'),
		filename: './lib/[name].js',
		library: 'qui',
		libraryTarget: 'umd',
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
	plugins: [
		new webpack.DefinePlugin({
			'process.env': require('../config/prod.env')
		})
	]
})

module.exports = webpackConfig
