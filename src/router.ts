import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/HomeView.vue'),
  },
  {
    path: '/sobre',
    name: 'about',
    component: () => import('./views/AboutView.vue'),
  },
  {
    path: '/servicos',
    name: 'services',
    component: () => import('./views/ServicesView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];
