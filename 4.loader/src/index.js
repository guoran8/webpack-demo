// const Header = require('./header');
// const avatar = require('./taylor.jpeg');

// console.log(avatar);
// new Header();

import Taylor from './taylor.jpeg';

const taylor = new Image();
console.log(Taylor);
taylor.src = Taylor;

const root = document.getElementById('root');
root.append(taylor);