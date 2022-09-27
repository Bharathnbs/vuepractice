import { createRouter, createWebHashHistory } from "vue-router";

import Index from './posts/Index.vue';
import Show from './posts/Show.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name: 'Index', component: Index },
        { path: '/show/:id', name: 'Show', component: Show },
    ],
});