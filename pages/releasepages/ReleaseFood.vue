<template>
	<view class="form-box">
		<cl-form ref="form" :model.sync="form" :rules="rules" label-width="400rpx" label-position="top" border="true">
			<cl-form-item prop="pickUpAddress" label="附近取餐地点">
				<cl-select v-model="form.pickUpAddress" :options="pickUpAddressList" border="true"></cl-select>
			</cl-form-item>
			<cl-form-item prop="destCategory" label="目的地所在区域">
				<cl-radio-group border="true" v-model="form.destCategory">
					<cl-radio label="理学楼">理学楼</cl-radio>
					<cl-radio label="文科楼">文科楼</cl-radio>
					<cl-radio label="生活区">生活区</cl-radio>
					<cl-radio label="行政楼">行政楼</cl-radio>
					<br style="display: block; padding: 10rpx;">
					<cl-radio label="生化楼">生化楼</cl-radio>
					<cl-radio label="其他">其他区域</cl-radio>
				</cl-radio-group>
			</cl-form-item>
			<cl-form-item prop="destination" label="目的地址">
				<cl-input v-model="form.destination"></cl-input>
			</cl-form-item>
			<cl-form-item prop="briefInfo" label="简要描述送餐需求">
				<cl-textarea v-model="form.briefInfo"></cl-textarea>
			</cl-form-item>
			<cl-form-item prop="commission" label="酬金">
				<cl-select v-model="form.commission" :options="commissionList" border="true"></cl-select>
			</cl-form-item>
			<cl-form-item prop="deadline" label="截止时间">
				<uni-datetime-picker v-model="form.deadline"></uni-datetime-picker>
			</cl-form-item>
			<!-- 以下信息只有接单用户可见 -->
			<cl-form-item prop="pickUpNumber" label="取货码 | 手机尾号">
				<cl-input v-model="form.pickUpNumber"></cl-input>
			</cl-form-item>
			<cl-form-item prop="pickUpName" label="取货人昵称">
				<cl-input v-model="form.pickUpName"></cl-input>
			</cl-form-item>
			<cl-form-item prop="images" label="订单图片">
				<cl-upload v-model="form.images" multiple :limit="3"></cl-upload>
			</cl-form-item>
			<cl-form-item prop="foodDeliverPhone" label="送货人联系方式">
				<cl-input v-model="form.foodDeliverPhone"></cl-input>
			</cl-form-item>
			<cl-form-item prop="remarks" label="订单要求">
				<cl-textarea v-model="form.briefInfo"></cl-textarea>
			</cl-form-item>
		</cl-form>
		<cl-button type="success" @tap="onSubmit" fill="true">提交</cl-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pickUpAddressList: [{
						label: "二号天桥下",
						value: "二号天桥下"
					},
					{
						label: "广大公寓",
						value: "广大公寓"
					},
					{
						label: "菊苑保安亭",
						value: "菊苑保安亭"
					},
					{
						label: "广大正门",
						value: "广大正门"
					},
					{
						label: "广大西门",
						value: "广大西门"
					},
					{
						label: "广大西北门",
						value: "广大西北门"
					},
					{
						label: "文俊东楼保安亭",
						value: "文俊东楼保安亭"
					},
					{
						label: "其他",
						value: "其他"
					}
				],
				commissionList: [{
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
					}
				],
				form: {
					pickUpAddress: '',
					destCategory: '',
					destination: '',
					deadline: null,
					commission: 2,
					briefInfo: '',
					pickUpName: '',
					pickUpNumber: '',
					foodDeliverPhone: '',
					images: [],
					remarks: ''
				},
				rules: {
					pickUpAddress:{
						required:true,
						message:'请选择最靠近取餐地点的区域'
					},
					destCategory:{
						required:true,
						message:'请选择送餐地点的区域'
					},
					destination:{
						required:true,
						message:'请简要写明送餐地点'
					},
					deadline:{
						required:true,
						message:'请选择外卖截止时间'
					},
					commission:{
						required:true,
						message:'请您选择订单的酬金'
					},
					briefInfo:{
						required:true,
						message:'请简要描述送餐需求'
					},
					pickUpName:{
						required:true,
						message:'请输入您的取餐昵称'
					},
					pickUpNumber:{
						required:true,
						message:'请输入您的取餐码'
					},
					foodDeliverPhone:{
						required:false,
						message:'请输入外卖员联系方式'
					},
					images:{
						required:false,
						message:'请选择上传订单详情图片'
					},
					remarks:{
						required:false,
						message:'请填入您对送单的要求'
					},
					
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
