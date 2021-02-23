const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = dir => path.join(__dirname, '..', dir)

module.exports = {
    // context: path.resolve('./src'),
    entry: resolve('src/main.js'),
    output: {
        filename: '[name].js',
        path: resolve('dist')
        
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: resolve('index.html')
        })
      ]
}