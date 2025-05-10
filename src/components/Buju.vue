<script setup>
import { ref } from 'vue'; // 导入 ref 来创建响应式状态

import ZuoDaoHang from "./ZuoDaoHang.vue"; // 导入左侧导航栏组件
import DingBuDaoHang  from "./DingBuDaoHang.vue";
import Banquantishi from "./Banquantishi.vue";
// 【新增】创建一个响应式变量来存储全局搜索框的值
const globalSearchQuery = ref('');

// 【新增】一个函数来处理从 Header 组件传来的搜索值更新事件
const handleSearchQueryUpdate = (query) => {
  globalSearchQuery.value = query; // 更新全局搜索值
};


</script>


<template>
  <el-container style="height: 100vh" :class="{ 'sidebar-active': isSidebarVisible }">
      <!-- el-aside 控制左导航宽度 -->
      <el-aside width="160px">
       <ZuoDaoHang :searchQuery="globalSearchQuery"/> 
      </el-aside>

        <!-- el-container控制中右侧的信息，比如按钮和显示页面以及底部版权 -->
        <el-container direction="vertical"width="160px">
        <!-- direction="vertical" 属性明确指定了它内部的子元素要垂直排列 (从上到下)。 -->

              <el-header> 
                <DingBuDaoHang 
                    @update:search-query="handleSearchQueryUpdate"
                />
            
              </el-header>

                    <el-main>
                    <router-view />
                    </el-main>

                    <el-footer height="40px">
                      <Banquantishi />
                    </el-footer>
        </el-container>
  </el-container>
</template>

