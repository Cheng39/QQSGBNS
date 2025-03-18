<script setup>

import Banquantishi from "./components/Banquantishi.vue"; // 导入 Banquantishi 组件，用于显示版权提示
import Buju from "./components/Buju.vue"; // 导入 Layout 组件，用于页面布局



</script>

<template>
  <Buju>
    <router-view />
  </Buju>
  
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
