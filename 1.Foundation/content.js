function Content() {
  var dom = document.getElementById('root');
  var content = document.createElement('div');
  content.innerText = 'This is content.';
  dom.append(content);
}

// 导出,webpack才能正确识别
export default Content;