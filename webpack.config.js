const path = require('path');

module.exports = {
  entry: {
    'main': './src/index.js',
    'login': './src/login.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        // 拡張子 .js の場合
        test: /\.js$/,
        use: [
          {
            // Babel を利用する
            loader: 'babel-loader',
            // Babel のオプションを指定する
            options: {
              presets: [
                // env を指定することで、ES2018 を ES5 に変換。
                // {modules: false}にしないと import 文が Babel によって CommonJS に変換され、
                // webpack の Tree Shaking 機能が使えない
                ['env', {'modules': false}]
              ]
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  }
}
// vim: set ts=2 sts=2 sw=2 expandtab list:
