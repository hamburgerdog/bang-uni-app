<template>
	<view>
		<RouterFab></RouterFab>
		<view style="background-color: #fff;">
			<uni-search-bar bgColor="white" :radius="100" @confirm="search" placeholder="请输入搜索关键字"></uni-search-bar>
		</view>
		<cl-filter-bar @change="onChange" class="filter-bar">
			<cl-filter-item label="生活用品" />
			<cl-filter-item label="体育用品" />
			<cl-filter-item label="课本书籍" />
			<cl-filter-item label="其他" />
		</cl-filter-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
