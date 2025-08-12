<template>
  <div class="child">
		<h4>子组件</h4>
		<h4>父给的车：{{ car }}</h4>
		<button @click="sendToy(toy)">给父玩具</button>

  </div>
</template>

<script setup lang="ts" name="Child">
	import {ref} from 'vue'

	defineProps(['car','sendToy'])
	let toy=ref('积木')
	
</script>

<style scoped>
	.child{
		background-color: skyblue;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>
