const path = require('path');

module.exports = {
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps
    sourceMap: false
  },
  // webpack-dev-server 相关配置
  devServer: {
    // host: '',
    // port: '8080',
    open: true //自动打开浏览器
  }
};