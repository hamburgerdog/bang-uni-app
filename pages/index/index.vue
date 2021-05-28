<template>
	<view>
		<view class="title">
			<image src="../../static/title/title1.png" mode="aspectFill"></image>
		</view>
		<view class="main-box"></view>
		<view class="main">
			<view class="grid-box">
				<view v-for="bangButton in buttons" :key="bangButton.name">
					<bang-button :bangButton="bangButton"></bang-button>
				</view>
			</view>
			<view class="main-card">
				<image src="../../static/status/empty_data.png" mode="aspectFill" style="max-width: 100%;"></image>
				<p>当前无订单</p>
			</view>
		</view>
		<uni-fab :pattern="pattern" :content="content" horizontal="right" vertical="bottom" direction="vertical"
			@trigger="trigger" />
	</view>
</template>

<script>
	import BangButton from "./components/BangButton.vue"

	export default {
		data() {
			return {
				pattern: {
					color: '#272343',
					backgroundColor: '#FFFFFF',
					selectedColor: '#007AFF',
					buttonColor: '#272343'
				},
				content: [{
						iconPath: '/static/icon/fab-icon/operation.png',
						selectedIconPath: '/static/icon/fab-icon/operation-sel.png',
						text: '发布求助',
						active: false
					},
					{
						iconPath: '/static/icon/fab-icon/agriculture.png',
						selectedIconPath: '/static/icon/fab-icon/agriculture-sel.png',
						text: '外卖帮帮',
						active: true
					},
					{
						iconPath: '/static/icon/fab-icon/packaging.png',
						selectedIconPath: '/static/icon/fab-icon/packaging-sel.png',
						text: '快递帮帮',
						active: false
					}
				],
				buttons: [{
						name: '帮帮',
						icon: 'paperplane-filled'
					},
					{
						name: '快递',
						icon: 'flag-filled'
					},
					{
						name: '外卖',
						icon: 'cart-filled'
					},
					{
						name: '互助',
						icon: 'chatboxes-filled'
					},
					{
						name: '闲置',
						icon: 'chat-filled'
					},
					{
						name: '赞助',
						icon: 'heart-filled'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			trigger(e) {
				this.content.forEach(function(item) {
					item.active = false;
				})
				this.content[e.index].active = true;
			}
		},
		components: {
			BangButton,
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
		width: 92%;
		height: 300rpx;
		top: 280rpx;
		left: 50%;
		margin-left: -46%;
		border-radius: $card-radius;
		box-shadow: $card-shadow;
		background-image: linear-gradient(-45deg, $element-blank-bg, #fafafa);
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

		>view {
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
