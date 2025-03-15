<script setup>
import Sidebar from './components/Sidebar.vue';
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'
import Footer from './components/Footer.vue'
import { ElButton } from 'element-plus';

</script>

<template>
<NavBar />
<Home />
<Footer />
<Sidebar/>
<el-button type="primary">主要按钮</el-button>
</template>


<style scoped>
h1 {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
p {
  filter: drop-shadow(0 0 2em #646cffaa);
  color: blueviolet;
}
</style>
