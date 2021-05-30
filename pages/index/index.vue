<template>
	<view>
		<!-- <view class="title">
			<image src="/static/title/title1.png" mode="aspectFill"></image>
		</view> -->
		<view class="main-box">
			<swiper>
				<swiper-item v-for="item in list" :key="item.index">
					<image :src="item.src" mode="heightFix" style="max-height: inherit;"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="main">
			<view class="grid-box">
				<navigator v-for="bangButton in buttons" :key="bangButton.name" :url="bangButton.path"
					open-type="navigate">
					<bang-button :bangButton="bangButton"></bang-button>
				</navigator>
			</view>
			<view class="main-card">
				<image src="/static/status/empty_data.png" mode="aspectFill" style="max-width: 100%;"></image>
				<p>当前无订单</p>
			</view>
		</view>
		<uni-fab ref="fab" :pattern="pattern" :content="content" horizontal="right" vertical="bottom"
			direction="horizontal" @trigger="release" />
	</view>
</template>

<script>
	import BangButton from "./components/BangButton.vue"

	export default {
		data() {
			return {
				pattern: {
					color: '#00274f',
					backgroundColor: '#FFFFFF',
					selectedColor: '#007AFF',
					buttonColor: '#c6e0f9'
				},
				content: [{
						iconPath: '/static/icon/fab-icon/operation.png',
						selectedIconPath: '/static/icon/fab-icon/operation-sel.png',
						path: "pages/releasepages/ReleaseWelfare",
						text: '帮帮发布',
						active: false
					},
					{
						iconPath: '/static/icon/fab-icon/agriculture.png',
						selectedIconPath: '/static/icon/fab-icon/agriculture-sel.png',
						path: "pages/releasepages/ReleaseFood",
						text: '发布外卖',
						active: false
					},
					{
						iconPath: '/static/icon/fab-icon/packaging.png',
						selectedIconPath: '/static/icon/fab-icon/packaging-sel.png',
						path: "pages/releasepages/ReleaseDeliver",
						text: '发布快递',
						active: false
					},
					{
						iconPath: '/static/icon/fab-icon/helper.png',
						selectedIconPath: '/static/icon/fab-icon/helper-sel.png',
						path: "pages/releasepages/ReleaseHelper",
						text: '发布互助',
						active: false
					},
					{
						iconPath: '/static/icon/fab-icon/aside.png',
						selectedIconPath: '/static/icon/fab-icon/aside-sel.png',
						path: "pages/releasepages/ReleaseAside",
						text: '发布闲置',
						active: false
					},
				],
				buttons: [{
						name: '帮帮',
						icon: 'paperplane-filled',
						path: '/pages/bangpages/BangWelfares'
					},
					{
						name: '快递',
						icon: 'flag-filled',
						path: '/pages/bangpages/BangDelivers'
					},
					{
						name: '外卖',
						icon: 'cart-filled',
						path: '/pages/bangpages/BangFoods'
					},
					{
						name: '互助',
						icon: 'chatboxes-filled',
						path: '/pages/bangpages/BangHelpers'
					},
					{
						name: '闲置',
						icon: 'chat-filled',
						path: '/pages/bangpages/BangAsides'
					},
					{
						name: '赞助',
						icon: 'heart-filled',
						path: '/pages/index/indexs'
					}
				],
				list: [{
						src: 'https://uni-demo.cool-js.com/static/images/banner2.png',
						index: 0,
					}, {
						src: 'https://uni-demo.cool-js.com/static/images/banner1.png',
						index: 1,
					},
					{
						src: 'https://uni-demo.cool-js.com/static/images/banner3.png',
						index: 2,
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			release(e) {
				this.content.forEach(function(item) {
					item.active = false;
				})
				this.content[e.index].active = true;
				uni.navigateTo({
					url: this.content[e.index].path
				})
			}
		},
		components: {
			BangButton,
		},
		onHide() {
			this.$refs.fab.close()
		}
	}
</script>

<style lang="scss">
	// .title {
	// 	background-color: $element-bg;
	// 	height: 400rpx;
	// 	overflow: hidden;
	// 	margin-bottom: -40rpx;

	// 	image {
	// 		min-width: 100%;
	// 	}
	// }

	.main-box {
		position: absolute;
		overflow: hidden;
		width: 92%;
		height: 300rpx;
		top: 280rpx;
		left: 50%;
		margin-left: -46%;
		border-radius: $card-radius;
		box-shadow: $card-shadow;
		background-image: linear-gradient(-45deg, $element-blank-bg, #fafafa);
		-webkit-backface-visibility: hidden;
		-webkit-transform: translate3d(0, 0, 0);
	}

	.main {
		margin-top: 600rpx;
		padding: 4%;
	}

	.grid-box {
		position: relative;
		margin: 20rpx 0;
		display: grid;
		grid-template-columns: repeat(3, 32%);
		grid-template-rows: repeat(2, 180rpx);
		grid-gap: 14rpx;
		justify-content: space-around;
		text-align: center;
		border-radius: $card-radius;

		>navigator {
			background-color: $element-blank-bg;
			border-radius: 30rpx;
			padding: 20rpx;
			box-shadow: $card-shadow;
		}
	}

	.main-card {
		position: relative;
		padding: 20rpx;
		margin-top: 20rpx;
		background-color: $element-blank-bg;
		box-shadow: $card-shadow;
		border-radius: $card-radius;
		text-align: center;
		color: $element-headline;
		font-size: 40rpx;
	}
</style>
