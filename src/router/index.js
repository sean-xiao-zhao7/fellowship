import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import AGMView from '../views/AGMView.vue'
import BlogView from '../views/BlogView.vue'
import ContactView from '../views/ContactView.vue'
import EventsView from '../views/EventsView.vue'
import GivingView from '../views/GivingView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/agm',
      name: 'agm',
      component: AGMView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView
    },
    {
      path: '/giving',
      name: 'giving',
      component: GivingView
    }
  ]
})

export default router
