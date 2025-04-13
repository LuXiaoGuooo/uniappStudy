<template>
	<view>
		<button @click="removeBtn">删除</button>
		<button @click="chooseBtn">选择</button>
	</view>
</template>

<script setup>
	function removeBtn(){
		uni.showModal({
			title:"是否删除",
			content:"我是谁",
			success:res => {
				if(res.confirm) uni.showToast({title: "删除成功"})
			}
		})
	}
	let arrs = ["大学", "高中", "大专"]
	function chooseBtn(){
		uni.showActionSheet({
			itemList:arrs,
			success: res => {
				console.log(arrs[res.tapIndex]);
				console.log(res);
			}
		})
	}
</script>

<style lang="scss" scoped>
	
</style>

