<template>
	<view>
		<uni-swiper-dot :info="info" :current="current" field="content" mode="default">
			<swiper @change="change" class="swiper-box" :indicator-dots="false" :autoplay="true" :interval="3000" :duration="1000">
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
</style>
