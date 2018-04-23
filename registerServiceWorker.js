self.addEventListener('notificationclick', function (event) {
  console.log('On notification click: ', event.notification.tag);
  var notification = event.notification;
  var action = event.action;

  console.log(notification);
  if (action === 'confirm') {
    console.log('使用者點選確認');
    notification.close();
  } else {
    console.log(action);
  }
});

self.addEventListener('notificationclose', function (event) {
  console.log('使用者沒興趣', event);
});

// 監聽推播事件
self.addEventListener('push', function (event) {
  console.log('push message!');
  var data = {
    "message": "[無法讀取訊息]"
  }
  try {
    data = event.data.json();
  } catch (e) {}

  var title = '您有新訊息';
  var body = data.message;
  var icon = '/img/icon.png';
  var tag = '';

  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: icon,
      tag: tag
    })
  );
});

// 使用者點擊推播彈跳訊息
// self.addEventListener('notificationclick', function (event) {
//   var goingToOpenUrl = 'https://example.com';
//   event.notification.close();

//   event.waitUntil(clients.matchAll({
//     type: 'window'
//   }).then(function (clientList) {
//     for (var i = 0; i < clientList.length; i++) {
//       var client = clientList[i];
//       if (client.url === goingToOpenUrl && 'focus' in client) {
//         return client.focus();
//       }
//     }
//     if (clients.openWindow) {
//       return clients.openWindow(goingToOpenUrl);
//     } else {
//       console.log("無法開啟url:" + goingToOpenUrl);
//     }
//   }));
// });
