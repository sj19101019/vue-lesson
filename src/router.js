import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './components/App.vue';
import Home from './components/Home.vue';
import Products from './components/Products.vue';
import About from './components/About.vue';
import AboutUs from './components/AboutUs.vue';
import AboutCompany from './components/AboutCompany.vue';
import AboutHome from './components/AboutHome.vue';
import PushMessage from './components/PushMessage.vue';
import MRTStation from './components/MRTStation.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App,
      children:[
        {
          path: '',
          component: Home,
        },
        {
          path: 'about',
          component: About,
          children: [
            { path: '', component: AboutHome },
            { path: 'us', component: AboutUs },
            { path: 'company', component: AboutCompany },
            { path: 'Taipei-MRTStation', component: MRTStation },
          ]
        },
        {
          path: 'products/:id?', component: Products
        },
        {
          path: 'pushMessage', component: PushMessage,
        },
        {
          path: '*',
          redirect: '/',
        },
      ]
    },
  ],
});
