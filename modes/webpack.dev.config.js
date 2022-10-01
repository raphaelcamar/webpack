const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    port: 8000,
    historyApiFallback: true
  },
  plugins: [
    new TerserPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Modes'
    }),
  ]
}