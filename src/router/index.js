import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/View/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // We will add 'tutorials' and 'about' later
  ]
})

export default router