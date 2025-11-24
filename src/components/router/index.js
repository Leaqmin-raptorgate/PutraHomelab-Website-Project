// Vue Router configuration
// Provides routes for the home view and a 404 catch-all.
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/view/homeView.vue'
// import NotFoundView from '@components/view/.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
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

