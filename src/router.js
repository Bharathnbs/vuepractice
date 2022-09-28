import { createRouter, createWebHashHistory } from "vue-router";

import Index from './posts/Index.vue';
import Show from './posts/Show.vue';
import Create from './posts/Create.vue';
import Edit from './posts/Edit.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name: 'Index', component: Index },
        { path: '/show/:id', name: 'Show', component: Show },
        { path: '/create', name: 'Create', component: Create },
        { path: '/edit/:id', name: 'Edit', component: Edit },
    ],
});