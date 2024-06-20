import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/tugas1', name: 'Tugas1', component: () => import('../views/Tugas1.vue') },
  { path: '/tugas2', name: 'Tugas2', component: () => import('../views/Tugas2.vue') },
  { path: '/tugas3', name: 'Tugas3', component: () => import('../views/Tugas3.vue') },
  { path: '/tugas4', name: 'Tugas4', component: () => import('../views/Tugas4.vue') },
  { path: '/tugas5', name: 'Tugas5', component: () => import('../views/Tugas5.vue') },
  { path: '/tugas6', name: 'Tugas6', component: () => import('../views/Tugas6.vue') },
  { path: '/tugas7', name: 'Tugas7', component: () => import('../views/Tugas7.vue') },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
