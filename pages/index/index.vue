<template>
	<view>
		<view class="title">
			<image src="../../static/title/title1.png" mode="aspectFill"></image>
		</view>
		<view class="main-box"></view>
		<view class="main">
			<view class="grid-box">
				<view></view>
				<view></view>
				<view></view>
				<view></view>
				<view></view>
				<view></view>
			</view>
			<view class="main-card">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onLoad() {

		},
		methods: {},
		components: {}
	}
</script>

<style lang="scss">
	.title {
		background-color: $element-bg;
		height: 360rpx;
		overflow: hidden;
		
		image{
			min-width: 100%;
		}
	}

	.main-box {
		position: absolute;
		width: 92%;
		height: 300rpx;
		top: 280rpx;
		left: 50%;
		margin-left: -46%;
		background: #fafafa;
		border-radius: 10px;
		// box-shadow: 0 1.3px 10px rgba(0, 0, 0, 0.035), 0 10px 80px rgba(0, 0, 0, 0.07);
	}

	.main {
		margin-top: 220rpx;
		padding: 4%;
	}

	.grid-box {
		display: grid;
		grid-template-columns: 31% 31% 31%;
		grid-template-rows: repeat(2, 180rpx);
		grid-gap: 20rpx;
		padding: 20rpx;
		justify-content: space-around;
		background-color: #fafafa;
		text-align: center;

		view {
			background-color: $element-bg;
			border-radius: 30rpx;
			padding: 20rpx;
		}
	}
	
	.main-card{
		margin-top: 20rpx;
		background-color: #fafafa;
		height: 500rpx;
	}
</style>
