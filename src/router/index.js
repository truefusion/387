import {
	createRouter,
	createWebHistory,
} from 'vue-router';

import Document from './../views/Document.vue';
import Index from './../views/Index.vue';

const router = createRouter({
	history: createWebHistory(
		import.meta.env.BASE_URL),
	routes: [{
		path: '/',
		name: 'home',
		component: Document,
	}, ],
});

export default router;
