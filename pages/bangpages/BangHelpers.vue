<template>
	<view>
		<RouterFab></RouterFab>
		<view style="background-color: #fff;">
			<uni-search-bar bgColor="white" :radius="100" @confirm="search" placeholder="请输入搜索关键字"></uni-search-bar>
		</view>
		<cl-filter-bar @change="onChange" class="filter-bar">
			<cl-filter-item label="酬金优先" />
			<cl-filter-item label="时间优先" />
		</cl-filter-bar>
		<uni-notice-bar scrollable="true" single="true" text="禁止发布代课|替考|刷单求助  , 禁止发布代课|替考|刷单求助 , 禁止发布代课|替考|刷单求助  , 禁止发布代课|替考|刷单求助" speed="80"
			showIcon="true" />
		<view class="card-box">
			<view class="card" v-for="card in helpers" :key="card.index">
				<MyCard :card="card"></MyCard>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				helpers: [{
						title: '测试Test',
						index: 1,
						showMore: true,
						moreText: '更多详情',
						images: [],
						content: "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
						showFooter: true,
						highLight: true,
						footerText: '备注：脚注测试',
						path:'/pages/detailpages/BangHelper'
					},
					{
						title: '测试Test',
						index: 2,
						showMore: false,
						moreText: '更多详情',
						images: [],
						content: "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
						showFooter: true,
						highLight: true,
						footerText: '备注：脚注测试',
						path:'/pages/detailpages/BangHelper'
					},
					{
						title: '测试Test',
						index: 3,
						showMore: false,
						moreText: '更多详情',
						images: [],
						content: "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
						showFooter: true,
						highLight: false,
						footerText: '备注：脚注测试',
						path:'/pages/detailpages/BangHelper'
					},
					{
						title: '测试Test',
						index: 4,
						showMore: false,
						moreText: '更多详情',
						images: [],
						content: "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
						showFooter: false,
						highLight: false,
						footerText: '备注：脚注测试',
						path:'/pages/detailpages/BangHelper'
					}
				]
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
	.card-box{
		padding: 0 20rpx;
		
		.card{
			position: relative;
			margin-bottom: 20rpx;
		}
	}
</style>
