<template>
	<view>
		<RouterFab></RouterFab>
		<view style="background-color: #fff;">
			<uni-search-bar bgColor="white" :radius="100" @confirm="search" placeholder="请输入搜索关键字"></uni-search-bar>
		</view>
		<cl-filter-bar @change="onChange" class="filter-bar">
			<cl-filter-item label="时间优先" />
			<cl-filter-item label="酬金优先" />
			<cl-filter-item label="地点筛选" v-model="arr" :options="list" type="dropdown" multiple prop="rank" theme="grid"/>
		</cl-filter-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						label: "菜鸟驿站",
						value: 1
					},
					{
						label: "丰巢快递柜",
						value: 2
					},
					{
						label: "其他",
						value: 3
					}
				],
				arr: [1],
			}
		},
		methods: {
			onChange() {}
		}
	}
</script>

<style lang="scss">

</style>
