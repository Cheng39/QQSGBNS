<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
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
  <el-container style="height: 100vh;">
    <!-- 左侧导航栏 -->
    <el-aside width="200px">
      <el-menu :default-active="$route.path" router>
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/calculator">计算</el-menu-item>
        <el-menu-item index="/gallery">图片</el-menu-item>
        <el-menu-item index="/summary">汇总</el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <!-- 顶部导航/选项卡 -->
      <el-header style="padding: 0;">
        <el-tabs v-model="activeTab" @tab-click="handleTabClick">
          <el-tab-pane label="首页" name="home" />
          <el-tab-pane label="计算" name="calculator" />
          <el-tab-pane label="图片" name="gallery" />
          <el-tab-pane label="汇总" name="summary" />
        </el-tabs>
      </el-header>

      <!-- 主内容区域 -->
      <el-main style="padding: 20px; overflow: auto;">
        <router-view />
      </el-main>

      <!-- 底部 -->
      <el-footer style="height: 60px; line-height: 60px; padding: 0;">
        <Footer />
      </el-footer>
    </el-container>

    <!-- 右侧导航栏 -->
    <el-aside width="200px">
      <el-menu>
        <el-menu-item>快捷链接</el-menu-item>
      </el-menu>
    </el-aside>
  </el-container>
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