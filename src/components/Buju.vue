<template>
  <el-container style="height: 200vh;"> <!-- 主容器，设置高度为视口高度 -->
    <Zuodaohang /> <!-- 左侧导航栏，使用 Sidebar 组件 -->
    <el-container> <!-- 中间内容区域，包含头部和主内容 -->
      <el-header> <!-- 顶部头部区域 -->
        <el-main>
        <router-view />
      </el-main> <!-- 主内容区域，动态渲染路由对应的视图 -->
      </el-header>
      
    </el-container>

    <el-aside width="50px"> <!-- 右侧导航栏，宽度固定为 200px -->

      <el-footer>
        <Banquantishi />
      </el-footer>

    </el-aside>
  </el-container>
</template>

<script setup>
  import Zuodaohang from './Zuodaohang.vue'
  import { ref } from 'vue' // 导入 ref，用于定义响应式变量
  import { useRouter } from 'vue-router' // 导入 useRouter，用于获取路由实例

  
  const router = useRouter() // 创建路由实例，用于导航
  const activeTab = ref('Shouye') // 定义当前激活的选项卡，初始值为 'home'
  const handleTabClick = (tab) => { // 处理选项卡点击事件，根据选项卡名称跳转对应路由
    const tabRoutes = { Shouye: '/', F1: '/F1', F2: '/F2',  } // 定义路由映射对象，存储每个选项卡对应的路由路径
    router.push(tabRoutes[tab.name]) // 根据选项卡名称跳转到对应路由
  }
</script>