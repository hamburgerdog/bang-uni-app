<template>
	<view>
		<RouterFab></RouterFab>
		<view style="background-color: #fff;">
			<uni-search-bar bgColor="white" :radius="100" @confirm="search" placeholder="请输入搜索关键字"></uni-search-bar>
		</view>
		<cl-filter-bar @change="onChange" class="filter-bar">
			<cl-filter-item label="寻物启事" />
			<cl-filter-item label="失物招领" />
			<cl-filter-item label="校园帮帮" />
		</cl-filter-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			onChange() {

			}
		},
		components: {

		}
	}
</script>

<style lang="scss" scoped>
</style>
