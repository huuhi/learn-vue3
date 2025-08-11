<template>
  <div class="poem">
    <button @click="getPoem">添加古诗</button>
    <ul>
      <li v-for="poem in poems" :key="poem.id">{{ poem.content }}</li>
    </ul>
  </div>
</template>

<script setup>
  import axios from 'axios';
  import { nanoid } from "nanoid";
  import { usePoemStore } from '../store/poem';
  import { storeToRefs } from "pinia";
  const poemStore=usePoemStore()
  let {poems} =storeToRefs(poemStore)

   async function getPoem(){
    const {data}=await axios.get('https://v1.jinrishici.com/all.json')
    const poem= {id:nanoid(),content:data.content}
    poems.value.push(poem)
  }

  poemStore.$subscribe(()=>{
    localStorage.setItem('poems',JSON.stringify(poems.value))
  })

</script>

<style scoped>
.poem{
  background-color: #c2b37c;
    padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  margin: 10px 0;
}


</style>