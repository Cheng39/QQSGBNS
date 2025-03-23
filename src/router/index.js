import { createRouter, createWebHistory } from 'vue-router'
import Shouye from '../views/ShouYe.vue'
import F1 from '../views/F1.vue'
import F2 from '../views/F2.vue'
import F3 from '../views/F3.vue'
import F4 from '../views/F4.vue'
import F5 from '../views/F5.vue'
import F6 from '../views/F6.vue'
import F7 from '../views/F7.vue'
import F8 from '../views/F8.vue'
import F9 from '../views/F9.vue'
import F10 from '../views/F10.vue'
import F11 from '../views/F11.vue'
import F12 from '../views/F12.vue'



const routes = [
  { path: '/', component: Shouye },
  { path: '/F1', component: F1 },
  { path: '/F2', component: F2 },
  { path: '/F3', component: F3 },
  { path: '/F4', component: F4 },
  { path: '/F5', component: F5 },
  { path: '/F6', component: F6 },
  { path: '/F7', component: F7 },
  { path: '/F8', component: F8 },
  { path: '/F9', component: F9 },
  { path: '/F10', component: F10 },
  { path: '/F11', component: F11 },
  { path: '/F12', component: F12 },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router