<template>
	
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
</script>

<style lang="scss" scoped>
	
</style>
