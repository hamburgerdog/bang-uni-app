<template>
	<view class="form-box">
		<cl-form ref="form" :model.sync="form" :rules="rules" label-width="240rpx" label-position="top" border="true">
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
			<cl-form-item prop="deadline" label="截止日期">
				<uni-datetime-picker v-model="form.deadline"></uni-datetime-picker>
			</cl-form-item>
		</cl-form>

		<cl-button type="success" @tap="onSubmit">提交</cl-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rules: {
					destCategory: {
						required: true,
						errorMessage: '请选择一个区域'
					},
					destination: {
						required: true,
						maxLength: 30,
						format: 'string',
						errorMessage: '请勿超过30个字符'
					},
					pickUpAddress: {
						required: true,
						errorMessage: '请选择一个目的地'
					},
					deadline:{
						required:true,
					}
				},
				form: {
					destCategory: '',
					destination: '',
					pickUpAddress: '',
					deadline: '',
					commission: '',
					briefInfo: '',
					packageNumbers: ''
				}
			}
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

<style lang="scss" scoped>
	.form-box {
		background-color: $main-bg;
		border-bottom-left-radius: $card-radius;
		border-bottom-right-radius: $card-radius;
		box-shadow: $card-shadow;
		padding: 20rpx;
	}
</style>
