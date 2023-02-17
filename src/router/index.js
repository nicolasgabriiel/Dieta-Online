import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrescricaoComponent from '../components/PrescricaoComponent.vue'


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
    path: '/prescricao',
    name: 'prescricao',
    component: PrescricaoComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
