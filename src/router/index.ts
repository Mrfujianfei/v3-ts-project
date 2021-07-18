import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import HomePage from '@/views/home/home';
import Detail from '@/views/detail/detail';

const NotFound = () => import('@/views/notFound/notFound'); // 动态导入

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
