import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormularioDieta from '../views/FormularioDieta.vue'
import Aplicacoes from '../views/Aplicacoes.vue'
import FormularioAvaliacaoFisica from '../views/FormularioAvaliacaoFisica.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/aplicacao',
    name: 'aplicacao',
    component: Aplicacoes
  },
  {
    path: '/formulario-avaliacao-fisica',
    name: 'formulario-avaliacao-fisica',
    component: FormularioAvaliacaoFisica
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
