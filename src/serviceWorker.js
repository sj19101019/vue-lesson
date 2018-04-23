export default function navigatorServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      this.navigator.serviceWorker.register('./registerServiceWorker.js').then(function (registration) {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch(function (err) {
          console.log('ServiceWorker registration failed: ', err);
        })
    });
  }
}



export function askForNotificationPermission() {
  Notification.requestPermission(function (status) {
    console.log('User Choice', status);
    if (status !== 'granted') {
      console.log('推播允許被拒絕了!');
    } else {
      setPushSubscribe();
    }
  });
}




function displayNotification(slogan, opts) {
  if (!'serviceWorker' in navigator)
    return;
  
  navigator.serviceWorker.ready
    .then(function (sw) {
      sw.showNotification(slogan, opts);
    })
}


function setPushSubscribe() {
  if (!('serviceWorker' in navigator))
    return;

  let reg = undefined;
  navigator.serviceWorker.ready
    .then(sw => {
      reg = sw;
      return sw.pushManager.getSubscription();
    })
    .then(sub => {
      if (sub === null) {
        const publicKey = 'BPyGGs1CV3j9wqp9wrTkQqs-wxqg5JFXyDXuHOAyOG3foXqhcvOEi8My4OIQ-ZPKX4hvSwSWIAT6YmaQEEfmR4g';
        const convertedVapidPKey = urlBase64ToUint8Array(publicKey);
        //建立新的訂閱
        const t = reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: convertedVapidPKey
        })
        .then(newSub => {
          console.log(newSub);
          displayNotification('訂閱成功！！', options)
        });
      } else {
        console.log('already subscribe！');
        const opts = Object.assign({}, options);
        //已經訂閱
        opts.image = undefined;
        opts.actions = undefined;
        opts.body = '歡迎回來Vue app！';
        displayNotification('Vue app', opts);
      }
    });
}


function urlBase64ToUint8Array(base64String) {
  var padding = '='.repeat((4 - base64String.length % 4) % 4);
  var base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');
  var rawData = window.atob(base64);
  var outputArr = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
    outputArr[i] = rawData.charCodeAt(i);
  }
  return outputArr;
}



const options = {
  body: '歡迎進入vue-lesson',
  icon: '/dist/logo.png',
  image: '/dist/logo.png',
  lang: 'zh-Hant',
  vibrate: [100, 50, 200],
  tag: 'confirm-notification',
  actions: [{
      action: 'confirm',
      title: '確認',
      icon: '/dist/logo.png'
    },
    {
      action: 'cancel',
      title: '取消',
      icon: '/dist/logo.png'
    }
  ]
};