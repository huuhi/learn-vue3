<template>
  <div class="child">
    <h2>字组件</h2>
        <Hello/>
        <p>数字：{{ x }}</p>
    <h3>每日一首诗：{{ content }}</h3>
    <h4 v-beauty="x">我去</h4>
  </div>
</template>



<script setup lang="ts" name="Child">
    import axios from "axios";
    const {data:{content}}= await axios.get('https://v1.jinrishici.com/all.json')
    console.log(content)
</script>

<style scoped>
  .child{
    background-color:rgb(85, 162, 230);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
  }

</style>