<template>
	<view class="out">
		子组件: {{ count }}
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	const count = ref(100)
	const addCount = () => {
		count.value++
	}
	defineExpose({
		count,
		str:'111',
		addCount
	})
</script>

<style lang="scss">

</style>