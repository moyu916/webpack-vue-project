
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const resolve = dir => path.join(__dirname, '..', dir);


const prodConfig = {
    mode: 'production',
    devtool:'cheap-module-source-map',
    output: {
		filename: '[name].[contenthash].js',
		chunkFilename: '[name].[contenthash].js',
        path: resolve('dist') ,
	},
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader,
                //   'style-loader', 删除，不然会报错
                  'css-loader',
                  'postcss-loader'
                ]
              },
              {
                test: /\.styl(us)?$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  {
                      loader: 'css-loader',
                      options: {
                        importLoaders: 2
                      }
                  },
                  'postcss-loader',
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