// const Header = require('./header');
// const avatar = require('./taylor.jpeg');

// console.log(avatar);
// new Header();
import createAvatar from "./avatar";
import Wu from './wu.png'
// import './style.sass' // 全局样式
import style from './style.sass' // css module
import './iconfont.scss'

createAvatar()

const wuImg = new Image()
wuImg.src = Wu
wuImg.classList.add(style.avatar)

const root = document.getElementById('root')
root.append(wuImg)

root.innerHTML = "<div class='iconfont icon-niunai'>Test Item</div>"

