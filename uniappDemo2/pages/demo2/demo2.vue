<template>
	<view class="demo2">
		<ChildEmit @message="handleMessage"></ChildEmit>
	</view>
</template>

<script setup>
	const handleMessage = (mes) => {
		console.log("收到子组件消息： ", mes);
		uni.showToast({
			title: '老子成功'
		})
	}
</script>

<style lang="scss" scoped>
	
</style>
