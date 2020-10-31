function Header() {
  const root = document.getElementById('root');
  const dom = document.createElement('div');
  dom.innerText = 'This is header.';
  
  root.append(dom);
}

module.exports = Header;