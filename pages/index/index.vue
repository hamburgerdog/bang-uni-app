<template>
	<view>
		<view class="title">
			<image src="../../static/title/title1.png" mode="aspectFill"></image>
		</view>
		<view class="main-box"></view>
		<view class="main" @click="goto">
			<view class="grid-box">
				<navigator v-for="bangButton in buttons" :key="bangButton.name" :url="bangButton.path"
					open-type="navigate">
					<bang-button :bangButton="bangButton"></bang-button>
				</navigator>
			</view>
			<view class="main-card">
				<image src="../../static/status/empty_data.png" mode="aspectFill" style="max-width: 100%;"></image>
				<p>当前无订单</p>
			</view>
		</view>
		<uni-fab ref="fab" :pattern="pattern" :content="content" horizontal="right" vertical="bottom"
			direction="horizontal" @trigger="trigger" />
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
						text: '帮帮发布',
						active: false
					},
					{
						iconPath: '/static/icon/fab-icon/agriculture.png',
						selectedIconPath: '/static/icon/fab-icon/agriculture-sel.png',
						text: '发布外卖',
						active: true
					},
					{
						iconPath: '/static/icon/fab-icon/packaging.png',
						selectedIconPath: '/static/icon/fab-icon/packaging-sel.png',
						text: '发布快递',
						active: false
					},
					{
						iconPath: '/static/icon/fab-icon/helper.png',
						selectedIconPath: '/static/icon/fab-icon/helper-sel.png',
						text: '发布互助',
						active: false
					},
					{
						iconPath: '/static/icon/fab-icon/aside.png',
						selectedIconPath: '/static/icon/fab-icon/aside-sel.png',
						text: '发布闲置',
						active: false
					},
				],
				buttons: [{
						name: '帮帮',
						icon: 'paperplane-filled',
						path: '/pages/bangpage/BangWelfare'
					},
					{
						name: '快递',
						icon: 'flag-filled',
						path: '/pages/bangpage/BangDeliver'
					},
					{
						name: '外卖',
						icon: 'cart-filled',
						path: '/pages/bangpage/BangFood'
					},
					{
						name: '互助',
						icon: 'chatboxes-filled',
						path: '/pages/bangpage/BangHelper'
					},
					{
						name: '闲置',
						icon: 'chat-filled',
						path: '/pages/bangpage/BangAside'
					},
					{
						name: '赞助',
						icon: 'heart-filled',
						path: '/pages/index/index'
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
			},
			goto() {
				console.log('goto_clicked')
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
