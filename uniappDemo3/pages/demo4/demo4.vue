<template>
	<view class="demo4">
		<view class="layout" v-for="(item, index) in arrs" :key="item.id">
			<view class="title">
				标题：{{ item.title }}
			</view>
			<view class="body">
				文本：{{ item.body }}
			</view>
		</view>
	</view>
</template>

<script setup>
     import { ref } from 'vue';

	const arrs = ref([])
	
	function request(){
		uni.showLoading({ title: '加载中...' });
		
	  uni.request({
	    url: "https://jsonplaceholder.typicode.com/posts",
	    data: { id: 3 },
	    success: (res) => {
	      if (res.statusCode === 200) {
	        arrs.value = res.data;
	      } else {
	        uni.showToast({ title: '数据异常', icon: 'none' });
	      }
	    },
	    fail: (err) => {
	      uni.showToast({ title: '请求失败', icon: 'none' });
	      console.error(err);
	    },
	    complete: () => {
	      uni.hideLoading();
	    }
	  });
	}
	
	request()
</script>

<style lang="scss" scoped>
	.layout{
		padding: 30rpx;
		.title{
			
		}
		.body{
			border-bottom :1rpx solid red;  
		}
	}
</style>
