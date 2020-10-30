function Header() {
  var root = document.getElementById('root');
  var element = document.createElement('div');
  element.innerText = 'This is Header';
  root.append(element);
}

module.exports = Header;