#### 搭建webpack环境
webpack本身就NodeJS开发的

#### NPM
```
npm install webpack webpack-cli -g // 全局安装
npm install webpack webpack-cli -D // 开发依赖安装
npm info // 查看包信息
```

#### 配置文件
默认配置文件为: webpack.config.js
```
npx webpack index.js // 指定文件打包
npx webpack // 会根据配置文件运行
```
指定配置文件
```
npx webpack --config <file>
```

#### NPM SCRIPTS
scripts会优先在当前的node_modules目录中查找
```
"build": "webpack"
```

### Output和Entry配置

