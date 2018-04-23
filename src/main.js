import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import navigatorServiceWorker from './serviceWorker'



new Vue({
  el: '#app',
  router,
  template: '<router-view/>',
})

navigatorServiceWorker();
