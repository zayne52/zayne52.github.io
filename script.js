function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  document.getElementById('status-bar-time').textContent = `${hours}:${minutes}`;
  document.getElementById('main-time').textContent = `${hours}:${minutes}`;

  const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  const month = now.getMonth() + 1;
  const day = now.getDate();
  document.getElementById('main-date').textContent = `${weekdays[now.getDay()]}, ${month}月${day}日`;
}
updateTime();
setInterval(updateTime, 60000);

// 关闭提示弹窗
document.querySelector('.tips-btn').addEventListener('click', () => {
  document.querySelector('.tips-wrap').style.display = 'none';
});

// 通知功能
function showNotification(text = "你有一条新的通知", name = "系统消息", avatar = "https://i.postimg.cc/gr2ndvPL/QQ.jpg") {
  const notifBar = document.getElementById('notification-bar');
  document.querySelector('.name').textContent = name;
  document.querySelector('.message').textContent = text;
  document.getElementById('notification-avatar').src = avatar;
  notifBar.classList.add('show');
  setTimeout(() => notifBar.classList.remove('show'), 3000);
}

// 初始通知
setTimeout(() => {
  showNotification("欢迎使用 EPhone！", "EPhone助手");
}, 2000);
