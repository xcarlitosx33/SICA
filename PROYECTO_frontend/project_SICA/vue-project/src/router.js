import { createRouter, createWebHistory } from 'vue-router'

import Login from './views/Login.vue'
import Registro from './views/Registro.vue'
import Recuperar from './views/Recuperar.vue'
import Home from './views/Home.vue'

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/registro',
    component: Registro
  },
  {
    path: '/recuperar',
    component: Recuperar
  },
  {
  path: '/home',
  component: Home
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router