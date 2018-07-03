/**
 * Created by Administrator on 2018/4/23.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = [
  {
    path:'/',
    component:resolve => require(['../components/header/header'], resolve)
  },
  {
    path:'/sile',
    component:resolve => require(['../components/header/header'], resolve)
  }
];


const routers = new VueRouter({
  mode: 'history',
  router
});

export default routers


