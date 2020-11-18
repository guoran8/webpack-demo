### SourceMap
webpack打包源码时,会很难跟踪到原始代码中的错误和警告。
sourcemap可以映射你编译的代码到原始代码,可以准确找到原始代码错误位置
开发模式默认配置开启了sourceMap

### 配置参数
source-map 
eval 
inline-source-map 在生成文件底部
inline-cheap-source-map 不精确到行列,不包括第三方导入的库
inline-cheap-module-source-map 不精确到行列,包括第三方导入的库

### 最佳实战
eval-cheap-module-source-map 开发环境推荐
cheap-module-source-map 线上必须要提示的化,建议