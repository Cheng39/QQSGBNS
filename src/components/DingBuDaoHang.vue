<script setup>
import { ref, watch, defineEmits } from 'vue'; // 【新增】导入 ref, watch, defineEmits
// 【新增】导入 Element Plus 的图标组件，如果搜索框有图标
// import { Search } from '@element-plus/icons-vue';

// 【新增】定义可以触发的事件
const emits = defineEmits(['update:search-query']); // 定义一个名为 update:search-query 的事件

// 【新增】创建一个响应式变量来存储搜索框的输入值
const searchQuery = ref('');

// 【新增】监听 searchQuery 的变化，并在变化时触发事件
watch(searchQuery, (newValue) => {
  emits('update:search-query', newValue); // 当 searchQuery 变化时，触发事件并传递新值
});

// 【移除】如果您之前有 isSidebarVisible 和 onToggleClick 的 props 定义，现在不需要了
// import { defineProps } from 'vue';
// const props = defineProps({ isSidebarVisible: Boolean, onToggleClick: Function });

</script>

<template>
  <div class="app-header"> 
    <div class="header-content">
       
      <el-input
        placeholder="全局搜索"
        style="width: 150px; margin-right: 20px;"
        prefix-icon="el-icon-search"
      ></el-input>

      <div class="header-buttons">
        <el-button type="primary">登录</el-button>
        <el-button type="default">注册</el-button>
        <el-button type="danger">登出</el-button>
        <el-button type="info">刷新</el-button>
      </div>
    </div>
  </div>
  
    
     
     
 
</template>



<style scoped>

/* === 将之前写在 buju.vue 中关于头部内容的样式移到这里 === */
/* 为 Header 组件的根元素添加样式，确保它占满 el-header 的空间 */
.app-header {
    
    height: 100%; /* 让 Header 组件占满父容器 el-header 的高度 */
    /* === 添加这里的背景颜色 === */
    background-color: #e9eef3; /* 示例：浅灰色背景 */
    
    /*  /* 如果需要，可以给根元素也设置 Flexbox */
    /* align-items: center; */
}

.header-content {
    
  display: flex; /* 启用 Flexbox */
  align-items: center; /* 垂直居中子项 */
  justify-content: flex-start; /* 子项分散对齐 */
  height: 100%; /* 让 Flex 容器占满 Header 组件的高度 */
  
}

.header-buttons .el-button {
    
    margin-left: 10px; /* 给按钮之间添加左侧间距 */
}
.header-content .el-input {
    margin-right: 10px; /* 示例：在搜索栏右侧添加 10px 间距 */
    
}

/* 【新增】为搜索框添加样式 */
.global-search-input {
  width: 150px; /* 示例宽度 */
  margin-right: 20px; /* 右侧间距 */
}



</style>