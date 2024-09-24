import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/task1',
      name: 'Task1',
      component: () => import(/* webpackChunkName: "task1" */ '../views/Task1View.vue')
    },
    {
      path: '/task2',
      name: 'Task2',
      component: () => import(/* webpackChunkName: "task2" */ '../views/Task2View.vue')
    },
    {
      path: '/task3',
      name: 'Task3',
      component: () => import(/* webpackChunkName: "task3" */ '../views/Task3View.vue')
    }
  ]
})

export default router
