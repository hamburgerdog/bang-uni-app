<template>
	<view>
		<RouterFab></RouterFab>
		<view style="background-color: #fff;">
			<uni-search-bar bgColor="white" :radius="100" @confirm="search" placeholder="请输入搜索关键字"></uni-search-bar>
		</view>
		<cl-filter-bar @change="handleChange()" class="filter-bar">
			<cl-filter-item label="寻物启事" prop="寻物启事" value="true" />
			<cl-filter-item label="失物招领" prop="失物招领" value="true" />
			<cl-filter-item label="校园帮帮" prop="校园帮帮" value="true" />
		</cl-filter-bar>
		<view class="card-box" v-if="visiable">
			<view class="card" v-for="card in welfares" :key="card.id">
				<MyCard :card="card"></MyCard>
			</view>
			<cl-loadmore background-color="#f9f9f9" :loading="loading" :finish="finished"></cl-loadmore>
		</view>
		<my-loading v-else></my-loading>
	</view>
</template>

<script>
	import MyLoading from '../../components/MyLoading/MyLoading.vue'

	export default {
		data() {
			return {
				welfares: [],
				visiable: false,
				loading: false,
				finished: false,
				selector: new Set(['寻物启事', '失物招领', '校园帮帮']),
			}
		},
		components: {
			MyLoading,
		},
		methods: {
			updateShowState() {
				this.welfares.forEach(item => {
					if (this.selector.has(item.moreText)) {
						item.show = true
					} else {
						item.show = false
					}
				})
			},
			addWelfares(welfareList) {
				welfareList.forEach(item => {
					this.welfares.push({
						...item,
						showMore: true,
						moreText: item.category,
						showFooter: true,
						footerText: item.createTime,
						show: false
					})
				})
				this.welfares.sort(function(a, b) {
					return new Date(b.footerText) - new Date(a.footerText)
				})
				this.updateShowState()
			},
			handleChange({
				prop,
				value
			}) {
				if (value) {
					this.selector.add(prop)
				} else {
					this.selector.delete(prop)
				}
				this.updateShowState()
			}
		},
		beforeMount() {
			this.$api.getWelfares(this.welfares.length).then(welfares => {
				this.addWelfares(welfares)
				this.visiable = true
			})
		},
		onReachBottom() {
			this.loading = true
			this.$api.getWelfares(this.welfares.length).then(welfares => {
				this.addWelfares(welfares)
				this.loading = false
			})
		}
	}
</script>

<style lang="scss" scoped>
</style>
