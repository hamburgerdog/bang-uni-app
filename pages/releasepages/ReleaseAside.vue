<template>
	<view class="form-box">
		<cl-form ref="form" :model.sync="form" :rules="rules" label-width="400rpx" label-position="top" border="true">
			<cl-form-item prop="category" label="闲置物品类别">
				<cl-radio-group border="true" v-model="form.category">
					<cl-radio label="生活用品">生活用品</cl-radio>
					<cl-radio label="体育用品">体育用品</cl-radio>
					<cl-radio label="课本书籍">课本书籍</cl-radio>
					<cl-radio label="其他">其他</cl-radio>
				</cl-radio-group>
			</cl-form-item>
			<cl-form-item prop="title" label="闲置物品名称">
				<cl-input v-model="form.title"></cl-input>
			</cl-form-item>
			<cl-form-item prop="content" label="闲置物品描述">
				<cl-textarea v-model="form.content"></cl-textarea>
			</cl-form-item>
			<cl-form-item prop="images" label="闲置物品图片">
				<cl-upload v-model="form.images" multiple :limit="3"></cl-upload>
			</cl-form-item>
			<cl-form-item prop="trading" label="交易方式">
				<cl-radio-group border="true" v-model="form.trading">
					<cl-radio label="自提">自提</cl-radio>
					<cl-radio label="邮递">邮递</cl-radio>
				</cl-radio-group>
			</cl-form-item>
			<cl-form-item prop="contactInfo" label="联系方式">
				<cl-input v-model="form.contactInfo"></cl-input>
			</cl-form-item>
			<cl-form-item prop="deadline" label="截止日期">
				<uni-datetime-picker v-model="form.deadline"></uni-datetime-picker>
			</cl-form-item>
		</cl-form>
		<cl-button type="success" @tap="onSubmit" fill="true">提交</cl-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					title: '',
					trading: '',
					content: '',
					images: null,
					deadline: null,
					category: '',
					contactInfo: ''
				},
				rules: {
					title: {
						required: true,
						message: '请输入闲置物品名称'
					},
					trading: {
						required: true,
						message: '请选择交易方式'
					},
					content: {
						required: true,
						message: '请描述闲置物品，长度请勿超过140个字符'
					},
					images: {
						required: false,
						message: '上传图片请勿过大'
					},
					deadline: {
						required: true,
						message: '请选择一个截止日期'
					},
					category: {
						required: true,
						message: '请选择一个闲置类别'
					},
					contactInfo: {
						required: true,
						message: '请输入您的联系方式'
					}
				}
			};
		},
		methods: {
			onSubmit() {
				this.$refs["form"].validate(valid => {
					if (valid) {
						console.log("success");
					}
				});
			}
		}
	}
</script>

<style lang="scss">

</style>
