import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import oauth from './oauth';

import 'bootstrap/js/dist/offcanvas';
import './assets/main.scss';

const app = createApp(App);
app.use(router);
app.use(oauth);
app.mount('#app');
