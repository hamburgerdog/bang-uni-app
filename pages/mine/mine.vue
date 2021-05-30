<template>
	<view>
		<view class="title">
			<image src="../../static/title/title2.png" mode="aspectFill"></image>
		</view>
		<view class="main-box">
			<view class="main-grid">
				<navigator class="card-deliver" open-type="navigate" url="/pages/minepages/mydelivers">
					<view class="deliver-text">
						<p>我的快递</p>
						<p>校园互助，点我帮帮</p>
					</view>
					<view>
						<image style="max-height: 240rpx;" src="../../static/deliver.png" mode="aspectFit"></image>
					</view>
				</navigator>
				<navigator class="card-aside" open-type="navigate" url="/pages/minepages/myasides">
					<view class="aside-text">
						<uni-icons type="chat" color="#272343" size="50"></uni-icons><br>
						<span>我的闲置</span>
					</view>
					<view>
						<p>查看闲置物品</p>
					</view>
				</navigator>
				<navigator class="card-food" open-type="navigate" url="/pages/minepages/myfoods">
					<image style="max-height: 400rpx;" src="../../static/food.png" mode="heightFix"></image>
					<p>我的外卖</p>
				</navigator>
				<navigator class="card-welfare" open-type="navigate" url="/pages/minepages/mywelfares">
					<uni-icons type="paperplane-filled" size="40" color="#272343"></uni-icons>
					<p>我的帮帮</p>
				</navigator>
				<navigator class="card-helper" open-type="navigate" url="/pages/minepages/myhelpers">
					<uni-icons class="helper-icon" type="chatboxes" size="40" color="#272343"></uni-icons>
					<p>我的互助</p>
				</navigator>
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

		image {
			min-width: 100%;
		}
	}

	.main-box {
		position: relative;
		height: calc(100vh - 360rpx);
		background-color: $element-blank-bg;
		padding: 14rpx;
		border-top-left-radius: 40rpx;
		border-top-right-radius: 40rpx;
	}

	.main-grid {
		margin-top: 30rpx;
		padding: 40rpx;
		display: grid;
		grid-template-areas:
			'deliver deliver deliver'
			'aside aside food'
			'welfare helper food';
		grid-gap: 30rpx;

	}

	[class^="card-"] {
		background-color: $element-bg;
		box-shadow: $card-shadow;
		border-radius: $card-radius;
	}

	.card-deliver {
		grid-area: deliver;
		display: flex;
		padding: 20rpx;

		:last-child {
			width: 300rpx;

			image {
				width: inherit;
			}
		}
	}

	.deliver-text {
		color: $element-headline;
		padding-top: 30rpx;
		text-align: center;

		:first-child {
			font-size: 72rpx;
			font-weight: 500;
		}

		:last-child {}
	}

	.card-aside {
		grid-area: aside;
		color: $element-headline;
		text-align: center;
		line-height: 1.5;
		padding: 20rpx;

		:last-child {
			letter-spacing: 4rpx;
		}
	}

	.aside-text {
		font-size: 52rpx;
		font-weight: 500;

		span {
			margin-left: 20rpx;
		}
	}

	.card-food {
		grid-area: food;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20rpx;

		p {
			font-size: 48rpx;
			font-weight: 600;
			letter-spacing: 6rpx;
			color: $element-headline;
			line-height: 2;
		}
	}

	.card-welfare {
		grid-area: welfare;
	}

	.card-helper {
		grid-area: helper;
		
		.helper-icon{
			font-weight: 100;
		}
	}

	.card-welfare,
	.card-helper {
		display: flex;
		flex-direction: column;
		gap: 20rpx;
		justify-content: center;
		align-items: center;
		font-size: 36rpx;
		font-weight: 600;
		color: $element-headline;
	}
</style>
