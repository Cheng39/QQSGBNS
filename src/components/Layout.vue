<template>
    <el-container style="height: 100vh;">
      <el-aside width="200px">
        <el-menu :default-active="$route.path" router>
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/calculator">计算</el-menu-item>
          <el-menu-item index="/gallery">图片</el-menu-item>
          <el-menu-item index="/summary">汇总</el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-tabs v-model="activeTab" @tab-click="handleTabClick">
            <el-tab-pane label="首页" name="home" />
            <el-tab-pane label="计算" name="calculator" />
            <el-tab-pane label="图片" name="gallery" />
            <el-tab-pane label="汇总" name="summary" />
          </el-tabs>
        </el-header>
        <el-main><router-view /></el-main>
      </el-container>
      <el-aside width="200px">
        <el-menu>
          <el-menu-item>快捷链接</el-menu-item>
        </el-menu>
      </el-aside>
    </el-container>
  </template>
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const activeTab = ref('home')
  
  const handleTabClick = (tab) => {
    const tabRoutes = { home: '/', calculator: '/calculator', gallery: '/gallery', summary: '/summary' }
    router.push(tabRoutes[tab.name])
  }
  </script>