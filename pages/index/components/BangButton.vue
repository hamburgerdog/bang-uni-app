<template>
	<view class="box" :style="{color:bangButton.textcolor}">
		<uni-icons :type="bangButton.icon" :color="bangButton.color" size="30"></uni-icons>
		<p>{{bangButton.name}}</p>
	</view>
</template>

<script>
	export default {
		props: ["bangButton"]
	}
</script>

<style lang="scss" scoped>
	.box {
		display: flex;
		flex-direction: column;

		p {
			padding: 0;
			font-size: 36rpx;
			line-height: 2;
		}
	}
</style>
