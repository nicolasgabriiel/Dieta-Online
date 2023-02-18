import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormularioDieta from '../views/FormularioDieta.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/aplicacao',
    name: 'aplicacao',
    component: () => import(/* webpackChunkName: "about" */ '../views/Aplicacoes.vue')
  },
  {
    path: '/formulario-dieta',
    name: 'formularioDieta',
    component: FormularioDieta
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
