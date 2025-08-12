<template>
  <div class="father">
		<h3>父组件</h3>
		<p v-show="toy">儿的玩具：{{ toy }}</p>

		<Child :car='car' :sendToy="getToy"/>
  </div>
</template>

<script setup lang="ts" name="Father">
	import Child from './Child.vue'
	import {ref} from 'vue'
	// 数据
	let car=ref('小米su7')

	defineProps(['car'])
	let toy=ref('')
	function getToy(value:string){
		toy.value=value
	}
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>