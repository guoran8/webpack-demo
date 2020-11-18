const path = require('path')

module.exports = {
  mode: "development",
  devtool: "eval", // 关闭sourceMap
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}