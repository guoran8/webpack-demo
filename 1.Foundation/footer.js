function Footer() {
  var dom = document.getElementById('root');
  var footer = document.createElement('div');
  footer.innerText = 'This is footer.';
  dom.append(footer);
}

// 导出,webpack才能正确识别
export default Footer;