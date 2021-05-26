<template>
	<view>
		<uni-swiper-dot :info="info" :current="current" field="content" mode="default">
			<swiper @change="change" class="swiper-box" :indicator-dots="false" :autoplay="true" :interval="3000"
				:duration="1000">
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/icon/home-select.png" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/icon/index-select.png" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/icon/setting-select.png" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		<view class="grid-box">
			<view>1</view>
			<view>2</view>
			<view>3</view>
			<view>4</view>
			<view>5</view>
			<view>6</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: [{
						content: '内容A'
					},
					{
						content: '内容B'
					},
					{
						content: '内容C'
					}
				],
				current: 0,
			}
		},
		onLoad() {

		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			}
		},
		components: {}
	}
</script>

<style lang="scss">
	.grid-box {
		display: grid;
		grid-template-columns: 48% 48%;
		grid-template-rows: repeat(3, 120rpx);
		grid-gap: 20rpx;
		padding: 20rpx;
		justify-content: space-around;

		view {
			background-color: $element-bg ;
			border-radius: 30rpx;
			padding: 20rpx;
		}
	}
</style>
