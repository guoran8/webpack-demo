// const Header = require('./header');
// const avatar = require('./taylor.jpeg');

// console.log(avatar);
// new Header();

import Taylor from './taylor.jpeg'
import Wu from './wu.png'

import './style.sass'

const taylor = new Image()
console.log(Taylor)
taylor.src = Taylor
taylor.className = "avatar"

const wuImg = new Image()
wuImg.src = Wu
wuImg.classList.add('avatar')

const root = document.getElementById('root')
root.append(taylor)
root.append(wuImg)

