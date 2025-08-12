<template>
  <div class="app">
    <h1>App组件</h1>
    <Suspense>
      <template #default>
        <Child/>
      </template>
      <template #fallback>
        <div class="child">
          <h2>加载中</h2>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts" name="App">
  import { Suspense } from "vue";
 import Child from "@/Child.vue";
</script>

<style scoped>

  .app{
    background-color:aquamarine;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
  }
</style>