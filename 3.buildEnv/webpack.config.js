const path = require('path');

module.exports = {
  mode: 'development', // 不填写 默认就是production
  entry: {
    main: './src/index.js'
  }, // 简写 entry: './src/index.js'
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist') // 绝对路径
  }
}