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
					<bang-button class="bang-button" :bangButton="bangButton"></bang-button>
				</navigator>
				<view class="release-button" @click="popup">
					<bang-button :bangButton="releaseButton"></bang-button>
				</view>
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
					<view class="pop-card-item" v-for="item in buttons" :key="item.name" @click="release(item.name)">
						<uni-icons :type="item.icon" color="46A3ff" size="40"></uni-icons>
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
				pattern: {
					color: '#00274f',
					backgroundColor: '#FFFFFF',
					selectedColor: '#007AFF',
					buttonColor: '#c6e0f9'
				},
				content: [{
						path: "pages/releasepages/ReleaseWelfare",
						name: '帮帮'
					},
					{
						path: "pages/releasepages/ReleaseFood",
						name: '外卖',
					},
					{
						path: "pages/releasepages/ReleaseDeliver",
						name: '快递',
					},
					{
						path: "pages/releasepages/ReleaseHelper",
						name: '互助',
					},
					{
						path: "pages/releasepages/ReleaseAside",
						name: '闲置',
					},
				],
				buttons: [{
						name: '帮帮',
						icon: 'heart-filled',
						color: '#46A3ff',
						textcolor: '#00274f',
						path: '/pages/bangpages/BangWelfares'
					},
					{
						name: '快递',
						icon: 'flag-filled',
						color: '#46A3ff',
						textcolor: '#00274f',
						path: '/pages/bangpages/BangDelivers'
					},
					{
						name: '外卖',
						icon: 'cart-filled',
						color: '#46A3ff',
						textcolor: '#00274f',
						path: '/pages/bangpages/BangFoods'
					},
					{
						name: '互助',
						icon: 'chatboxes-filled',
						color: '#46A3ff',
						textcolor: '#00274f',
						path: '/pages/bangpages/BangHelpers'
					},
					{
						name: '闲置',
						icon: 'chat-filled',
						color: '#46A3ff',
						textcolor: '#00274f',
						path: '/pages/bangpages/BangAsides'
					},
				],
				releaseButton: {
					name: '发布',
					icon: 'paperplane-filled',
					color: '#fff',
					textcolor: '#fff'
				},
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
				],
				visible: false,
			}
		},
		methods: {
			popup() {
				this.visible = true
			},
			popdown() {
				this.visible = false
			},
			release(name) {
				this.content.forEach((item) => {
					if (item.name === name) {
						uni.navigateTo({
							url: item.path
						})
						this.visible = false
						return;
					}
				})
			}
		},
		components: {
			BangButton,
		},
		onHide() {},
		onLoad() {},
	}
</script>

<style lang="scss">
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

		>navigator,
		.release-button {
			background-color: $element-blank-bg;
			border-radius: 30rpx;
			padding: 20rpx;
			box-shadow: $card-shadow;
		}

		.release-button {
			background-color: $element-button-highlight-bg;
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

		.pop-card {
			position: absolute;
			left: 5%;
			width: 90%;
			height: 500rpx;
			background-color: #FFF;
			border-radius: $card-radius;
			box-shadow: $card-shadow;
			bottom: 100rpx;

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
