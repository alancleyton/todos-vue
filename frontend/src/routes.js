import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Todo from './components/Todo';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Todo },
        { path: '/sobre', component: Sobre },
        { path: '/projetos', component: Projetos }
    ]
});

export default router;