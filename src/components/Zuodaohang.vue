<template>
 
  <el-aside width="15%"  > <!-- 左侧导航栏，宽度固定为 180px -->
    <el-menu :default-active="$route.path" router
    > <!-- 菜单组件，绑定当前路由路径并支持路由跳转 -->
      <el-menu-item index="/">首页</el-menu-item> <!-- 菜单项，点击跳转到首页路由 -->
      <el-menu-item index="/F1">F1属性</el-menu-item> <!-- 菜单项，点击跳转到图片页面路由 -->
      <el-menu-item index="/F2">F2物品</el-menu-item> <!-- 菜单项，点击跳转到计算页面路由 -->
      <el-menu-item index="/F3">F3技能</el-menu-item> 
      <el-menu-item index="/F4">F4状态</el-menu-item> 
      <el-menu-item index="/F5">F5副本</el-menu-item> 
      <el-menu-item index="/F6">F6子女</el-menu-item> 
      <el-menu-item index="/F7">F7经络</el-menu-item> 
      <el-menu-item index="/F8">F8天书</el-menu-item> 
      <el-menu-item index="/F9">F9灵兽</el-menu-item> 
      <el-menu-item index="/F10">F10元神</el-menu-item> 
      <el-menu-item index="/F11">F11工资</el-menu-item> 
      <el-menu-item index="/F12">F12合成</el-menu-item> 
      <el-menu-item index="/F13">F13军团</el-menu-item> 
      <el-menu-item index="/F14">F14日常</el-menu-item> 
      <el-menu-item index="/F15">F15活动</el-menu-item> 
      <el-menu-item index="/F16">F16更新</el-menu-item> 
      <el-menu-item index="/F17">F17家园</el-menu-item> 
   
    </el-menu>
  </el-aside>

</template>

<script setup>
</script>

<style scoped>

.el-menu-item{

  background-color: #3478ff; /* 设置菜单背景颜色 */
  color: #fff; /* 设置菜单文字颜色 */
}
</style>