<template>
	<view class="child">
		<view class="header">
			<slot name='header'>header</slot>
		</view>
		<view class="main">
			<slot>这是默认的</slot>
		</view>
		<view class="floter">floter</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.child{
	.header{
		height: 100px;
		background-color: red;
		}
	.main{
		height: 200px;
		background-color: pink;
	}
	.floter{
		height: 200px;
		background-color: blue;
	}
}
</style>