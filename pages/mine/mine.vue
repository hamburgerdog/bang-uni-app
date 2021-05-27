<template>
	<view>
		<view class="title">
			<image src="../../static/title/title2.png" mode="aspectFill"></image>
		</view>
		<view class="main-box">
			<view class="main-grid">
				<view class="card-deliver"></view>
				<view class="card-aside"></view>
				<view class="card-food"></view>
				<view class="card-welfare"></view>
				<view class="card-helper"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.title {
		background-color: $element-bg;
		height: 400rpx;
		margin-bottom: -40rpx;
		overflow: hidden;
		
		image{
			min-width: 100%;
		}
	}

	.main-box {
		position: relative;
		background-color: $element-blank-bg;
		padding: 20rpx;
		border-top-left-radius: 40rpx;
		border-top-right-radius: 40rpx;
	}

	.main-grid {
		margin-top: 30rpx;
		display: grid;
		height: 800rpx;
		grid-template-areas:
			'deliver deliver deliver'
			'aside aside food'
			'welfare helper food';
		grid-gap: 24rpx;
		
	}
	[class^="card-"]{
		background-color: $element-bg;
	}
	.card-deliver{
		grid-area: deliver;
	}
	.card-aside{
		grid-area: aside;
	}
	.card-food{
		grid-area: food;
	}
	.card-welfare{
		grid-area: welfare;
	}
	.card-helper{
		grid-area: helper;
	}
	
</style>
