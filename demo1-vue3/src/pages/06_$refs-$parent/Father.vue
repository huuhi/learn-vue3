<template>
	<div class="father">
		<h3>父组件</h3>
		<h4>房产：{{ house }}</h4>
		<button @click="changeToy">修改c1的玩具</button>
		<button @click="changePhone">修改c2的手机</button>
		<button @click="getAllChild($refs)">获取所有儿子</button>
		<Child1 ref="c1"/>
		<Child2 ref="c2"/>
	</div>
</template>

<script setup lang="ts" name="Father">
import Child1 from './Child1.vue'
	import Child2 from './Child2.vue'
	import { ref } from "vue";
	let c1=ref()
	let c2=ref()

	let house=ref(10)
	

	function changeToy(){
		c1.value.toy='暗黑手办'
	}
	function changePhone(){
		c2.value.phone='小米手机'
	}
	function getAllChild(val:{[key:string]:any}){
		for (let key in val) {
			console.log(val[key])
		}
	}
	defineExpose({house})
</script>

<style scoped>
	.father {
		background-color: rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}

	.father button {
		margin-bottom: 10px;
		margin-left: 10px;
	}
</style>

