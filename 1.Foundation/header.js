function Header() {
  var dom = document.getElementById('root');
  var header = document.createElement('div');
  header.innerText = 'This is Header.'
  dom.append(header);
}

// 导出,webpack才能正确识别
export default Header;
