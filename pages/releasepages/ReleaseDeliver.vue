<template>
	<view class="form-box">
		<cl-form ref="form" :model.sync="form" :rules="rules" label-width="400rpx" label-position="top" border="true">
			<cl-form-item prop="destCategory" label="目的地区域">
				<cl-radio-group border="true" v-model="form.destCategory">
					<cl-radio label="梅苑">梅苑</cl-radio>
					<cl-radio label="兰苑">兰苑</cl-radio>
					<cl-radio label="竹苑">竹苑</cl-radio>
					<cl-radio label="菊苑">菊苑</cl-radio>
					<cl-radio label="其他">其他</cl-radio>
				</cl-radio-group>
			</cl-form-item>
			<cl-form-item prop="destination" label="目的地址">
				<cl-input v-model="form.destination"></cl-input>
			</cl-form-item>
			<cl-form-item prop="pickUpAddress" label="取货点">
				<cl-radio-group border="true" v-model="form.pickUpAddress">
					<cl-radio label="菜鸟">菜鸟</cl-radio>
					<cl-radio label="丰巢">丰巢</cl-radio>
					<cl-radio label="顺丰">顺丰</cl-radio>
					<cl-radio label="京东">京东</cl-radio>
					<cl-radio label="其他">其他</cl-radio>
				</cl-radio-group>
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
				<cl-select v-model="form.commission" :options="commissionList" border="true"></cl-select>
			</cl-form-item>
			<!-- briefInfo -->
			<cl-form-item prop="briefInfo" label="快递信息简要描述">
				<cl-select v-model="form.briefInfo" :options="briefInfoList" border="true"></cl-select>
			</cl-form-item>
			<!-- packageNumbers -->
			<cl-form-item prop="packageNumbers" label="快递件数">
				<cl-select v-model="form.packageNumbers" :options="packageNumbersList" border="true"></cl-select>
			</cl-form-item>
		</cl-form>
		<cl-button type="success" @tap="onSubmit" fill="true">提交</cl-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				commissionList: [{
						label: "1元",
						value: 1
					},
					{
						label: "2元",
						value: 2
					},
					{
						label: "3元",
						value: 3
					},
					{
						label: "4元",
						value: 4
					},
					{
						label: "5元",
						value: 5
					},
					{
						label: "面谈",
						value: 0
					}
				],
				briefInfoList: [{
						label: "小件",
						value: 1
					},
					{
						label: "大件",
						value: 2
					},
					{
						label: "易碎",
						value: 3
					},
					{
						label: "较轻",
						value: 4
					},
					{
						label: "较重",
						value: 5
					},
					{
						label: "重物",
						value: 6
					}
				],
				packageNumbersList: [{
						label: "1件",
						value: 1
					},
					{
						label: "2件",
						value: 2
					},
					{
						label: "3件及以上",
						value: 3
					}
				],
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
					destCategory: {
						required: true,
						message: '请选择一个区域'
					},
					destination: {
						required: true,
						maxLength: 30,
						format: 'string',
						message: '请勿超过30个字符'
					},
					pickUpAddress: {
						required: true,
						message: '请选择一个目的地'
					},
					contactInfo: {
						required: true,
						message: '请输入您的联系方式'
					},
					deadline: {
						required: true,
						message: '请选择截止日期'
					},
					commission: {
						required: true,
						message: '请选择一个酬金金额'
					},
					briefInfo: {
						required: true,
						message: '请选择快递的简要描述'
					},
					packageNumbers: {
						required: true,
						message: '请选择快递件数'
					}
				},
				form: {
					destCategory: '',
					destination: '',
					pickUpAddress: '',
					category: '',
					contactCategory: '',
					contactInfo: '',
					email: '',
					deadline: '',
					commission: '',
					briefInfo: '',
					packageNumbers: ''
				},
				isEmail: false,
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
				else this.isEmail = false
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>