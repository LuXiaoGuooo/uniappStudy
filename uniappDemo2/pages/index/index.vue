<template>
	<view class="content">
		<userInfo v-for="(item, index) in userinfo" :obj="item"></userInfo>
	</view>
</template>

<script setup>
import { ref } from 'vue'
const userinfo = ref([
	{ name: '小栗', userImage :'../../static/1.jpg' },
	{ name: '小张', userImage :'../../static/2.jpeg' },
	{ name: '小张', userImage :'../../static/3.jpeg' },
])
</script>

<style>
</style>
