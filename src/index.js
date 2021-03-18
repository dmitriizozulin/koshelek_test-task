import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './components/App';

const router = new createRouter({
  history: createWebHistory('/koshelek_test-task/'),
  routes: [
    { path: '/', component: () => import('./components/Table'), props: true },
    { path: '/diff', component: () => import('./components/Diff'), props: true },
  ],
});

createApp(App)
  .use(router)
  .mount('#app');
