<template>
	<view class="form-box">
		<uni-forms :value="formData" ref="form">
			<uni-forms-item label="标题" name="title">
				<uni-easyinput type="text" v-model="formData.title" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item required name="详细内容" label="content">
				<uni-data-checkbox multiple v-model="formData.content"/>
			</uni-forms-item>
			<button @click="submitForm">Submit</button>
		</uni-forms>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
					title: '',
					content: '',
				}
			}
		},
		methods: {
			submitForm(form) {
				// 手动提交表单
				this.$refs.form.submit().then((res) => {
					console.log('表单返回得值：', res)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.form-box{
		background-color: $main-bg;
		border-bottom-left-radius: $card-radius;
		border-bottom-right-radius: $card-radius;
		box-shadow: $card-shadow;
		padding: 20rpx;
	}
</style>
