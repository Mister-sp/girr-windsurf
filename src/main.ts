import Vue from 'vue';
import { CreateElement } from 'vue/types/vue';
import App from './App.vue';
import router from './router';
import { createPinia, PiniaVuePlugin } from 'pinia';
import './index.css';

Vue.use(PiniaVuePlugin);
const pinia = createPinia();

new Vue({
  router,
  pinia,
  render: (h: CreateElement) => h(App),
}).$mount('#app');
