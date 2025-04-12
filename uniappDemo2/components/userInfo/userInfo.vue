<template>
	<view class="userInfo">
		<image :src="obj.userImage" ></image>
		<view class="title" >
			{{ obj.name }}
		</view>
	</view>
</template>

<script setup>
import { computed } from 'vue';

// const props = defineProps(['userName','userImage'])
// const props = defineProps({
// 	userName: {
// 		type:String,
// 		default: "小李"
// 	},
// 	userImage:{
// 		type:String,
// 		default:'../../static/logo.png'
// 	}
// })
defineProps({
	obj:{
		type:Object,
		default(){
			return { name:'没有被定义', userImage:'../../static.logo.png'}
		}
	}
})
console.log(props.userImage);
const myName = computed(() => props.userName + '@')
</script>

<style lang="scss">
.userInfo{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	image{
		width: 100px;
		height: 100px;
	.title{
		display: flex;
		display: inline-block;
		justify-content: center;
	}
	}
}
</style>