import { createRouter, createWebHistory } from 'vue-router'

import AGMView from '../views/AGMView.vue'
import ContactView from '../views/ContactView.vue'
import GivingView from '../views/GivingView.vue'
import HomeView from '../views/HomeView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import PastSermonsView from '../views/PastSermonsView.vue'
import PlanAVisitView from '../views/PlanAVisitView.vue'
import WhatsNewView from '../views/WhatsNewView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/planavisit',
      name: 'planavisit',
      component: PlanAVisitView
    },
    {
      path: '/whatsnew',
      name: 'whatsnew',
      component: WhatsNewView
    },
    {
      path: '/pastsermons',
      name: 'pastsermons',
      component: PastSermonsView
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: AboutUsView
    },
    {
      path: '/giving',
      name: 'giving',
      component: GivingView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/agm',
      name: 'agm',
      component: AGMView
    }
  ]
})

export default router
