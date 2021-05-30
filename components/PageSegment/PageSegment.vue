<template>
	<view class="sg-box">
		<h1 style='color: red'>UNI-APP-小程序中 BUGGGGGGGGG组件 请勿使用!!!!!</h1>
		<view v-for="segment in segments" :key="segment.id" :class="segment.isActive?'sg-active':''"
			@click="click(segment.id)">
			<p>{{segment.name}}</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			click(id) {
				this.segments.forEach((item) => {
					item.isActive = false
				})
				this.segments[id].isActive = true;
				console.log(this.segments)
			}
		},
		components: {

		},
		props: ['segments']
	}
</script>

<style lang="scss" scoped>
	.sg-box {
		display: flex;
		padding: 10rpx;
		padding-bottom: 0;
		font-size: 40rpx;
		color: #999999;
		line-height: 1.8;
		justify-content: space-around;
		text-align: center;
		background-color: #fff;
		gap: 20rpx;

		>view {
			flex-grow: 1;
		}
	}

	.sg-active {
		color: $element-headline;
		border-bottom: 4rpx solid $ill-stroke;
	}
</style>
