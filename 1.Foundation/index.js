// ES Module 浏览器中无法识别
import Header from './header.js';
import Content from './content.js';
import Footer from './footer';

// var dom = document.getElementById('root');

// 传统的模式是面向过程的
// var header = document.createElement('div');
// header.innerText = 'This is Header.';
// dom.appendChild(header);

// var content = document.createElement('div');
// header.innerText = 'This is Content.';
// dom.appendChild(content);

// var footer = document.createElement('div');
// header.innerText = 'This is Footer.';
// dom.append(footer);

// 面向对象
new Header(); // 构造函数
new Content(); // 构造函数
new Footer(); // 构造函数