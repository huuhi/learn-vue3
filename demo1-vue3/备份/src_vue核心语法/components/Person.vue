<template>
<div class="person">
  <h2>总数：{{ sum }},十倍：{{ bigSum }}</h2>
  <button @click="addSum">+1</button>
  <hr>
  <img v-for="dog in dogs" :src="dog" alt="">
  <hr>
  <button @click="getDog">再来一只狗</button>
</div>

</template>
<script  lang="ts" setup>
  import useDog from '@/hooks/useDog';
  import useSum from '@/hooks/useSum';
  let {sum,addSum,bigSum}=useSum()
  let {dogs,getDog}=useDog()
</script>


<style scoped>
  .person{
    background-color: cadetblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button{
    margin: 0 10px;
  }
  li{
    margin-bottom: 5px;
    font-size: '20px';
  }
  span{
    color:red;
    font-size: 20px;
  }
  img{
    height: 200px;
    border-radius: 10px;
    margin-right: 10px;
  }
</style>