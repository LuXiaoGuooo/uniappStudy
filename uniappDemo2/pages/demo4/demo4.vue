<template>
	<view class="demo4">
		{{name}}已经{{age}}岁了
		<scroll-view scroll-y="true" ref='scoll'>
			<view></view>
		</scroll-view>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	import { onLoad,onReady,onShow } from '@dcloudio/uni-app'
	const name = ref('小刘')
	const age = ref(1)
	const scoll = ref(null)
	onLoad((e) => {
		console.log("onload函数");
		console.log(e);
		name.value = e.name
		age.value = e.age
	})
	onShow(() => {
		console.log("onShow");
	})
	onReady(() => {
		console.log(scoll.value);
	})
</script>

<style lang="scss" scoped>
	
</style>
