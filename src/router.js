import { createRouter, createWebHistory } from 'vue-router';

import Apphome from './pages/Apphome.vue';
import About from './pages/About.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Apphome
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
});

export {router};