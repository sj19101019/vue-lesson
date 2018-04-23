import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './Home.vue';
import Products from './Products.vue';
import About from './About.vue';
import AboutUs from './AboutUs.vue';
import AboutCompany from './AboutCompany.vue';
import AboutHome from './AboutHome.vue';
import PushMessage from './PushMessage.vue';

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