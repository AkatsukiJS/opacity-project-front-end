const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const FlowWebpackPlugin = require('flow-webpack-plugin')
const webpack = require('webpack')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: isProd ? '[contentHash].js' : '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'standard-loader',
        exclude: /node_modules/,
        options: {
          parser: 'babel-eslint',
          plugins: ['flowtype'],
          fix: true
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.(png|svg|woff|ttf|eot)$/,
        exclude: /node_modules/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HTMLPlugin({
      template: './src/index.html',
      inject: true,
      hash: true,
      cache: true
    }),
    new FlowWebpackPlugin(),
    new webpack.EnvironmentPlugin({
      API_BASE: process.env.API_BASE
    })
  ]
}
