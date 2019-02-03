const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const Minify = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [new Minify()],
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [new webpack.HashedModuleIdsPlugin()]
})
