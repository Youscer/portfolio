import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  { path: '/portfolio', name: 'Home', component: HomeView },
  { path: '/portfolio/projects', name: 'Projects', component: ProjectsView },
  { path: '/portfolio/contact', name: 'Contact', component: ContactView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router