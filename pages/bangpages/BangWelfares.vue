<template>
	<view>
		<RouterFab></RouterFab>
		<view style="background-color: #fff;">
			<uni-search-bar bgColor="white" :radius="100" @confirm="search" placeholder="请输入搜索关键字"></uni-search-bar>
		</view>
		<cl-filter-bar @change="onChange" class="filter-bar">
			<cl-filter-item label="寻物启事" prop="寻物启事" value="true" />
			<cl-filter-item label="失物招领" prop="失物招领" value="true" />
			<cl-filter-item label="校园帮帮" prop="校园帮帮" value="true" />
		</cl-filter-bar>
		<view class="card-box" v-if="visiable">
			<view class="card" v-for="card in welfares" :key="card.id">
				<MyCard :card="card"></MyCard>
			</view>
		</view>
		<view class="card-box" v-else>
			<p>页面加载中。。。</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				welfares: [],
				visiable: false,
			}
		},
		methods: {
			onChange({
				prop,
				value
			}) {
				if (value) {
					this.welfares.forEach(item => {
						if (item.moreText === prop) {
							item.show = true
						}
					})
				} else {
					this.welfares.forEach(item => {
						if (item.moreText === prop) {
							item.show = false
						}
					})
				}
			}
		},
		components: {

		},
		beforeMount() {
			uni.request({
				url: this.$api.getWelfaresUrl(this.welfares.length),
				success: (res) => {
					res.data.data.list.forEach(item => {
						this.welfares.push({
							...item,
							showMore: true,
							moreText: item.catagory,
							showFooter: true,
							footerText: item.createTime,
							show: true,
						})
					})
					this.welfares.sort(function(a, b) {
						return new Date(b.footerText) - new Date(a.footerText)
					})
					this.visiable = true
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
</style>
