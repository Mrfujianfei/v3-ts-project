import { createApp } from 'vue';

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import App from './App.vue'
import router from './router';
import { store, key } from './store';

createApp(App).use(router).use(store, key).use(ElementPlus).mount('#app');
