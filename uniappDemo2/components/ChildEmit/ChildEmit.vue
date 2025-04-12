<template>
	<view>
		<button @click="sendMessage">点击触发事件</button>
	</view>
</template>

<script setup>
const emit = defineEmits(['message'])

const sendMessage = () => {
	emit('message', 'hello from child')
}
</script>

<style lang="scss">

</style>