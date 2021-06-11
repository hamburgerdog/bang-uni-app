<template>
	<view>
		<view class="title">
			<image src="../../static/title/title3.png" mode="aspectFill"></image>
		</view>
		<view class="user-page">
			<view class="user-box">
				<image @click="register" class="user-image" :src="user.imageSrc" mode="widthFix"></image>
				<view class="user-info">
					<p>{{user.nickName}}</p>
					<p>{{user.email}}</p>
				</view>
			</view>
			<view class="setting-box">
				<setting-item v-for="settingItem in settings" :key="settingItem.index" :item="settingItem">
				</setting-item>
			</view>
		</view>
	</view>
</template>

<script>
	import SettingItem from './components/SettingItem.vue'
	export default {
		data() {
			return {
				user: {
					openId: "",
					imageSrc: "../../static/dog.jpg",
					nickName: "登录/注册",
					email: "123@qq.com"
				},
				settings: [{
						index: 0,
						name: '个人信息',
						icon: 'contact'
					},
					{
						index: 1,
						name: '闲置收藏',
						icon: 'heart-filled'
					},
					{
						index: 2,
						name: '意见反馈',
						icon: 'info-filled'
					},
					{
						index: 3,
						name: '联系客服',
						icon: 'chat-filled'
					}
				]
			};
		},
		components: {
			SettingItem,
		},
		methods: {
			register() {
				uni.getUserProfile({
					desc: '获取你的昵称、头像、地区及性别',
					success: res => {
						uni.request({
							method: "POST",
							url: "http://127.0.0.1:8000/user/register",
							dataType: JSON,
							data: {
								code: this.user.openId,
								nickName: res.userInfo.nickName,
								picUrl: res.userInfo.avatarUrl,
							},
							fail() {
								uni.showToast({
									title: "服务器出小差啦！",
									icon: "error",
									duration: 2000,
								})
							},
							success() {
								this.user.imageSrc = res.userInfo.avatarUrl
								this.user.nickName = res.userInfo.nickName
							}
						})
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
		},
		beforeMount() {
			const that = this
			uni.login({
				success(res) {
					uni.request({
						url: `http://127.0.0.1:8000/user/login/${res.code}`,
						success(res) {
							that.user.openId = res[1].data.id
							that.user.nickName = res[1].data["nick_name"]
							that.user.imageSrc = res[1].data["pic_url"]
						},
						fail() {
							uni.showToast({
								title: "服务器出小差啦！",
								icon: "error",
								duration: 2000,
							})
						}
					})
				}
			})
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

		image {
			min-width: 100%;
		}
	}

	.user-page {
		position: relative;
		padding: 40rpx;
		height: calc(100vh - 360rpx);
		border-top-left-radius: 40rpx;
		border-top-right-radius: 40rpx;
	}

	.user-box {
		display: flex;
		position: relative;
		top: -120rpx;
		border-radius: 40rpx;
		flex-direction: row;
		align-items: center;
		padding: 30rpx;
		background-color: #fff;
		border-bottom: 4rpx solid #fafafa;
		margin-bottom: -120rpx;
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
	}
</style>
