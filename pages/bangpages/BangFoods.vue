<template>
	<view>
		<RouterFab></RouterFab>
		<view class="bang-title">
			<view style="background-color: #fff;">
				<uni-search-bar bgColor="white" :radius="100" @confirm="search" placeholder="请输入搜索关键字"></uni-search-bar>
			</view>
			<cl-filter-bar @change="onChange" class="filter-bar">
				<cl-filter-item label="时间优先" />
				<cl-filter-item label="酬金优先" />
				<cl-filter-item label="送餐地点" v-model="destCategory" :options="destCategoryList" type="dropdown" multiple
					prop="rank" theme="grid" />
				<cl-filter-item label="取餐地点" v-model="pickUpAddress" :options="pickUpAddressList" type="dropdown"
					multiple prop="rank" theme="grid" />
			</cl-filter-bar>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
				destCategory: [],
				pickUpAddress: []
			}
		},
		methods: {
			onChange() {}
		},
		components: {

		}
	}
</script>

<style lang="scss" scoped>
</style>
