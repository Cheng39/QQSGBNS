<template>
  <el-container style="height: 100vh;"> <!-- 主容器，设置高度为视口高度 -->
    <Sidebar /> <!-- 左侧导航栏，使用 Sidebar 组件 -->
    <el-container> <!-- 中间内容区域，包含头部和主内容 -->
      <el-header> <!-- 顶部头部区域 -->
        <el-tabs v-model="activeTab" @tab-click="handleTabClick"> <!-- 选项卡组件，绑定当前激活的选项卡并处理点击事件 -->
          <el-tab-pane label="首页" name="home" /> <!-- 选项卡面板，标签为“首页”，名称为 home -->
          <el-tab-pane label="计算" name="calculator" /> <!-- 选项卡面板，标签为“计算”，名称为 calculator -->
          <el-tab-pane label="图片" name="gallery" /> <!-- 选项卡面板，标签为“图片”，名称为 gallery -->
          <el-tab-pane label="汇总" name="summary" /> <!-- 选项卡面板，标签为“汇总”，名称为 summary -->
        </el-tabs>
      </el-header>
      <el-main><router-view /></el-main> <!-- 主内容区域，动态渲染路由对应的视图 -->
    </el-container>
    <el-aside width="200px"> <!-- 右侧导航栏，宽度固定为 200px -->
      <el-menu> <!-- 菜单组件，显示占位内容 -->
        <el-menu-item>快捷链接</el-menu-item> <!-- 菜单项，显示“快捷链接”文本 -->
      </el-menu>
    </el-aside>
  </el-container>
</template>

<script setup>
  import Sidebar from './Sidebar.vue' //<!-- 导入 Sidebar 组件，管理左侧导航栏 -->
  import { ref } from 'vue' // 导入 ref，用于定义响应式变量
  import { useRouter } from 'vue-router' // 导入 useRouter，用于获取路由实例
  
  const router = useRouter() // 创建路由实例，用于导航
  const activeTab = ref('home') // 定义当前激活的选项卡，初始值为 'home'
  const handleTabClick = (tab) => { // 处理选项卡点击事件，根据选项卡名称跳转对应路由
    const tabRoutes = { home: '/', calculator: '/calculator', gallery: '/gallery', summary: '/summary' } // 定义路由映射对象，存储每个选项卡对应的路由路径
    router.push(tabRoutes[tab.name]) // 根据选项卡名称跳转到对应路由
  }
</script>