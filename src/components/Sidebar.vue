<script setup>
import { ref } from 'vue'; // 引入 ref() 变量，管理状态 (import: 导入)

const isOpen = ref(true); // 控制侧边栏是否显示，默认展开 (ref: 响应式变量)

// 切换侧边栏的显示状态 (toggle: 切换)
const toggleSidebar = () => {
  isOpen.value = !isOpen.value; // 取反当前状态，实现展开/折叠效果
};
</script>

<template>
  <!-- 侧边栏的整体容器，包含侧边栏和折叠按钮 -->
  <div class="sidebar-container">
    <!-- 侧边栏 (sidebar) ，根据 isOpen 控制是否展开 -->
    <div class="sidebar" :class="{ 'collapsed': !isOpen }">
      <button class="sidebar-btn">F1状态</button>
      <button class="sidebar-btn">F2面板</button>
      <button class="sidebar-btn">F3技能</button>
      <button class="sidebar-btn">F4状态</button>
      <button class="sidebar-btn">F5副本</button>
      <button class="sidebar-btn">F6子女</button>
      <button class="sidebar-btn">F7家园</button>
      <button class="sidebar-btn">F8灵兽</button>
      <button class="sidebar-btn">F9经络</button>
      <button class="sidebar-btn">F10元神</button>
      <button class="sidebar-btn">F11军团</button>
    </div>
    
    <!-- 折叠/展开 按钮 -->
    <button class="toggle-btn" @click="toggleSidebar">
      {{ isOpen ? '❮' : '❯' }} <!-- 根据 isOpen 状态显示不同箭头符号 -->
    </button>
  </div>
</template>

<style scoped>
/* 侧边栏的容器，保证布局合理 (container: 容器) */
.sidebar-container {
  position: fixed; /* 固定在屏幕上 (fixed: 固定) */
  right: 0; /* 靠右侧 (right: 右) */
  top: 30px; /* 距离顶部50px (top: 顶部) */
  display: flex; /* 使用 flex 布局 (display: 显示方式) */
  align-items: center; /* 让子元素垂直居中 (align-items: 对齐方式) */
}

/* 侧边栏样式 (sidebar: 侧边栏) */
.sidebar {
  position: fixed; /* 固定定位 (position: 位置) */
  right: 0; /* 贴在右侧 (right: 右) */
  top: 20px; /* 顶部间距20px */
  width: 100px; /* 宽度100px */
  height: 100vh; /* 侧边栏高度占满整个屏幕 (100vh: 100% 视口高度) */
  color: white; /* 文字颜色白色 */
  display: flex; /* 启用flex布局 */
  flex-direction: column; /* 让子元素垂直排列 */
  align-items: center; /* 让子元素水平居中 */
  padding-top: 50px; /* 顶部内边距50px */
  /* border-left: 2px solid #555; 添加左边框 (border: 边框) */
  transition: transform 0.4s ease-in-out; /* 添加平滑过渡动画 */
}

/* 侧边栏收起时的样式 */
.sidebar.collapsed {
  transform: translateX(100%); /* 侧边栏向右移动，使其隐藏 */
}

/* 侧边栏按钮样式 (button: 按钮) */
.sidebar-btn {
  width: 80px; /* 按钮宽度 */
  height: 40px; /* 按钮高度 */
  margin: 6% 0; /* 按钮间距 */
  padding: 5px; /* 按钮内边距 */
  text-align: center; /* 文字居中 */
  font-size: 16px; /* 文字大小 */
  font-weight: bold; /* 文字加粗 */
  color: white; /* 文字颜色白色 */
  background: linear-gradient(to bottom,#ffcc33, #ff9900); /* 渐变背景 */
  border-radius: 30px; /* 圆角 */
  border: 1px solid rgba(255, 165, 0, 0.6); /* 外边框 */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* 阴影效果 */
  cursor: pointer; /* 鼠标指针样式 */
  transition: all 0.3s ease-in-out;
}

/* 悬停效果 (hover: 悬停) */
.sidebar-btn:hover {
  background: linear-gradient(to bottom, #ffcc00, #ff9900); /* 变亮 */
  transform: scale(1.25); /* 放大 25% */
  transition: all 0.35s ease-in-out; /* 过渡动画 */
}

/* 折叠/展开按钮 (toggle button) */
.toggle-btn {
  position: absolute; /* 绝对定位 (absolute: 绝对) */
  left: -90px; /* 让按钮出现在侧边栏外部 */
  top: 80%; /* 按钮位于侧边栏的垂直中心 */
  transform: translateY(-50%); /* 让按钮精确居中 */
  width: 90px; /* 按钮的宽度 */
  height: 50px; /* 按钮的高度 */
  background: #cc0000; /* 按钮背景颜色 */
  color: white; /* 按钮文本颜色 */
  font-size: 200%; /* 按钮文本大小 */
  font-weight: bold; /* 字体加粗 */
  border: 2px solid #050505; /* 有边框 */
  border-radius: 15px 0 0 15px; /* 左侧圆角，右侧直角 */
  cursor: pointer; /* 鼠标悬停时变成手型 */
  transition: background 0.3s ease-in-out; /* 背景颜色渐变动画 */
}

/* 折叠/展开按钮悬停效果 */
.toggle-btn:hover {
  background: #e96767; /* 鼠标悬停时变亮 */
}
</style>
