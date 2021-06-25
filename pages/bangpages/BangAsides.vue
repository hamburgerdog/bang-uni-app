<template>
	<view>
		<RouterFab></RouterFab>
		<view class="band-header-fixed">
			<view style="background-color: #fff;">
				<uni-search-bar bgColor="white" :radius="100" @confirm="search" placeholder="请输入搜索关键字"></uni-search-bar>
			</view>
			<cl-filter-bar @change="handleChange()" class="filter-bar">
				<cl-filter-item label="生活用品" prop="生活用品" value="true" />
				<cl-filter-item label="体育用品" prop="体育用品" value="true" />
				<cl-filter-item label="课本书籍" prop="课本书籍" value="true" />
				<cl-filter-item label="其他" prop="其他" value="true" />
			</cl-filter-bar>
		</view>
		<view class="card-box bang-after-header" v-if="visiable">
			<view class="card" v-for="card in asides" :key="card.id">
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
				asides: [],
				visiable: false,
				loading: false,
				finished: false,
				selector: new Set(['生活用品', '体育用品', '课本书籍', '其他']),
			}
		},
		components: {
			MyLoading,
		},
		methods: {
			updateShowState() {
				this.asides.forEach(item => {
					if (this.selector.has(item.moreText)) {
						item.show = true
					} else {
						item.show = false
					}
				})
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
			},
			addAsides(asideList) {
				asideList.forEach(item => {
					this.asides.push({
						...item,
						showMore: true,
						moreText: item.category,
						show: false
					})
				})
				this.asides.sort(function(a, b) {
					return new Date(b.footerText) - new Date(a.footerText)
				})
				this.updateShowState()
			}
		},
		beforeMount() {
			this.$api.getAsides(this.asides.length).then(asideList => {
				this.addAsides(asideList),
					this.visiable = true
			})
		},
		onReachBottom() {
			this.loading = true
			this.$api.getAsides(this.asides.length).then(asides => {
				this.addAsides(asides)
				this.loading = false
			})
		}
	}
</script>

<style lang="scss" scoped>
</style>
