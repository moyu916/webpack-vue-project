
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const prodConfig = {
    mode: 'production',
    devtool:'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader,
                //   'style-loader', 删除，不然会报错
                  'css-loader'
                ]
              },
              {
                test: /\.styl(us)?$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  'stylus-loader'
                ]
              },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
          }),
        new BundleAnalyzerPlugin()
    ]

}

module.exports = merge(commonConfig, prodConfig);