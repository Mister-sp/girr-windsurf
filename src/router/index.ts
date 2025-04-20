import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ShowPage from '../pages/ShowPage.vue';
import ConfigPage from '../pages/ConfigPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/shows/:id',
    name: 'Show',
    component: ShowPage,
    props: true
  },
  {
    path: '/config',
    name: 'Config',
    component: ConfigPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
