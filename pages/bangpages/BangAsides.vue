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
		<view class="card-box" v-if="visiable">
			<view class="card" v-for="card in asides" :key="card.id">
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
				asides: [],
				visiable:false,
			}
		},
		methods: {
			onChange() {}
		},
		components: {},
		beforeMount() {
			uni.request({
				url: this.$api.getAsidesUrl(this.asides.length),
				success: (res) => {
					console.log(res)
					res.data.data.list.forEach(item=>{
						this.asides.push({
							...item,
							showMore: true,
							moreText:item.catagory,
							showFooter:true,
							footText:item.createTime
						})
					})
					this.visiable=true
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
</style>
