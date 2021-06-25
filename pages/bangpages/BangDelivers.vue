<template>
	<view>
		<RouterFab></RouterFab>
		<view class="band-header-fixed">
			<view style="background-color: #fff;">
				<uni-search-bar bgColor="white" :radius="100" @confirm="search" placeholder="请输入搜索关键字"></uni-search-bar>
			</view>
			<cl-filter-bar @change="onChange" class="filter-bar">
				<cl-filter-item label="时间优先" prop="timeFirst" />
				<cl-filter-item label="酬金优先" prop="salaryFirst" />
				<cl-filter-item label="送货地点" v-model="destCategory" :options="destCategoryList" type="dropdown" multiple
					prop="dest" theme="grid" />
				<cl-filter-item label="取货地点" v-model="pickUpAddress" :options="pickUpAddressList" type="dropdown"
					multiple prop="pickup" theme="grid" />
			</cl-filter-bar>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
				destCategory: [],
				pickUpAddress: []
			}
		},
		methods: {
			onChange({prop}) {
				switch(prop){
					case 'timeFirst':
						break
					case 'salaryFirst':
						break
					case 'dest':
						console.log(this.destCategory)
						break
					case 'pickup':
						console.log(this.pickUpAddress)
						break
					default:
						break
				}
			}
		}
	}
</script>

<style lang="scss">

</style>
