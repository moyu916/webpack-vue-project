const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const resolve = dir => path.join(__dirname, '..', dir)

module.exports = {
    // context: path.resolve('./src'),
    entry: resolve('src/main.js'),
    output: {
        filename: '[name].js',
        path: resolve('dist')
        
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader'
          ]
        }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: resolve('index.html')
        }),
        new VueLoaderPlugin()
      ]
}