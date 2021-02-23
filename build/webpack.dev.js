
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
// const path = require('path')

// const resolve = dir => path.join(__dirname, '..', dir)

const devConfig = {
    mode: 'development',
    devServer: {
        // contentBase: resolve('dist'),
        // host: '0.0.0.0',
        port: 7000,
        open: true
      },
}

module.exports = merge(commonConfig, devConfig);