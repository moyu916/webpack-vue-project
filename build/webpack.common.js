const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { VueLoaderPlugin } = require('vue-loader')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.styl(us)?$/,
          use: [
            'vue-style-loader',
            'style-loader',
            'css-loader',
            'stylus-loader'
          ]
        },
        {
          test: /\.(png|svg|jpe?g)$/,
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader']
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