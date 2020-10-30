### 基础
webpack是模块打包工具,可以更了解前端工程化模式.

### 不使用webpack实现面向对象的方式开发
1.如果用面向对象的方式,分别加载多个JS文件,会发起更多的Http请求  
加载速度会更慢。  
2.代码中不清晰各个文件的相互关系  
3.不易排错

### 模块化引入文件
浏览器原生不支持 ES Module
使用webpack做编译,使浏览器能够识别

### 安装 webpack
```
npm init -y
npm i webpack webpack-cli -D
```

### 编译index.js
```
npx webpack ./index.js
```