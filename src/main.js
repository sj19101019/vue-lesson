import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import navigatorServiceWorker from './serviceWorker'

// test log

new Vue({
  el: '#app',
  router,
  template: '<router-view/>',
})

navigatorServiceWorker();
