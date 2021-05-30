<template>
	<view class="card-box" @click="clickCard">
		<view class="card-title">
			<p>{{card.title}}</p>
			<view v-if="card.showMore" class="title-more">
				<p>{{card.moreText}}</p>
			</view>
		</view>
		<view class="card-content">
			<image v-for="image in card.images" :key="image.index" :src="image.src" mode="aspectFill"
				style="max-height: 100rpx;" />
			<text>
				{{card.content}}
			</text>
		</view>
		<view :class="card.highLight?'card-footer footer-highLight':'card-footer'" v-if="card.showFooter">
			<p>{{card.footerText}}</p>
		</view>
	</view>
</template>

<script>
	export default {
		name: "MyCard",
		data() {
			return {

			};
		},
		props: ['card'],
		methods:{
			clickCard() {
				uni.navigateTo({
					url: this.card.path
				})
			}
		}
	}
</script>

<style lang="scss">
	.card-box {
		display: flex;
		flex-direction: column;
		padding: 20rpx;
		gap: 20rpx;
		border-radius: $card-radius;
		box-shadow: $card-shadow;
		background-color: #fff;

		.card-title {
			display: flex;
			color: $element-headline;
			justify-content: space-between;
			border-bottom: 4rpx solid $page-bg;
			font-size: 34rpx;
			line-height: 2;
			color: $element-headline;

			.title-more {
				color: $element-highlight;
			}
		}

		.card-content {
			color: #666;
			font-size: 30rpx;
		}

		.card-footer {
			color: #aaa;
			font-size: 26rpx;
		}

		.footer-highLight {
			color: $element-highlight;
		}
	}
</style>
