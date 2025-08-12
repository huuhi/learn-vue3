<template>
  <div class="father">
    <h1>父组件</h1>
    <!-- <input type="text" v-model="username"> -->
    <h2>{{ username }}</h2>
    <h2>{{ password }}</h2>
    <XiaoHuInput v-model:username="username" v-model:psw="password"/>
    <!-- <XiaoHuInput :modelValue="username" @update:modelValue="username=$event"/> -->

  </div>
</template>

<script setup lang="ts" name="Father">
  import XiaoHuInput from "@/pages/04_v-model/XiaoHuInput.vue";
  import { ref } from "vue";
  let username=ref('赵敏')
  let password=ref<string>('123')

</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>
