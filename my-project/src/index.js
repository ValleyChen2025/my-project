// 动态内容生成逻辑
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const button = document.createElement('button');
  
  button.textContent = '点击生成内容';
  button.className = 'action-btn';
  
  button.addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = '动态生成内容 - ' + new Date().toLocaleTimeString();
    newElement.className = 'content-text';
    app.appendChild(newElement);
  });
  
  app.appendChild(button);
});