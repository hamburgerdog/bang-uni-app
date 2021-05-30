<template>
	<view class="item-box">
		<view class="item-text">
			<uni-icons :type="item.icon" color="#46a3ff" size="24"></uni-icons>
			<p>{{item.name}}</p>
		</view>
		<uni-icons type="arrowright" color="#46a3ff" size="24"></uni-icons>
	</view>
</template>

<script>
	export default {
		props:['item'],
	}
</script>

<style lang="scss" scoped>
	.item-box {
		overflow: hidden;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		height: 100rpx;
		padding: 0 36rpx;
		background-color: #fff;
		border-radius: 40rpx;
		box-shadow:
			0 3px 5.3px rgba(0, 0, 0, 0.008),
			0 10.1px 17.9px rgba(0, 0, 0, 0.01),
			0 45px 80px rgba(0, 0, 0, 0.04);
		margin-top: 30rpx;
		
		.item-text{
			width: 35%;
		}

		>view {
			width: 30%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
	}
</style>
