
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
// const path = require('path')

// const resolve = dir => path.join(__dirname, '..', dir)

const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        // contentBase: resolve('dist'),
        // host: '0.0.0.0',
        port: 7000,
        open: true
      },
    module: {
      rules: [
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
      ]
    }
}

module.exports = merge(commonConfig, devConfig);