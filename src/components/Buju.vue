<script setup>

import ZuoDaoHang from "./ZuoDaoHang.vue"; // 导入左侧导航栏组件
import DingBuDaoHang  from "./DingBuDaoHang.vue";
import Banquantishi from "./Banquantishi.vue";



</script>


<template>
  <el-container style="height: 100vh">
      <!-- el-aside 控制左导航宽度 -->
      <el-aside width="160px">
       <ZuoDaoHang /> 
      </el-aside>

        <!-- el-container控制中右侧的信息，比如按钮和显示页面以及底部版权 -->
        <el-container direction="vertical"width="160px">
        <!-- direction="vertical" 属性明确指定了它内部的子元素要垂直排列 (从上到下)。 -->

              <el-header> 
                <DingBuDaoHang />
            
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

