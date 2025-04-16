<template>
	<view class="demo2">
		<button @click="goDemo2">跳转到demo3</button>
		<button @click="goIndex">跳转到首页</button>
	</view>
</template>

<script setup>
	uni.showNavigationBarLoading()
	
	uni.setNavigationBarTitle({
		title:"老子demo3",
		success: res => {
			console.log(res);
		}
	})
	
	setTimeout(() => {
		uni.hideNavigationBarLoading()
	} , 2000)
	
	uni.setTabBarItem({
		index:1,
		text:"老子变了"
	})
	
	function goDemo2(){
		uni.navigateTo({
			url: "/pages/demo3/demo3"
		})
	}
	function goIndex(){
		uni.reLaunch({
			url:"/pages/index/index"
		})
	}
</script>

<style lang="scss" scoped>
	
</style>
