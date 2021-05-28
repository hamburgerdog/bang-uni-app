<template>
	<view class="box">
		<uni-icons :type="bangButton.icon" color="#272343" size="30"></uni-icons>
		<p>{{bangButton.name}}</p>
	</view>
</template>

<script>
	export default{
		props:["bangButton"]
	}
</script>

<style lang="scss" scoped>
	.box{
		display: flex;
		flex-direction: column;
		
		p{
			padding: 0;
			font-size: 36rpx;
			color: $element-headline;
			line-height: 2;
		}
	}
</style>
