import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomePage from '../pages/HomePage.vue'
import TeoriePage from '@/pages/TeoriePage.vue'
import DesprePage from '@/pages/DesprePage.vue'
import ClaseMenuPage from '@/pages/ClaseMenuPage.vue'
import MateriiMenuPage from '@/pages/MateriiMenuPage.vue'
import TestPage from '@/pages/TestPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/teorie', name: 'Teorie', component: TeoriePage
    },
    {
      path: '/despre', name: 'Despre', component: DesprePage
    },
    {
      path:'/clase', name:'Clase', component:ClaseMenuPage
    },
    {
      path:'/materii/:codclasa', name:'MateriiMenu', component:MateriiMenuPage
    },
    
    {
      path:'/test/:codserie', name:'Test', component:TestPage
    }
    
  ],
})

export default router
