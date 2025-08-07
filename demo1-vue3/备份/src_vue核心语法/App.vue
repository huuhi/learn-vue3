<template>
    <Person v-if="isShow"/>
</template>


<script lang="ts" setup>
  import Person from './components/Person.vue';
  let isShow:boolean=true
</script>
