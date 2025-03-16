import { createRouter, createWebHistory } from 'vue-router';
import ElementPlus from 'element-plus';
import { createApp } from 'vue';
import App from './App.vue';
import Home from './components/Home.vue';
import 'element-plus/dist/index.css'

const routes = [
  { path: '/', component: Home }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(ElementPlus).mount('#app');