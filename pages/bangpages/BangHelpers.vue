<template>
	<view>
		<RouterFab @reflash="reflash()"></RouterFab>
		<view class="bang-title">
			<view style="background-color: #fff;">
				<uni-search-bar bgColor="white" :radius="100" @confirm="search" placeholder="请输入搜索关键字"></uni-search-bar>
			</view>
			<cl-filter-bar @change="onChange" class="filter-bar">
				<cl-filter-item label="酬金优先" />
				<cl-filter-item label="时间优先" />
				<cl-filter-item label="性别限定" v-model="gender" :options="genderList" type="dropdown" prop="rank"
					theme="grid" />
			</cl-filter-bar>
			<uni-notice-bar scrollable="true" single="true"
				text="禁止发布代课|替考|刷单求助  , 禁止发布代课|替考|刷单求助 , 禁止发布代课|替考|刷单求助  , 禁止发布代课|替考|刷单求助" speed="80" showIcon="true" />
		</view>
		<view class="card-box" v-if="visiable">
			<view class="card" v-for="card in helpers" :key="card.index">
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
						path: '/pages/detailpages/BangHelper'
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
						path: '/pages/detailpages/BangHelper'
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
						path: '/pages/detailpages/BangHelper'
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
						path: '/pages/detailpages/BangHelper'
					},
					{
						title: '测试Test',
						index: 5,
						showMore: true,
						moreText: '更多详情',
						images: [],
						content: "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
						showFooter: true,
						highLight: true,
						footerText: '备注：脚注测试',
						path: '/pages/detailpages/BangHelper'
					},
					{
						title: '测试Test',
						index: 6,
						showMore: false,
						moreText: '更多详情',
						images: [],
						content: "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
						showFooter: true,
						highLight: true,
						footerText: '备注：脚注测试',
						path: '/pages/detailpages/BangHelper'
					},
					{
						title: '测试Test',
						index: 7,
						showMore: false,
						moreText: '更多详情',
						images: [],
						content: "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
						showFooter: true,
						highLight: false,
						footerText: '备注：脚注测试',
						path: '/pages/detailpages/BangHelper'
					},
					{
						title: '测试Test',
						index: 8,
						showMore: false,
						moreText: '更多详情',
						images: [],
						content: "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
						showFooter: false,
						highLight: false,
						footerText: '备注：脚注测试',
						path: '/pages/detailpages/BangHelper'
					},
					{
						title: '测试Test',
						index: 9,
						showMore: true,
						moreText: '更多详情',
						images: [],
						content: "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
						showFooter: true,
						highLight: true,
						footerText: '备注：脚注测试',
						path: '/pages/detailpages/BangHelper'
					},
					{
						title: '测试Test',
						index: 10,
						showMore: false,
						moreText: '更多详情',
						images: [],
						content: "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
						showFooter: true,
						highLight: true,
						footerText: '备注：脚注测试',
						path: '/pages/detailpages/BangHelper'
					},
					{
						title: '测试Test',
						index: 11,
						showMore: false,
						moreText: '更多详情',
						images: [],
						content: "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
						showFooter: true,
						highLight: false,
						footerText: '备注：脚注测试',
						path: '/pages/detailpages/BangHelper'
					},
					{
						title: '测试Test',
						index: 12,
						showMore: false,
						moreText: '更多详情',
						images: [],
						content: "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
						showFooter: false,
						highLight: false,
						footerText: '备注：脚注测试',
						path: '/pages/detailpages/BangHelper'
					},
					{
						title: '测试Test',
						index: 13,
						showMore: true,
						moreText: '更多详情',
						images: [],
						content: "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
						showFooter: true,
						highLight: true,
						footerText: '备注：脚注测试',
						path: '/pages/detailpages/BangHelper'
					},
					{
						title: '测试Test',
						index: 14,
						showMore: false,
						moreText: '更多详情',
						images: [],
						content: "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
						showFooter: true,
						highLight: true,
						footerText: '备注：脚注测试',
						path: '/pages/detailpages/BangHelper'
					},
					{
						title: '测试Test',
						index: 15,
						showMore: false,
						moreText: '更多详情',
						images: [],
						content: "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
						showFooter: true,
						highLight: false,
						footerText: '备注：脚注测试',
						path: '/pages/detailpages/BangHelper'
					},
					{
						title: '测试Test',
						index: 16,
						showMore: false,
						moreText: '更多详情',
						images: [],
						content: "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
						showFooter: false,
						highLight: false,
						footerText: '备注：脚注测试',
						path: '/pages/detailpages/BangHelper'
					}
				],
				visiable: true,
				genderList: [{
						label: '女生',
						value: '女生'
					},
					{
						label: '男生',
						value: '男生'
					},
					{
						label: '不限',
						value: '不限'
					}
				],
				gender: ''
			}
		},
		methods: {
			onChange() {},
			reflash() {
				this.visiable = false;
				setTimeout(() => this.visiable = true, 2000)
			}
		},
		components: {

		}
	}
</script>

<style lang="scss" scoped>
	.card-box {
		margin-top: 270rpx;
		padding: 0 20rpx;

		.card {
			position: relative;
			margin-bottom: 20rpx;
		}
	}
</style>
