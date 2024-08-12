const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    // ...
    new BundleAnalyzerPlugin({
      analyzerMode: 'server', // 开一个本地服务查看报告
      analyzerHost: '127.0.0.1', // host 设置
      analyzerPort: 8888, // 端口号设置
      openAnalyzer: false,//  阻止在默认浏览器中自动打开报告
    }),
  ],
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    compress: true,
    open: true,
    hot: true
  }
});
