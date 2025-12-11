// Vue Router configuration
// Provides routes for the home view and a 404 catch-all.
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/view/homeView.vue'
import AboutView from '@/components/view/aboutView.vue'
import ArticleView from '@/components/view/articleView.vue'
import articleViewDemo from '@/components/view/articleDetailView.vue'
import StudyCasesView from '../view/studyCasesView.vue'
import CVPageView from '../view/CVPageView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/articles',
    name: 'Articles',
    component: ArticleView
  },
  {
    path: '/articles/:category',
    name: 'ArticlesCategory',
    component: ArticleView
  },
  {
    path: '/articles/demo',
    name: 'ArticlesDemo',
    component: articleViewDemo
  },
  {
    path: '/study-cases',
    name: 'StudyCases',
    component: StudyCasesView
  },
  {
    path: '/about/me',
    name: 'AboutMe',
    component: CVPageView
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
