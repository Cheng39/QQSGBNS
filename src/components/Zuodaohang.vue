<template>
 
  <el-aside width="180px"  > <!-- 左侧导航栏，宽度固定为 180px -->
    <el-menu :default-active="$route.path" router
    > <!-- 菜单组件，绑定当前路由路径并支持路由跳转 -->
      <el-menu-item index="/">首页</el-menu-item> <!-- 菜单项，点击跳转到首页路由 -->
      <el-menu-item index="/F1">
        F1属性
        <img src="/img/F1.jpg" alt="F1.jpg" class="menu-item-logo">
      </el-menu-item> <!-- 菜单项，点击跳转到图片页面路由 -->
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
  display: flex; /* el-menu-item 通常已经是 flex 容器 */
  align-items: center; /* 垂直居中文本和图片 */
  justify-content: flex-start; /* 或 flex-start，取决于您希望文本和图片如何分布空间 */
  
  /* === 添加或修改这里的字体样式 === */
  font-weight: bold; /* 例如：让字体加粗 */
  font-size: 18px; /* 例如：设置字体大小为 15像素 */
  
  
  color: #ff9204; /* 例如：修改字体颜色为黄色 */
 /* 添加文字阴影 */
  text-shadow: -1px -1px 0 #616060, 1px -1px 0 #616060, -1px 1px 0 #616060, 1px 1px 0 #616060;
  text-shadow: 1px 1px  rgba(245, 9, 9, 0.5);

   /* === 添加这里的样式来加黑色边框 === */
  
  border-radius: 15px;
  border: 1px solid #3a3a3a; /* 另一种写黑色 */

  /* === 可选：如果边框紧贴着文字，可以增加内边距 === */
  padding: 3 22px; /* 示例：上下内边距为 0，左右内边距为 15px */
  /* 或者只调整左右内边距，保留 Element Plus 默认的上下内边距 */

  
}

.menu-item-logo {
  border-radius: 8px;
  border: 1px solid #fff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);/* 会给图片添加阴影。四个值分别是：水平偏移、垂直偏移、模糊半径、阴影颜色（包括透明度）。*/
  width: 60px; /* 设置图片宽度 */
  height: 30px; /* 设置图片高度 */
  margin-left: 14px; /* 在图片左侧添加一些间距，与文本分开 */
  /* 其他样式，例如 vertical-align 如果需要微调垂直对齐 */
}

.el-menu {
  background-color: #d1d1d1; /* 示例：一种中度的灰色 */
  /* 您可以根据喜好调整灰色的深浅 */
}


</style>