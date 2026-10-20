import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/About.vue'),
    },

    {
      path: '/projects',
      name: 'Projekte',
      component: () => import('../pages/Projects.vue'),
    },
  ],
})

export default router
