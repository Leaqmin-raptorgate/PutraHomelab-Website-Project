// Vue Router configuration
// Provides routes for the home view and a 404 catch-all.
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/view/homeView.vue'
import AboutView from '@/components/view/aboutView.vue'
import ArticleView from '@/components/view/articleView.vue'

//Dynamic Imports
import categoryView from '@/components/view/categoryView.vue'
import articleDetailView from '@/components/view/articleDetailView.vue'


const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'About',
		component: AboutView,
	},
	{
		path: '/articles',
		name: 'Articles',
		component: ArticleView,
	},
	{
		path: '/articles/:category',
		name: 'Category',
		component: categoryView,
	},
	{
		path: '/post/:id',
		name: 'ArticleDetail',
		component: articleDetailView,
		props: true,
	},
	{
		// // catch-all 404 route for unknown paths
		// path: '/:pathMatch(.*)*',
		// name: 'NotFound',
		// component: NotFoundView,
	},
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})

export default router

