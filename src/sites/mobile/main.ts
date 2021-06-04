import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import GeekUI from '@/geekui';
import '@/sites/assets/styles/reset.scss';
import '@/utils/touchEmulator';
createApp(App)
  .use(router)
  .use(GeekUI)
  .mount('#app');
