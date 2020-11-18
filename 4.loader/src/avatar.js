import avatar from './taylor.jpeg'
import style from "./style.sass"

function createAvatar() {
  const image = new Image()
  image.src = avatar
  image.className = style.avatar
  
  const root = document.getElementById("root")
  root.append(image)
}

export default createAvatar