import Vue from 'vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import navigatorServiceWorker from './serviceWorker';

Vue.use(VueAxios, axios);

new Vue({
  created() {
    Vue.axios.get('http://data.taipei/youbike').then((response) => {
      console.log(response.data)
    })
  },
  el: '#app',
  router,
  template: '<router-view/>',
})

navigatorServiceWorker();
