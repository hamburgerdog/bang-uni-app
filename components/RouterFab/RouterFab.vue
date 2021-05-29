<template>
	<view>
		<uni-fab :pattern="pattern" :content="content" horizontal="right" vertical="bottom" direction="vertical"
			@trigger="trigger" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pattern: {
					color: '#272343',
					backgroundColor: '#FFFFFF',
					selectedColor: '#007AFF',
					buttonColor: '#aaaaaa'
				},
				content: [{
						iconPath: '/static/icon/fab-icon/operation.png',
						selectedIconPath: '/static/icon/fab-icon/operation-sel.png',
						text: '校园帮帮',
						active: false,
						path: '/pages/bangpage/BangWelfare'
					},
					{
						iconPath: '/static/icon/fab-icon/agriculture.png',
						selectedIconPath: '/static/icon/fab-icon/agriculture-sel.png',
						text: '帮帮快递',
						active: false,
						path: '/pages/bangpage/BangDeliver'
					},
					{
						iconPath: '/static/icon/fab-icon/packaging.png',
						selectedIconPath: '/static/icon/fab-icon/packaging-sel.png',
						text: '帮帮外卖',
						active: false,
						path: '/pages/bangpage/BangFood'
					},
					{
						iconPath: '/static/icon/fab-icon/helper.png',
						selectedIconPath: '/static/icon/fab-icon/helper-sel.png',
						text: '帮帮互助',
						active: false,
						path: '/pages/bangpage/BangHelper'
					},
					{
						iconPath: '/static/icon/fab-icon/aside.png',
						selectedIconPath: '/static/icon/fab-icon/aside-sel.png',
						text: '帮帮闲置',
						active: false,
						path: '/pages/bangpage/BangAside'
					}
				],
			}
		},
		methods: {
			trigger(e) {
				this.content.forEach(function(item) {
					item.active = false;
				})
				this.content[e.index].active = true;
				uni.redirectTo({
					url: this.content[e.index].path
				})
			},
		},
		components: {

		},
		beforeMount() {
			let pages = getCurrentPages();
			let path = '/' + pages[pages.length - 1].route;
			this.content.forEach((item) => {
				if (item.path === path) {
					item.active = true
					return
				}
			})
		},
	}
</script>

<style lang="scss" scoped>
</style>
