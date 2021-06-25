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
				<cl-filter-item label="送货地点" v-model="destCategory" :options="destCategoryList" type="dropdown" multiple
					prop="dest" theme="grid" />
				<cl-filter-item label="取货地点" v-model="pickUpAddress" :options="pickUpAddressList" type="dropdown"
					multiple prop="pickup" theme="grid" />
			</cl-filter-bar>
		</view>
		<view class="card-box bang-after-header" v-if="visiable">
			<view class="card" v-for="card in delivers" :key="card.id">
				<MyCard :card="card"></MyCard>
			</view>
			<cl-loadmore background-color="#f9f9f9" :loading="loading" :finish="finished"></cl-loadmore>
		</view>
		<my-loading v-else></my-loading>
	</view>
</template>

<script>
	import MyCard from "../../components/MyCard/MyCard.vue"

	export default {
		data() {
			return {
				visiable: false,
				loading: false,
				finished: false,
				isTimeFirst: true,
				isSalaryFirst: false,
				delivers: [],
				destCategoryList: [{
						label: "梅苑",
						value: '梅苑’'
					},
					{
						label: "兰苑",
						value: '兰苑'
					},
					{
						label: "竹苑",
						value: '竹苑'
					},
					{
						label: "菊苑",
						value: '菊苑'
					},
					{
						label: "其他",
						value: '其他'
					}
				],
				pickUpAddressList: [{
						label: "菜鸟",
						value: '菜鸟’'
					},
					{
						label: "丰巢",
						value: '丰巢'
					},
					{
						label: "顺丰",
						value: '顺丰'
					},
					{
						label: "京东",
						value: '京东'
					},
					{
						label: "其他",
						value: '其他'
					}
				],
				destCategory: ["梅苑’", "兰苑", "竹苑", "菊苑", "其他"],
				pickUpAddress: ["菜鸟’", "丰巢", "顺丰", "京东", "其他"]
			}
		},
		components: {
			MyCard,
		},
		methods: {
			updateShowState() {
				if (this.isTimeFirst) {
					this.delivers.sort(function(a, b) {
						console.log(new Date(a.deadline.replace(/-/g,'/')) - new Date(b.deadline.replace(/-/g,'/')))
						return new Date(a.deadline.replace(/-/g,'/')) - new Date(b.deadline.replace(/-/g,'/'))
					})
				}
				if (this.isSalaryFirst) {
					this.delivers.sort(function(a, b) {
						return b.commission - a.commission
					})
				}
				this.delivers.forEach(item => {
					if (this.destCategory.includes(item.title) &&
						this.pickUpAddress.includes(item.pickupAddress)) {
						item.show = true
					} else {
						item.show = false
					}
				})
			},
			addDelivers(deliverList) {
				deliverList.forEach(item => {
					this.delivers.push({
						...item,
						showMore: true,
						moreText: `酬金：¥${item.commission}元`,
						showFooter: true,
						footerText: `截止日期：${item.deadline}`,
						highLight: true,
						show: true,
						content: `详细地址：${item.grade} *** ***
						取件地址：${item.pickupAddress}
						快递简述：${item.briefInfo}
						快递件数：${item.number}件
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
			this.$api.getDelivers(this.delivers.length).then(deliverList => {
				this.addDelivers(deliverList)
				this.visiable = true
			})
		},
		onReachBottom() {
			this.loading = true
			this.$api.getDelivers(this.delivers.length).then(delivers => {
				this.addDelivers(delivers)
				this.loading = false
			})
		}
	}
</script>

<style lang="scss">

</style>
