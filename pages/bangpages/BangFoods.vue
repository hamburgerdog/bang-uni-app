<template>
	<view>
		<RouterFab></RouterFab>
		<view class="band-header-fixed">
			<view style="background-color: #fff;">
				<uni-search-bar bgColor="white" :radius="100" @confirm="search" placeholder="请输入搜索关键字"></uni-search-bar>
			</view>
			<cl-filter-bar @change="onChange" class="filter-bar">
				<cl-filter-item label="时间优先" prop="timeFirst" :value="isTimeFirst" />
				<cl-filter-item label="酬金优先" prop="salaryFirst" :value="isSalaryFirst" />
				<cl-filter-item label="送餐地点" v-model="destCategory" :options="destCategoryList" type="dropdown" multiple
					prop="dest" theme="grid" />
				<cl-filter-item label="取餐地点" v-model="pickUpAddress" :options="pickUpAddressList" type="dropdown"
					multiple prop="pickup" theme="grid" />
			</cl-filter-bar>
		</view>
		<view class="card-box bang-after-header" v-if="visiable">
			<view class="card" v-for="card in foods" :key="card.id">
				<MyCard :card="card"></MyCard>
			</view>
			<cl-loadmore background-color="#f9f9f9" :loading="loading" :finish="finished"></cl-loadmore>
		</view>
		<MyLoading v-else></MyLoading>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				visiable: false,
				loading: false,
				finished: false,
				isTimeFirst: true,
				isSalaryFirst: false,
				foods: [],
				destCategoryList: [{
						label: "理学楼",
						value: '理学楼’'
					},
					{
						label: "文科楼",
						value: '文科楼'
					},
					{
						label: "生活区",
						value: '生活区'
					},
					{
						label: "行政楼",
						value: '行政楼'
					},
					{
						label: '生化楼',
						value: '生化楼'
					},
					{
						label: "其他",
						value: '其他'
					}
				],
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
						label: "文楼保安亭",
						value: "文俊东楼保安亭"
					},
					{
						label: "其他",
						value: "其他"
					}
				],
				destCategory: ["理学楼’", "文科楼", "生活区", "行政楼", "生化楼", "其他"],
				pickUpAddress: ["二号天桥下", "广大公寓", "菊苑保安亭", "广大正门", "广大西门", "广大西北门", "文俊东楼保安亭", "其他"]
			}
		},
		methods: {
			updateShowState() {
				if (this.isTimeFirst) {
					this.foods.sort(function(a, b) {
						const strandDate = '2021/01/01 '
						//	魔法代码：前面加统一日期是为了计算、使用'/'是为了兼容ios
						return new Date(strandDate+a.deadline) - new Date(strandDate+b.deadline)
					})
				}
				if (this.isSalaryFirst) {
					this.foods.sort(function(a, b) {
						return b.commission - a.commission
					})
				}
				this.foods.forEach(item => {
					if (this.destCategory.includes(item.title) &&
						this.pickUpAddress.includes(item.pickupAddress)) {
						item.show = true
					} else {
						item.show = false
					}
				})
			},
			addFoods(foodList) {
				foodList.forEach(item => {
					this.foods.push({
						...item,
						showMore: true,
						moreText: `酬金：¥${item.commission}元`,
						showFooter: true,
						footerText: `截止日期：${item.deadline}`,
						highLight: true,
						show: true,
						content: `送餐地址：「${item.grade}」${item.destination} 
						取餐地址：${item.pickupAddress}
						订单备注：${item.request.length<15?item.request:item.request.substr(0,15)+'...'}
						`
					})
				})
				this.updateShowState()
			},
			onChange({
				prop,
				value
			}) {
				switch (prop) {
					case 'timeFirst':
						this.isTimeFirst = value
						break
					case 'salaryFirst':
						this.isSalaryFirst = value
						break
					case 'dest':
						if (!this.destCategory) {
							this.destCategory = []
						}
						break
					case 'pickup':
						if (!this.pickUpAddress) {
							this.pickUpAddress = []
						}
						break
					default:
						break
				}
				this.updateShowState()
			}
		},
		beforeMount() {
			this.$api.getFoods(this.foods.length).then(foodList => {
				this.addFoods(foodList)
				this.visiable = true
			})
		},
		onReachBottom() {
			this.loading = true
			this.$api.getFoods(this.foods.length).then(foods => {
				this.addFoods(foods)
				this.loading = false
			})
		}
	}
</script>

<style lang="scss" scoped>
</style>
