// Vue Router configuration
// Provides routes for the home view and a 404 catch-all.
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/view/homeView.vue'
import AboutView from '@/components/view/aboutView.vue'
import ArticleView from '@/components/view/articleView.vue'
import articleViewNetwork from '@/components/view/articleViewNetwork.vue'
import articleViewSelfHost from '@/components/view/articleViewSelfHost.vue'
import articleViewHardware from '@/components/view/articleViewHardware.vue'
import articleViewLinux from '@/components/view/articleViewLinux.vue'
import articleViewDemo from '@/components/view/articleDetailView.vue'
import StudyCasesView from '../view/studyCasesView.vue'

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
    path: '/articles/network',
    name: 'ArticlesNetwork',
    component: articleViewNetwork
  },
  {
    path: '/articles/self-hosting',
    name: 'ArticlesSelfHosting',
    component: articleViewSelfHost
  },
  {
    path: '/articles/hardware',
    name: 'ArticlesHardware',
    component: articleViewHardware
  },
  {
    path: '/articles/linux',
    name: 'ArticlesLinux',
    component: articleViewLinux
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
    // // catch-all 404 route for unknown paths
    // path: '/:pathMatch(.*)*',
    // name: 'NotFound',
    // component: NotFoundView,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
