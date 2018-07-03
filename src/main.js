/**
 * Created by Administrator on 2018/4/23.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';

import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  {path: '', component: goods},
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
];

const router = new VueRouter({
  routes
});

const app = new Vue({
  router: router,

  render: ver => ver(App),
  data: {
    eventHub: new Vue()
  }
});


app.$mount('#app');





