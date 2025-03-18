<template>
  <el-aside width="180px"> <!-- 左侧导航栏，宽度固定为 180px -->
    <el-menu :default-active="$route.path" router> <!-- 菜单组件，绑定当前路由路径并支持路由跳转 -->
      <el-menu-item index="/">首页</el-menu-item> <!-- 菜单项，点击跳转到首页路由 -->
      <el-menu-item index="/calculator">计算</el-menu-item> <!-- 菜单项，点击跳转到计算页面路由 -->
      <el-menu-item index="/gallery">图片</el-menu-item> <!-- 菜单项，点击跳转到图片页面路由 -->
      <el-menu-item index="/summary">汇总</el-menu-item> <!-- 菜单项，点击跳转到汇总页面路由 -->
    </el-menu>
  </el-aside>
</template>

<script setup>
import { useRoute } from 'vue-router' // <!-- 导入 useRoute，用于获取当前路由路径 -->
const route = useRoute() //<!-- 获取当前路由实例，用于高亮当前菜单项 -->
</script>

<style scoped>
.el-aside { background-color: #f5f7fa; height: 100%; }  /* <!-- 左侧导航栏样式，设置背景色和高度填充 -->*/
.el-menu { background-color: #f5f7fa; height: 100%; }/* <!-- 菜单样式，设置背景色和高度填充 -->*/
</style>