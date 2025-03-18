<script setup>

import Banquantishi from "./components/Banquantishi.vue"; // 导入 Banquantishi 组件，用于显示版权提示
import Layout from "./components/Layout.vue"; // 导入 Layout 组件，用于页面布局

import { useRouter } from "vue-router"; // 导入 useRouter，用于获取路由实例
import { ref } from "vue"; // 导入 ref，用于创建响应式变量

const router = useRouter(); // 创建路由实例，用于导航
const activeTab = ref("Shouye"); // 创建响应式变量 activeTab，用于存储当前激活的选项卡，初始值为 'home'
const handleTabClick = (tab) => {// 定义 handleTabClick 函数，用于处理选项卡点击事件
  
  const tabRoutes = {// 创建路由映射对象，存储选项卡名称和对应的路由路径
    
    Shouye: "/", // 'Shouye' 选项卡对应的路由路径为 '/'
    F2: "/F2", // 'calculator' 选项卡对应的路由路径为 '/calculator'
    F1: "/F1", // 'gallery' 选项卡对应的路由路径为 '/gallery'
 

  };
  router.push(tabRoutes[tab.name]); // 根据选项卡名称，跳转到对应的路由路径
};
</script>

<template>
  <Layout :active-tab="activeTab" @tab-click="handleTabClick" />
  <Banquantishi />
  
</template>

<style scoped>
.el-main {
  background-color: #fff; /* 确保背景填充，设置为白色 */
}
.el-footer {
  background-color: #2c3e50; /* 设置页脚背景颜色，与现有背景色匹配 */
  color: #fff; /* 设置页脚文字颜色为白色 */
  text-align: center; /* 设置页脚文字居中对齐 */
}
</style>
