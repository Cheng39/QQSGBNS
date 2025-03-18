<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import Layout from './components/Layout.vue'

import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const activeTab = ref('home')
const handleTabClick = (tab) => {
  const tabRoutes = {
    home: '/',
    calculator: '/calculator',
    gallery: '/gallery',
    summary: '/summary'
  }
  router.push(tabRoutes[tab.name])
}
</script>

<template>
   <Layout :active-tab="activeTab" @tab-click="handleTabClick" /><!-- 使用 Layout 组件，传递 activeTab 和 tab-click 事件 -->
</template>

<style scoped>
.el-main {
  background-color: #fff; /* 确保背景填充 */
}
.el-footer {
  background-color: #2c3e50; /* 与现有背景色匹配 */
  color: #fff;
  text-align: center;
}
</style>