const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(jpeg|jpg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images'
          }
        }
      },
      {
        test: /\.(png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images',
            limit: 2048 // 小于2KB的文件转为base64,反之则打包到images目录下
          }
        }
      },
      {
        test: /\.(sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'] // 如果要是多个loader用数组的形式
      }
      ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}