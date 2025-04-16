<template>
	<view class="demo3">
		老子demo3
		<button @click="goBack">为何不试试返回首页呢？</button>
	</view>
</template>

<script setup>
	function goBack(){
		uni.navigateBack()
	}
	
	uni.setStorageSync('name', '小李')
	uni.setStorageSync('age', '20')
	let myName = uni.getStorageSync('name')
	console.log(myName);
	
	const res = uni.getStorageInfoSync()
	console.log(res);
</script>

<style lang="scss" scoped>
	
</style>
