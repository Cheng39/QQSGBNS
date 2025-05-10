<script setup>

import Buju from "./components/BuJu.vue"; // 导入 Layout 组件，用于页面布局




</script>

<template>
  <Buju>
    </Buju>

  </template>

<style scoped>
/* 这里的样式应该主要控制 App.vue 自身的布局或全局影响的样式 */
/* 例如，移除 body 或 #app 的全局居中样式 */

/* 如果 .el-main 和 .el-footer 的样式只影响 buju 内部的布局，
   建议将它们移到 buju.vue 的 <style scoped> 中 */

.el-main {
  /* background-color: #532d2d; */
  text-align: left;
  padding: 20px;
  overflow-y: auto;
}

.el-footer {
  /* background-color: #2c3e50; */
  /* color: #fff; */
  text-align: center;
  padding: 10px;
}

</style>