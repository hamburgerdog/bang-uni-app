<template>
	<view class="page-title">
		<p>{{title}}</p>
	</view>
</template>

<script>
	export default {
		props: ['title']
	}
</script>

<style lang="scss">
	.page-title {
		padding: 10rpx;
		font-size: 40rpx;
		color: $element-headline;
		line-height: 1.8;
		text-align: center;
		background-color: #fff;
	}
</style>
