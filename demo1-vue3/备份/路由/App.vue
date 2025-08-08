<template>
  <div class="app">
    <Header />
    <!-- 导航区 -->
     <div class="navigate">
      <RouterLink replace  to="/home" active-class="active">首页</RouterLink>
      <RouterLink replace  :to="{name:'xinwen'}" active-class="active">新闻</RouterLink>
      <RouterLink replace :to="{path:'/about'}" active-class="active">关于</RouterLink>
     </div>
     <!-- 展示区 -->
      <div class="content">
        <router-view></router-view>
      </div>
  </div>
</template>


<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import Header from './components/Header.vue'
</script>

<style scoped>
.app {
  text-align: center;
}
.navigate {
  margin: 20px;
}
.navigate a {
  margin: 0 10px;
  text-decoration: none;
  color: #42b983;
}
.navigate a:hover {
  text-decoration: underline;
}
.content {
  height: 500px;
  margin-top: 20px;
  font-size: 18px;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  /* 内容左对齐 */
  text-align: left;
  background-color: #f9f9f9;
}
.active {
  font-weight: bold;
  color: #42b983;
}
</style>
