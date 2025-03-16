import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Calculator from '../views/Calculator.vue'
import Gallery from '../views/Gallery.vue'
import Summary from '../views/Summary.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/calculator', component: Calculator },
  { path: '/gallery', component: Gallery },
  { path: '/summary', component: Summary }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router