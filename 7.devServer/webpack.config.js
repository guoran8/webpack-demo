const path = require("path")

module.exports = {
  entry: './src/main.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"), // 文件路径
    open: true,
    port: 9000,
    // proxy: {
    //   '/api': 'http://localhost:3000'
    // }
  }
}