import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  },
  {
    path: '/pictures',
    name: 'pictures',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Pictures.vue')
  },
  {
    path: '/musics',
    name: 'musics',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Musics.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
