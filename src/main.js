import { createApp } from 'vue';
import VueLazyload from 'vue-lazyload';
import App from './App.vue';
import './registerServiceWorker';
import store from './store';
// import router from './router';
import '@/assets/scss/main.scss';

const app = createApp(App);
app.use(store);
app.use(VueLazyload);
// app.use(router);

app.mount('#app');
