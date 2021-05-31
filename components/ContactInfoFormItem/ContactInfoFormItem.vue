<template>
	<view>
		<view class="contact-category">
			<cl-select v-model="contactCategory" :options="contactCategoryList" placeholder="联系方式"
				@change="select">
			</cl-select>
		</view>
		<view class=" contact-info">
			<cl-input v-model="contactInfo"></cl-input>
		</view>
		<view>
			<cl-select v-model="email" :options="emailList" placeholder="请选择" v-show="isEmail">
			</cl-select>
		</view>
	</view>
</template>

<script>
	export default {
		name: "ContactInfoFormItem",
		data() {
			return {
				isEmail: false,
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
			};
		},
		methods: {
			select(value) {
				if (value === 'email') this.isEmail = true
			}
		},
		props: ['contactCategory','contactInfo','email']
	}
</script>

<style lang="scss">
	.contact-category,
	.contact-info {
		margin-right: 10rpx;
	}
</style>
