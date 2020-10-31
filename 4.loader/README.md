### Loader
webpack默认只能识别 js文件  
为了能够打包图片、样式就需要使用loader

### Loader使用
配置文件中 添加 module 选项
```
module: {
    rules: [{
      text: /\.jpg$/, // 正则,匹配文件
      use: { // 选择使用的loader
        loader: 'file-loader'
      }
    }]
  },
```

### 原理
webpack打包时,遇见 jpg文件时,会调用 file-loader 处理,  
并且移动文件到输出目录并返回文件名.