<template>
	<view>
		<view class="title">
			<image src="/static/title/title1.png" mode="aspectFill"></image>
		</view>
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
					open-type="navigate" @click="createOrder(bangButton.name)">
					<bang-button :bangButton="bangButton"></bang-button>
				</navigator>
			</view>
			<view class="main-card">
				<image src="/static/status/empty_data.png" mode="aspectFill" style="max-width: 100%;"></image>
				<p>当前无订单</p>
			</view>
		</view>
		<view class="pop" v-show="visible" @click="popdown()">
			<view class="pop-card" @click.stop="">
				<p>请选择发布</p>
				<view class="pop-card-items">
					<view class="pop-card-item" v-for="item in releaseButtons" :key="item.name" @click="release(item)">
						<uni-icons :type="item.icon" color="#ffd803" size="40"></uni-icons>
						<p>{{item.name}}</p>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import BangButton from "./components/BangButton.vue"

	export default {
		data() {
			return {
				visible: false,
				pattern: {
					color: '#272343',
					backgroundColor: '#FFFFFF',
					selectedColor: '#007AFF',
					buttonColor: '#272343'
				},
				buttons: [{
						name: '帮帮',
						icon: 'heart-filled',
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
						name: '发布',
						icon: 'paperplane-filled',
						path: '/pages/index/indexs'
					}
				],
				releaseButtons: [{
						name: '发布帮帮',
						icon: 'heart',
						path: '/pages/releasepages/ReleaseWelfare'
					},
					{
						name: '发布快递',
						icon: 'flag',
						path: '/pages/releasepages/ReleaseDeliver'
					},
					{
						name: '发布外卖',
						icon: 'cart',
						path: '/pages/releasepages/ReleaseFood'
					},
					{
						name: '发布互助',
						icon: 'chatboxes',
						path: '/pages/releasepages/ReleaseHelper'
					},
					{
						name: '发布闲置',
						icon: 'chat',
						path: '/pages/releasepages/ReleaseAside'
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
			createOrder(buttonName) {
				if (buttonName !== '发布') return
				this.popup()
			},
			release(item) {
				uni.navigateTo({
					url: item.path
				})
			},
			popup() {
				this.visible = true
			},
			popdown() {
				this.visible = false
			},
		},
		components: {
			BangButton,
		},
		onHide() {
			this.visible = false
		}
	}
</script>

<style lang="scss">
	.title {
		background-color: $element-bg;
		height: 400rpx;
		overflow: hidden;
		margin-bottom: -40rpx;

		image {
			min-width: 100%;
		}
	}

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
		margin-top: 200rpx;
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

	.pop {
		position: fixed;
		height: 100vh;
		width: 100%;
		background-color: rgba($color: #333, $alpha: .6);
		z-index: 99;
		top: 0;

		.pop-card {
			position: absolute;
			width: 100%;
			height: 600rpx;
			background-color: #FFF;
			border-top-left-radius: $card-radius;
			border-top-right-radius: $card-radius;
			box-shadow: $card-shadow;
			bottom: 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			color: $element-headline;

			>p {
				font-size: 52rpx;
				line-height: 2;
			}

			.pop-card-items {
				display: grid;
				width: 76%;
				grid-template-columns: 1fr 1fr 1fr;
				gap: 42rpx;
				text-align: center;
				margin-top: 20rpx;

				>p {
					font-size: 40rpx;
				}
			}
		}
	}
</style>
