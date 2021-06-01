<template>
	<view class="form-box">
		<cl-form ref="form" :model.sync="form" :rules="rules" label-width="400rpx" label-position="top" border="true">
			<cl-form-item prop="title" label="求助标题">
				<cl-input v-model="form.title"></cl-input>
			</cl-form-item>
			<cl-form-item prop="gender" label="限定性别">
				<cl-radio-group border="true" v-model="form.gender">
					<cl-radio label="女生">女生</cl-radio>
					<cl-radio label="男生">男生</cl-radio>
					<cl-radio label="不限">不限</cl-radio>
				</cl-radio-group>
			</cl-form-item>
			<cl-form-item prop="content" label="求助详情">
				<cl-textarea v-model="form.content"></cl-textarea>
			</cl-form-item>
			<cl-form-item prop="tips" label="备注">
				<cl-input v-model="form.tips"></cl-input>
			</cl-form-item>
			<cl-form-item prop="contactInfo" label="联系方式">
				<view class="contact-category">
					<cl-select v-model="form.contactCategory" :options="contactCategoryList" placeholder="联系方式"
						@change="select">
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
			<cl-form-item prop="commission" label="酬金">
				<cl-input-number v-model="form.commission" :max="50" :min="2" :input="true" :precision="0">
				</cl-input-number>
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
					gender: '',
					content: '',
					tips: '',
					contactCategory: '',
					contactInfo: '',
					email: '',
					deadline: null,
					commission: 0
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
						message: '请输入求助内容的标题'
					},
					gender: {
						required: true,
						message: '请选择是否限制性别'
					},
					content: {
						required: true,
						message: '请简要描述求助内容'
					},
					tips: {
						required: false
					},
					contactInfo: {
						required: true,
						message: '请输入您的联系方式'
					},
					deadline: {
						required: true,
						message: '请选择求助的截止日期'
					},
					commission: {
						required: true,
						message: '仅限数字！请勿输入非法符号'
					}
				},
				isEmail: false,
			};
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
				else this.isEmail = false
			}
		}
	}
</script>

<style lang="scss">

</style>
