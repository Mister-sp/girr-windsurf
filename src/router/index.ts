import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ShowPage from '../pages/ShowPage.vue';
import ConfigPage from '../pages/ConfigPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
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
  ]
});
