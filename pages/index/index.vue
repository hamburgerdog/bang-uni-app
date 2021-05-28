<template>
	<view>
		<view class="title">
			<image src="../../static/title/title1.png" mode="aspectFill"></image>
		</view>
		<view class="main-box"></view>
		<view class="main">
			<view class="grid-box">
				<!-- 互助 -->
				<view></view>
				<!-- 快递 -->
				<view></view>
				<!-- 外卖 -->
				<view></view>
				<!-- 闲置 -->
				<view></view>
				<!-- 发布 -->
				<view></view>
				<!-- 赞助 -->
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
		height: 400rpx;
		overflow: hidden;
		margin-bottom: -40rpx;
		
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
		background: $element-blank-bg;
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
		background-color: $element-blank-bg;
		text-align: center;

		view {
			background-color: $element-bg;
			border-radius: 30rpx;
			padding: 20rpx;
		}
	}
	
	.main-card{
		margin-top: 20rpx;
		background-color: $element-blank-bg;
		height: 500rpx;
	}
</style>
