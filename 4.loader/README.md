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

### url-loader
为把指定文件编码base64,
好处: 减少了http的请求次数
缺点: 如果文件大,那么打包生成的JS文件体积就更大,这样加载JS文件的时间就变长了

### css-loader style-loader
css-loader 分析样式文件关系,合并为css
style-loader 把样式文件挂载到head标签

### Loader执行顺序
从下到上,从右到左