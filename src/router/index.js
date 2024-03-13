import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/index.vue'
import AOS from 'aos'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: HomeView
    },
    {
      path: '/interactive-map',
      name: 'interactive-map',
      component: () => import('../pages/interactive-map.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../pages/gallery.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  AOS.init(); // Initialize AOS
  next();
});
export default router
