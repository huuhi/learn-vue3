<template>
  <div class="count">
    <h1>当前求和为：{{ sum }},放大十倍：{{ bigSum }}</h1>
    <h1>欢迎来到：{{ school }} ,大写：{{ upperSchool }}</h1>
    <h2>{{ school }}在{{ address }}</h2>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="addSum">加</button>
    <button @click="subSum">减</button>
  </div>
</template>

<script setup lang="ts">
    import {ref,toRefs} from 'vue'
    import { useCountStore  } from "../store/count";
    import { storeToRefs } from "pinia";
    const countStore= useCountStore()
    let {sum,school,address,bigSum,upperSchool}=storeToRefs(countStore)
    let n=ref(1)

    function addSum(){
      sum.value+=n.value

      // 批量修改：
      // countStore.$patch({
      //   sum:199,
      //   school:'清华',
      //   address:'北京'
      // })
      countStore.increment(n.value)
    }
    function subSum(){
      sum.value-=n.value
    }
</script>

<style scoped>
select,button{
  margin:  0 20px;
  height: 30px;

}
.count {
  background: #42b983;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}


</style>