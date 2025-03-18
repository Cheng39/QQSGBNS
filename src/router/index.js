import { createRouter, createWebHistory } from 'vue-router'
import Shouye from '../views/Shouye.vue'
import F2 from '../views/F2.vue'
import F1 from '../views/F1.vue'


const routes = [
  { path: '/', component: Shouye },
  { path: '/F2', component: F2 },
  { path: '/F1', component: F1 },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router