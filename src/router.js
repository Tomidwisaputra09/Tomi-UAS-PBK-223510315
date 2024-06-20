// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import WeatherWidget from './components/Weather.vue';

const routes = [
  { path: '/', component: WeatherWidget },
  { path: '/tugas1', name: 'Tugas1', component: () => window.location.href = 'https://tomidwis-project-cv.vercel.app/' },
  { path: '/tugas2', name: 'Tugas2', component: () => window.location.href = 'https://tomi-tugas2-pbk.vercel.app/' },
  { path: '/tugas3', name: 'Tugas3', component: () => window.location.href = 'https://tomi-tugas3-pbk.vercel.app/' },
  { path: '/tugas4', name: 'Tugas4', component: () => window.location.href = 'https://tomi-tugas4-pbk.vercel.app/' },
  { path: '/tugas5', name: 'Tugas5', component: () => window.location.href = 'https://tomi-tugas5-pbk.vercel.app/' },
  { path: '/tugas6', name: 'Tugas6', component: () => window.location.href = 'https://tomi-tugas6-pbk-223510315.vercel.app/' },
  { path: '/tugas7', name: 'Tugas7', component: () => window.location.href = 'https://tomi-tugas7.vercel.app/' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
