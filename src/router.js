import { createRouter, createWebHistory } from 'vue-router';
import { authGuard } from '@auth0/auth0-vue';

import NotFound from './components/NotFound.vue';
import Landing from './components/Landing.vue';
import Home from './components/Home.vue';
import Weather from './components/Weather.vue';

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
  },
  {
    path: '/',
    name:'landing',
    component: Landing,
  },
  {
    path: '/home',
    name:'home',
    component: Home,
    beforeEnter: authGuard,
  },
  {
    path: '/weather',
    name:'weather',
    component: Weather,
    beforeEnter: authGuard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
