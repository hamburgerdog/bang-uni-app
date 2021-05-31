<template>
	<view class="form-box">
		<cl-form ref="form" :model.sync="form" :rules="rules" label-width="400rpx" label-position="top" border="true">
			<cl-form-item prop="category" label="帮帮类型">
				<cl-radio-group border="true" v-model="form.category">
					<cl-radio label="寻物启事">寻物启事</cl-radio>
					<cl-radio label="失物招领">失物招领</cl-radio>
					<cl-radio label="校园帮帮">校园帮帮</cl-radio>
				</cl-radio-group>
			</cl-form-item>
			<cl-form-item prop="title" label="帮帮标题">
				<cl-input v-model="form.title"></cl-input>
			</cl-form-item>
			<cl-form-item prop="contactInfo" label="联系方式">
				<view class="contact-category">
					<cl-select v-model="form.contactCategory" :options="contactCategoryList" placeholder="联系方式" @change="select">
					</cl-select>
				</view>
				<view class=" contact-info">
						<cl-input v-model="form.contactInfo"></cl-input>
				</view>
				<view>
					<cl-select v-model="form.email" :options="emailList" placeholder="请选择" v-show="isEmail">
					</cl-select>
				</view>
			</cl-form-item>
			<cl-form-item prop="deadline" label="截止日期">
				<uni-datetime-picker v-model="form.deadline"></uni-datetime-picker>
			</cl-form-item>
			<cl-form-item prop="content" label="帮帮内容">
				<cl-textarea v-model="form.content"></cl-textarea>
			</cl-form-item>
			<cl-form-item prop="images" label="相册">
				<cl-upload v-model="form.images" multiple :limit="3"></cl-upload>
			</cl-form-item>
			<cl-form-item prop="tips" label="备注">
				<cl-input v-model="form.tips"></cl-input>
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
					content: '',
					tips: '',
					images: [],
					category: '',
					contactCategory: '',
					contactInfo: '',
					email: '',
					deadline: ''
				},
				contactCategoryList: [{
						label: '微信',
						value: 'wx'
					},
					{
						label: '手机号码',
						value: 'tel'
					},
					{
						label: 'QQ',
						value: 'qq'
					},
					{
						label: '邮箱',
						value: 'email'
					}
				],
				emailList: [{
						label: '@qq.com',
						value: '@qq.com'
					},
					{
						label: '@163.com',
						value: '@163.com'
					},
					{
						label: '@sohu.com',
						value: '@sohu.com'
					},
					{
						label: '@sina.com',
						value: '@sina.com'
					}
				],
				rules: {
					title: {
						required: true,
						message: '请输入帮帮标题'
					},
					content: {
						required: true,
						message: '请输入帮帮详情，不要超过140个字符'
					},
					tips: {
						required: false
					},
					images: {
						required: false
					},
					category: {
						required: true,
						message: '请选择一个帮帮类型'
					},
					contactInfo: {
						required: true,
						message: '请输入您的联系方式'
					},
					deadline: {
						required: true,
						message: '请选择帮帮截止日期'
					}
				},
				isEmail: false
			}
		},
		methods: {
			onSubmit() {
				this.$refs["form"].validate(valid => {
					if (valid) {
						console.log("success");
					}
				});
			},
			select(value) {
				if (value === 'email') this.isEmail = true
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
