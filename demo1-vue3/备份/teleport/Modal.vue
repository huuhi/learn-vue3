<template>
  <button @click="showAlert=true" v-show="!showAlert">弹窗</button>
  <!-- 写选择器 -->
  <teleport to='body'>
    <div class="modal" v-show="showAlert">
      <h2>弹窗的标题</h2>
      <p>弹窗的内容</p>
      <button @click="showAlert=false">关闭弹窗</button>
    </div>
  </teleport>
</template>

<script setup lang="ts" name="Modal">
  import { ref } from "vue";
  let showAlert=ref<boolean>(false)

</script>

<style scoped>
  .modal {
    width: 200px;
    height: 150px;
    background-color: skyblue;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 0 5px;
    text-align: center;
    position: fixed;
    left: 50%;
    margin-left: -100px;
    top: 20px;
  }
</style>