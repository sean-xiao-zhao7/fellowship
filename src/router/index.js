import { createRouter, createWebHistory } from 'vue-router'

import AGMView from '../views/AGMView.vue'
import ContactView from '../views/ContactView.vue'
import GivingView from '../views/GivingView.vue'
import HomeView from '../views/HomeView.vue'
import OurMissionView from '../views/OurMissionView.vue'
import PastSermonsView from '../views/PastSermonsView.vue'
import PlanAVisitView from '../views/PlanAVisitView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/agm',
      name: 'agm',
      component: AGMView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/giving',
      name: 'giving',
      component: GivingView
    },
    {
      path: '/ourmission',
      name: 'ourmission',
      component: OurMissionView
    },
    {
      path: '/pastsermons',
      name: 'pastsermons',
      component: PastSermonsView
    },
    {
      path: '/planavisit',
      name: 'planavisit',
      component: PlanAVisitView
    }
  ]
})

export default router
