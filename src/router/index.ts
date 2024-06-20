import HomeLayout from '@/layouts/HomeLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'country' },
      component: HomeLayout,
      children: [
        {
          path: '/country',
          name: 'country',
          component: () => import('@/views/CountryView.vue')
        },
        {
          path: '/view1',
          name: 'view1',
          component: () => import('@/views/ViewOne.vue')
        },
        {
          path: '/view2',
          name: 'view2',
          component: () => import('@/views/ViewTwo.vue')
        }
      ]
    }
  ]
})

export default router
