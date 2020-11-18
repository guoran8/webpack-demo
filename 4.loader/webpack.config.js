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
        test: /\.(eot|svg|ttf|woff)$/,
        use: {
          loader: "file-loader"
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
        test: /\.(sass|scss)$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            importLoaders: 2, // css中有import的语句,默认直接使用css-loader,此选项配置当遇到import的时候首先调用后2个loader
            // modules: true // css module
          }
        }, 'postcss-loader', 'sass-loader'], // 如果要是多个loader用数组的形式
      }
      ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}