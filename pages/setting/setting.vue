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
					<p>{{user.phone}}</p>
				</view>
			</view>
			<view class="setting-box">
				<view v-for="settingItem in settings" @click="settingItemClick(settingItem.index)"
					:key="settingItem.index">
					<setting-item :item="settingItem">
					</setting-item>
				</view>
			</view>
		</view>
		<view class="pop" v-show="isPop" @click="popDown()">
			<uni-transition class="pop-tran" :mode-class="['fade','slide-bottom']" :show="showTelCheck">
				<view class="pop-card" @click.stop="">
					<view class="pop-tel-form">
						<cl-input class="pop-tel-input" type="number" placeholder="请输入您的手机号码"></cl-input>
						<cl-button class="pop-tel-button" type="primary" @tap="onSubmit">获取验证码</cl-button>
					</view>
					<view class="pt-text">
						<text>验证码(30分钟内有效):</text>
					</view>
					<view class="pop-tel-captcha">
						<cl-captcha :length="6" :height="'80rpx'"></cl-captcha>
					</view>
				</view>
			</uni-transition>
			<uni-transition class="pop-tran" :mode-class="['fade','slide-bottom']" :show="showStuCheck">
				<view class="pop-card" @click.stop="">
					<view class="ps-form-item">
						<label for="stu-id">账号：</label>
						<uni-easyinput id="stu-id" class="ps-input" type="number" placeholder="请输入学生账号" />
					</view>
					<view class="ps-form-item">
						<label for="stu-pd">密码：</label>
						<uni-easyinput id="stu-pd" class="ps-input" type="password" />
					</view>
					<button class="ps-button">登录</button>
				</view>
			</uni-transition>
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
					phone: "请绑定手机号码",
					isLogin: false,
				},
				settings: [{
						index: 0,
						name: '绑定手机',
						icon: 'contact'
					},
					{
						index: 1,
						name: '学生认证',
						icon: 'person-filled'
					},
					{
						index: 2,
						name: '闲置收藏',
						icon: 'heart-filled'
					},
					{
						index: 3,
						name: '意见反馈',
						icon: 'info-filled'
					},
					{
						index: 4,
						name: '联系客服',
						icon: 'chat-filled'
					}
				],
				isPop: false,
				showTelCheck: false,
				showStuCheck: false,
			};
		},
		components: {
			SettingItem,
		},
		methods: {
			checkTelephone() {
				this.showTelCheck = true
				this.isPop = true
			},
			checkStudent() {
				this.showStuCheck = true
				this.isPop = true
			},
			settingItemClick(index) {
				switch (index) {
					//	绑定手机
					case 0:
						this.checkTelephone()
						break
						//	绑定学号 
					case 1:
						this.checkStudent()
						break
					default:
						return
				}
			},
			popDown() {
				this.showTelCheck = false
				this.showStuCheck = false
				this.isPop = false;
			},
			register() {
				if (this.user.isLogin) {
					uni.showToast({
						title: "您已经登录了！",
						icon: "success",
						duration: 2000,
					})
					return
				}
				const that = this
				uni.getUserProfile({
					desc: '获取你的昵称、头像、地区及性别',
					success: res => {
						uni.request({
							method: "POST",
							url: that.$api.getRegisterUrl(),
							dataType: JSON,
							data: {
								openId: that.user.openId,
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
							success(response) {
								const resData = JSON.parse(response.data)
								if (resData.code === 2000) {
									that.user.imageSrc = res.userInfo.avatarUrl
									that.user.nickName = res.userInfo.nickName
									that.user.isLogin = true
								} else {
									uni.showToast({
										title: resData.msg,
										icon: "error",
										duration: 2000,
									})
								}
							}
						})
					},
					fail: res => {
						uni.showToast({
							title: '您拒绝了请求:D',
							icon: 'error',
							duration: 2000,
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
						url: that.$api.getLoginUrl(res.code),
						success(res) {
							that.user.openId = res.data.data.id
							if (res.data.code == 1000) {
								that.user.nickName = res.data.data["nick_name"]
								that.user.imageSrc = res.data.data["pic_url"]
								that.user.isLogin = true
							} else {
								uni.showToast({
									title: res.data.msg,
									icon: "error",
									duration: 2000,
								})
							}
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

	.pop-tel-form {
		display: flex;
		justify-content: center;
		margin-top: 20rpx;
		padding: 10rpx;

		.pop-tel-input {
			flex-grow: 4;
			margin-right: 30rpx;
		}

		.pop-tel-button {
			flex-grow: 1;
		}
	}

	.pt-text{
		font-size: 1.2rem;
		    color: gray;
		    padding: 20rpx;
		    margin-top: 10rpx;
	}

	.pop-tran {
		position: absolute;
		top: 60%;
		width: 100%;
	}

	.pop-card {
		padding: 40rpx;
		width: 100%;
		box-sizing: border-box;
		height: 40vh;
		background-color: white;
		border-top-left-radius: $card-radius;
		border-top-right-radius: $card-radius;
	}

	.ps-form-item {
		margin-top: 30rpx;
		display: flex;
		align-items: center;
		justify-content: center;

		.ps-input {
			width: 80%;
		}
	}

	.ps-button {
		margin: auto;
		margin-top: 30rpx;
		width: 40%;
		font-size: 1rem;
		color: white;
		background-color: $cl-color-primary;
	}
</style>
