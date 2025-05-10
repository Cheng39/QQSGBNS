<template>
  <div class="button-group-flex">
    
    <h2>F1属性</h2>
    
      <p>计算表</p>
      <el-button @click="gotoJingYan" type="">经验</el-button>
      <el-button type="">称号</el-button>
      <el-button type="">恶行</el-button>
      <el-button type="">声望</el-button>
      <el-button type="">官爵</el-button>
      <el-button type="">活力</el-button>
      <el-button type="">武智</el-button>
      <el-button type="">抗性</el-button>
      
   
      <p>咨询类</p>
      <el-button type="WuLi">武力</el-button>
      <el-button type="ZhiLi">智力</el-button>
      <el-button type="RenXing">韧性</el-button>
      <el-button type="HuoLi">活力</el-button>
      <el-button type="">体质</el-button>
      <el-button type="">灵活</el-button>
      <el-button type="">命中</el-button>
  
      <p>抗性表</p>
      <el-button type="KangXingBiao">抗性表</el-button>
      <el-button type="">抗性丸</el-button>
      <el-button type="">奋迅</el-button>
      <el-button type="">妖法</el-button>
      <el-button type="">禁卫</el-button>
      <el-button type="">仙法</el-button>

      <!--<p>按钮测试</p>
      <p>primary：主要按钮，通常用于最重要的操作，例如“提交”或“保存”。它通常具有醒目的颜色，例如蓝色。</p>
      <el-button type="primary">primary</el-button>
      <p>success：成功按钮，表示操作已成功完成，例如“确认”或“完成”。它通常具有绿色。</p>
      <el-button type="success">success</el-button>
      <p>warning：警告按钮，提示用户注意潜在的风险或问题，例如“警告”或“小心”。它通常具有黄色或橙色。</p>
      <el-button type="warning">warning</el-button>
      <p>danger：危险按钮，表示可能导致数据丢失或不可逆操作，例如“删除”或“取消”。它通常具有红色。</p>
      <el-button type="danger">danger</el-button>
      <p>info：信息按钮，提供额外的上下文或提示，例如“更多信息”或“提示”。它通常具有浅蓝色或灰色。</p>
      <el-button type="info">info</el-button>
      <p>text：文本按钮，没有背景或边框，通常用于不重要的操作，例如“查看详情”或“了解更多”。它通常只有文本。</p>
      <el-button type="text">text</el-button>
      -->

    </div> 
   

  

   
  </template>
   <script setup>

   import { useRouter } from 'vue-router';
   const router = useRouter();
   const gotoJingYan = () => {
      router.push('/F1经验');//这个是最上方的路径显示名称可以使用中文
    }
  </script>

  