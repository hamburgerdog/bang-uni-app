<template>
	<view>
		<view class="title">
			<image src="../../static/title/title3.png" mode="aspectFill"></image>
		</view>
		<view class="user-page">
			<view class="user-box">
				<image @click="login" class="user-image" :src="user.imageSrc" mode="widthFix"></image>
				<view class="user-info">
					<p>{{user.nickName}}</p>
					<p>{{user.email}}</p>
				</view>
			</view>
			<view class="setting-box">
				<!-- 个人信息 -->
				<view>
					<view>
						<uni-icons type="contact" color="#272343" size="24"></uni-icons>
						<p>个人信息</p>
					</view>
					<uni-icons type="arrowright" color="#272343" size="24"></uni-icons>
				</view>
				<!-- 收藏闲置 -->
				<view>
					<view>
						<uni-icons type="heart-filled" color="#272343" size="24"></uni-icons>
						<p>收藏闲置</p>
					</view>
					<uni-icons type="arrowright" color="#272343" size="24"></uni-icons>
				</view>
				<!-- 意见反馈 -->
				<view>
					<view>
						<uni-icons type="info-filled" color="#272343" size="24"></uni-icons>
						<p>意见反馈</p>
					</view>
					<uni-icons type="arrowright" color="#272343" size="24"></uni-icons>
				</view>
				<!-- 联系客服 -->
				<view>
					<view>
						<uni-icons type="chat-filled" color="#272343" size="24"></uni-icons>
						<p>联系客服</p>
					</view>
					<uni-icons type="arrowright" color="#272343" size="24"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					imageSrc: "../../static/dog.jpg",
					nickName: "登录/注册",
					email: "123@qq.com"
				}
			};
		},
		methods: {
			login() {
				uni.getUserProfile({
					desc: '获取你的昵称、头像、地区及性别',
					success: res => {
						this.user.imageSrc = res.userInfo.avatarUrl
						this.user.nickName = res.userInfo.nickName
					},
					fail: res => {
						uni.showToast({
							title: '您拒绝了请求:D',
							icon: 'error',
							duration: 2000
						});
						return;
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.title {
		background-color: $element-bg;
		height: 400rpx;
		box-sizing: border-box;
		margin-bottom: -40rpx;
		overflow: hidden;
		
		image{
			min-width: 100%;
		}
	}

	.user-page {
		position: relative;
		height: calc(100vh - 360rpx);
		border-top-left-radius: 40rpx;
		border-top-right-radius: 40rpx;
		overflow-x: hidden;
	}

	.user-box {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 30rpx;
		background-color: #fff;
		border-bottom: 4rpx solid #fafafa;
	}

	.user-image {
		max-width: 160rpx;
		border-radius: 100%;
		border: 10rpx solid $ill-stroke;
	}

	.user-info {
		margin-left: 42rpx;
		line-height: 1.8;
		font-size: 18px;
		font-weight: 500;
		color: $element-headline;
	}

	.setting-box {
		display: flex;
		flex-direction: column;
		color: $element-headline;

		>view {
			overflow: hidden;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			height: 100rpx;
			padding: 0 36rpx;
			background-color: #fff;
			border-top-left-radius: 40rpx;
			border-bottom-left-radius: 40rpx;
			box-shadow:
				0 3px 5.3px rgba(0, 0, 0, 0.008),
				0 10.1px 17.9px rgba(0, 0, 0, 0.01),
				0 45px 80px rgba(0, 0, 0, 0.04);
			margin-top: 30rpx;

			>view {
				width: 30%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
			}
		}
	}
</style>
