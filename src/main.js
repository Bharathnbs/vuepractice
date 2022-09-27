import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import state from './state.js';



createApp(App)
    .use(router)
    .use(state)
    .mount('#app');