const { resolve, PROJECT_PATH } = require('./constants.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const webpack = require('webpack');

module.exports = {
  // 定义了入口文件路径
  entry: {
    index: resolve(PROJECT_PATH, './src/index.ts'),
  },
  // 定义了编译打包之后的文件名以及所在路径。还有打包的模块类型
  output: {
    // 打包后的产物名
    filename: 'js/[name].[fullhash].js',
    // 路径
    path: resolve(PROJECT_PATH, './dist')
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(ts)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.san$/,
        use: 'san-loader',
      },
      {
        test: /\.(png|jpe?g|gif|gltf|glb|svg|ico)$/,
        use: [{loader: 'url-loader'}]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
            'style-loader',
            {loader: 'css-loader', options: {importLoaders: 1}},
            'less-loader'
        ]
      }
    ],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
      '@docs': resolve(__dirname, '../docs'),
      '@public': resolve(__dirname, '../public'),
      '@test': resolve(__dirname, '../test'),
      '@scripts': resolve(__dirname, '../scripts')
    },
    extensions: ['.ts', '.js', '.san'],
  },
  plugins: [
    new WebpackBar({
        name: '正在卖力打包中~',
        color: '#fa8c16'
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../index.html'),
      inject: 'body',
      favicon: resolve(__dirname, '../favicon.ico')
    })
  ]
}
