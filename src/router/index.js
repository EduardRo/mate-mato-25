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
import AbonamentePage from '@/pages/AbonamentePage.vue'
//import RezultateGraphicPage from '@/pages/RezultateGraphicPage.vue'
import RezultateClaseMenuPage from '@/pages/RezultateClaseMenuPage.vue'
import RezultateMateriiMenuPage from '@/pages/RezultateMateriiMenuPage.vue'
import RezultateGraphicPage from '@/pages/RezultateGraphicPage.vue'

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
      path:'/teste', name:'Teste', component:ClaseMenuPage
    },
    {
      path:'/materii/:codclasa', name:'MateriiMenu', component:MateriiMenuPage
    },

    {
      path:'/teste/:codserie', name:'Test', component:TestPage
    },
    {
      path:'/abonamente', name:'Abonamente', component:AbonamentePage
    },

    { path: '/results', name: 'ResultsPage', component: ResultsPage },

    { path: '/register', name: 'RegisterView', component: RegisterView },

    { path: '/login', name: 'LoginView', component: LoginView },
    {
      path: '/auth/callback',
      name: 'callback',
      component: CallbackView,
    },
    {
      path: '/rezultate/clase', name: 'RezultateClaseMenu', component: RezultateClaseMenuPage
    },
    {
      path: '/rezultate/materii/:codclasa', name: 'RezultateMateriiMenu', component: RezultateMateriiMenuPage
    },
    {
      path: '/rezultate/:codserie', name: 'RezultateGraphicPage', component: RezultateGraphicPage
    },

  ],
})

export default router
