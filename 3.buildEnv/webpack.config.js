const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development', // 不填写 默认就是production
  entry: {
    main: './src/index.js',
    sub: './src/index.js'
  }, // 简写 entry: './src/index.js'
  output: {
    // filename: 'bundle.js', // 默认输出名字为 main.js 对应 entry对象的键
    filename: "[name].js",
    publicPath: "https://cdn.com",
    path: path.resolve(__dirname, 'dist') // 绝对路径
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
  ]
}