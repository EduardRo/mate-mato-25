import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'

import DesprePage from '@/pages/DesprePage.vue'
import ClaseMenuPage from '@/pages/ClaseMenuPage.vue'
import MateriiMenuPage from '@/pages/MateriiMenuPage.vue'
import TestPage from '@/pages/TestPage.vue'

import ResultsPage from '@/pages/ResultsPage.vue'
import TeorieClaseMenuPage from '@/pages/TeorieClaseMenuPage.vue'
import TeorieMateriiMenuPage from '@/pages/TeorieMateriiMenuPage.vue'
import TeoriePage from '@/pages/TeoriePage.vue'
import '@/views/RegisterView.vue'
import '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import CallbackView from '@/views/CallbackView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },

    {
      path: '/teorie/clase', name: 'TeorieClase', component: TeorieClaseMenuPage
    },
    {
      path: '/teorie/:codclasa', name: 'TeorieClasa', component: TeorieMateriiMenuPage
    },
    {
      path: '/teorie/:codclasa/:codserie', name: 'Teorie', component: TeoriePage
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
    },


    { path: '/results', name: 'ResultsPage', component: ResultsPage },

    { path: '/register', name: 'RegisterView', component: RegisterView },

    { path: '/login', name: 'LoginView', component: LoginView },
    {
      path: '/auth/callback',
      name: 'callback',
      component: CallbackView,
    },

  ],
})

export default router
