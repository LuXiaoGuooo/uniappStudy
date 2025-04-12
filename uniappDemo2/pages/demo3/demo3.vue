<template>
	<view class="demo3">
		<DemoChild ref='name'></DemoChild>
		<button @click="addCount">增加</button>
		<navigator url="/pages/demo4/demo4?name=小李&age=19">跳转到demo4</navigator>
	</view>
</template>

<script setup>
	import {onMounted, ref} from 'vue'
	const name = ref(null)
	
	console.log(name.value);
	const addCount = () => {
		name.value.addCount()
	}
	onMounted(() => {
		console.log(name.value);
	})
</script>

<style lang="scss" scoped>
	
</style>
